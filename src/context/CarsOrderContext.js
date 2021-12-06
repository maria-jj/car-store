import React, {useState} from 'react';

const CarsOrderContext = React.createContext({
    Cars:[],
    order: [],
    addCarToOrder: () => {},
    removeCarFromOrder: () => {},
    intializeCars: ()=>{},
});

export const CarsOrderContextProvider = (props) => {
    const [order, setOrder] = useState([]);
    const [Cars, setCars] = useState([]);


    const intializeCars = (CarsFromApi)=>{
    setCars(CarsFromApi);
    }
    const addCarToOrder = (Car) => {
        let newOrder = order; 
        newOrder.push (Car);
        setOrder(order);
    }

    const removeCarFromOrder = (CarId) => {
        let prevOrder = order;
        const found = order.findIndex( (Car ) => {
            return (Car.id === CarId); 
        })
        if (found !== -1) {
            prevOrder.splice(found, 1); // delete one
            setOrder([...prevOrder]);
        } else {
            console.log ("error delete");
        }
    }
    
    return (<CarsOrderContext.Provider
     value={{order: order, addCarToOrder: addCarToOrder, removeCarFromOrder: removeCarFromOrder, Cars: Cars, intializeCars:  intializeCars}}
    >
        {props.children}
    </CarsOrderContext.Provider>)

} 

export default CarsOrderContext;