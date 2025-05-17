import express from "express";
import qrcode from "qrcode";
import { qrController } from "./qrController.js";
const route=express.Router();
route.post("/generate",qrController);
export default route;