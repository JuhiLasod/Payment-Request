import express from "express";
import qrcode from "qrcode";

const qrroutes=express.Router();
qrroutes.post("/generate",async(req,res)=>{
    const {am}=req.body;
    const upilink=`upi://pay?pa=juhilasod29@okhdfcbank&pn=Juhi%20Lasod&am=${am}&cu=INR`;
    res.send(upilink);
});
export default qrroutes;