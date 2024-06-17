import dotenv from 'dotenv'
import connectDB from "./db/index.js";
import app from './app.js';

dotenv.config({path: './env'});

const PORT = process.env.PORT || 3000;

connectDB()
.then(()=>{

    //app.on() to catch any runtime errors that occur after the server has started.
    app.on('error',(err)=>{
        console.log('Error occured in the app: ',err);
    })

    //app.listen() server started
    app.listen(PORT, ()=>{
        console.log(`App started at port: ${PORT}`);
    })
})
.catch((error)=>{
    console.log("Mongo DB failed at src Index!!!", error);
})















/*
import express from 'express'
const app = express();
const PORT = process.env.PORT
( async() => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        app.on("error", (error)=>{
            console.log("Error connecting to MongoDB", error)
        })
        app.listen(PORT, ()=>{
            console.log(`Server is running on port ${PORT}`)
        })
    } catch (error) {
        console.log(error);
    }
})()

*/