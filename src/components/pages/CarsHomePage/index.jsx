import "./styles.css";
import { useEffect, useState, useContext } from "react";
import{CarItem} from '../../CarItem'
import CarsOrderContext from "../../../context/CarsOrderContext";
import {Search} from "../../Search";
import {getAuth,onAuthStateChanged} from 'firebase/auth';
import {useHistory} from 'react-router-dom';

export const CarsHomePage = () => {
  const [Cars, setCars] = useState([]);
  const[filteredCars, setFilteredCars]=useState([]);
  const [loading, setLoading]=useState(true);
  const globalState = useContext(CarsOrderContext);
  const [searchString, setSearchString] = useState('');

const history = useHistory();

useEffect(
  ()=>{
    const auth=getAuth();
    onAuthStateChanged(auth, (user)=>{
      if(!user){
        history.push('/login');
      }
    })
  }, []
);

useEffect(
    ()=>{
      getCars();
    }, []
  );
  useEffect(
    ()=>{
      handleSearchByBrand();
    }, [searchString]
  );
const handleSearchByBrand = ()=>{
  //if search string empty dont filter
  if(searchString ===''){
    setFilteredCars(Cars);
    return;
  }
  //filter
  const CarsFiltered = Cars.filter(
    
    (Car) =>{
      const brand = Car.brand.stringValue.indexOf(searchString.trim().toLowerCase())
      const isMatch = brand.indexOf(searchString.trim().toLowerCase());
      return isMatch !==-1;
    }

  )    
  setFilteredCars(CarsFiltered);

}
  const getCars = async()=>{
    try{
      const response = await fetch('https://firestore.googleapis.com/v1/projects/car-store-a5ed7/databases/(default)/documents/car-store-products');
      const data = await response.json();
      console.log(data);
      const formatData = data.documents.map( (item)=>{
        return item.fields
      });
      setCars(formatData);      
      setFilteredCars(formatData);

      globalState.intializeCars(formatData);
      setLoading(false);
    }catch(err){
      console.log(err);
      setLoading(false);

    }
  }
  const handleSearchUpdate = (event) => {
    setSearchString(event.target.value);
  }
    

  return (
    <div className="Cars-page">
        <h1 className="Cars-title"> All Cars </h1>    
        <div className="Cars-container">
        <Search handleSearchUpdate={handleSearchUpdate}/>
        {
          filteredCars.map((Car)=>(
            <CarItem image={Car.image.stringValue} name={Car.name.stringValue} brand={Car.brand.stringValue} color={Car.color.stringValue} type={Car.CarType.stringValue} id={Car.id.stringValue} />
            )
          )
        }
        {
          filteredCars.length ===0&&<p>Nothing found for {searchString}!</p>
        }
        {
          loading && <p>Loading data..</p>
        }
    </div>
    </div>
  );
};
