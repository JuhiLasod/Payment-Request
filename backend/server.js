import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import qrroutes from "./qrroutes.js";
const app=express();
app.use(express.json());
app.use(cors());

// app.use("/",(req,res)=>{
//     // res.send("API running");
// });
app.use("/api/qr",qrroutes);
app.listen(8000,()=>{
    console.log("server running");
})