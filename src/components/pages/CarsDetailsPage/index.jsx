import {useParams}from 'react-router-dom'
import {useContext, useEffect, useState} from 'react';
import "./styles.css"
import CarsOrderContext from '../../../context/CarsOrderContext';

export const CarsDetailsPage = (props)=>{
    const {id}=useParams();
    const [Car, setCar]=useState({});
    const globalState = useContext(CarsOrderContext);

    useEffect(()=>{
        const Car = globalState.Cars.find(
            (Car)=>Car.id.stringValue === id
            );
        setCar(Car);
    },[])
    if (Car){
        return (
            <div className="Cars-page">
                <h1 className="Cars-title">{Car.name?.stringValue}</h1>
                <p>Car Info:</p>
                <p>very nice car</p>
                <img src={Car.image?.stringValue} alt="image" />
            </div>
        )
    }else {
        return <p>no Cars with this id</p>
    }


}