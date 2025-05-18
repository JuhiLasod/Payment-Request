import qrcode from "qrcode";
export const qrController=async(req,res)=>{
    const {am}=req.body;
    const upilink=`upi://pay?pa=juhilasod29@okhdfcbank&pn=Juhi%20Lasod&am=${am}&cu=INR`;
    // const upilink="upi://pay?pa=jalajlasod26@okhdfcbank&pn=jalaj%20lasod&am=1&cu=INR";

    const qrDataURL = await qrcode.toDataURL(upilink);
    res.json({qr: qrDataURL});
};