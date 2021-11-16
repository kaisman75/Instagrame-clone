import express from "express";
import mongoose  from "mongoose";
import cors from "cors";
import Pusher from "pusher";



// app config
const app=express();
const port= process.env.PORT||8080
// Middlewares
app.use(express.json());
app.use(cors());

//DB config


// api routes
app.get("/",(req,res)=>res.status(200).send("Hello world"))
   
//listen
app.listen(port,()=>console.log(`listen on : ${port}`));