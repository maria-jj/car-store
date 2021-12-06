import './styles.css';
import {Button} from '../Button';
import {Link} from 'react-router-dom';
import CarsOrderContext from '../../context/CarsOrderContext';
import {useContext} from 'react';

export const CarItem = (props)=>{
    const{image,color, name, brand, type, id} = props;
    const globalState = useContext(CarsOrderContext);
    const addCarToCart = () =>{
        const Car ={
            id, 
            name, 
            image, 
            brand, 
            type, 
           color
        }
        globalState.addCarToOrder(Car);
        alert("Car was added");
    }
    return(
        <div className="Car">
            <img className="Car-photo" src={image} alt={name+brand+"photo"}/>
            <Link to ={`/Car/${id}`}>
                <h1 className="Car-name">{name}</h1>
            </Link>
     
            <p className="Car-brand">{brand}</p>
            <p className="Car-color">{color} </p>

            <Button text="Request Car" type="primary"isDisabled={false} action={addCarToCart}/>
        </div>
    )
}