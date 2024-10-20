
//Mongoose is a dependency for using MongoDB on node
import mongoose from "mongoose";

//Export fuction connectionDB, this asyn and await
export const connectionDB = async() => {
    
    //Exception
    try{
        //Adress
        await mongoose.connect("mongodb://localhost/ponderatidatabase");
        console.log("Database connect")
    }catch(error){
        console.log(error());   
    }   
};