

import express from "express";
import mongoose from  "mongoose" ;
import cors from "cors" ;
import Pusher from"pusher" ;
import DbModel from './DbModelSchema.js'
//configuration of dotenv with type :module
import dotenv from 'dotenv';
dotenv.config();
//


// app config
const app=express()

const port= process.env.PORT||8080
// Middlewares
app.use(express.json()); 
app.use(cors());

//DB config

mongoose.connect(process.env.DbURL);
mongoose.connection.once("open",()=>{
    console.log("DB connected")
})
// api routes
app.get("/",(req,res)=>res.status(200).send("Hello world"))
app.post("/upload",(req,res)=>{
    const body=req.body;
    DbModel.create(body,(err,data)=>{
        if(err){
            res.status(500).send(Error)
        }else{
            res.status(201).send(data)
        }
    })

});  
app.get("/async",(req,res)=>{
    DbModel.find((err,data)=>{
        if(err){
            res.status(500).send(Error)
        }else{
            res.status(201).send(data)
        }
})});
//listen

app.listen( port,()=> console.log(`listen on : ${port}`) )