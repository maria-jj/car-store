import {useForm} from "react-hook-form";
import {useHistory}from "react-router-dom";
import "./styles.css";
import {useState} from "react";
export const NewCarPage = () =>{
    const {register, handleSubmit}=useForm();
    const history=useHistory();

    const submitCar=async(formVals)=>{
        const formattedData={
            fields:{
                id:{
                    stringValue: formVals.id
                },
                brand:{
                    stringValue: formVals.brand
                },
                color:{
                    stringValue: formVals.color
                },
                name:{
                    stringValue: formVals.name
                },
            }
        } 
        console.log(formVals, formattedData);
        try{
                    const response= await fetch('https://firestore.googleapis.com/v1/projects/car-store-a5ed7/databases/(default)/documents/car-store-products',
          {
            headers: {
                'Content-Type': 'application/json'
            },
                method: "POST",
                body: JSON.stringify(formattedData)
            })
            history.pushState('/');
            }catch (error){
                console.log("error",error);
            }
            
        };
            
    return(
        <div className="Cars-page">
        <form className="form-layout" onSubmit={handleSubmit(submitCar)}>
        <h2>Submit a new page</h2>
        <br/>
        <label htmlFor="CarType">Car Type</label>
        <input
        {...register("CarType")}
        name="CarType"
        required
        />
        <label htmlFor="name">name</label>
        <input {...register("name")} name="name" required type="text"/>
        <label htmlFor="brand">brand</label>
        <input {...register("brand")}
        name="brand"
        required
        />
        <label htmlFor="image">Image Url</label>
        <input
        {...register("image")}
        name="image"
        required
        />
        <label htmlFor="color">Color</label>
        <input {...register("color")}
        name="color"
        required
        />
        <label htmlFor="id">Unique ID</label>
        <input {...register("id")}
        name="id"
        required
        />
        <input type="submit" value="submit Car"/>
        <br/>
        </form>
        
        </div>
        ); };
   