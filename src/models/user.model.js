import mongoose from "mongoose";

//This Just  shema, create a instance of mongoose
const Reviews = new mongoose.Schema({
    identifier:{
        type:Number,
        required:true,
        trim:true,//Delete space
        unique:true
    },
    review:{
        type:String,
        required:true,
        trim:true
    }
})

//Create the model for mongoDB, so,there is collection with objects(comments) inside.
export default mongoose.model('Reviews', Reviews)