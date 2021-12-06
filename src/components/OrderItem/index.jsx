import {Button} from "../Button";
import './styles.css'
import {useContext} from "react";
import CarsOrderContext from "../../context/CarsOrderContext";
export const OrderItem = (props)=>{
    const {image,age,name,id}=props;        
    const globalState  = useContext(CarsOrderContext);

    const removeCar=()=>{
        globalState.removeCarFromOrder(id);
        console.log("remove this Car")
    }
    return(
        <div className="order-item">
        <img className="order-photo" src={image} alt="Car-photo"/>
        <div className="order-item-desc">
            <h1 className="order-item-name">{name}</h1>
            <p className="order-item-page">{age}</p>
        </div>
        <Button text="remove Car" type="secondary" isDisabled={false} action={removeCar}/>
        </div>

    )
}