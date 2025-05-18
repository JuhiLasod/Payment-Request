import qrcode from "qrcode";
export const qrController=async(req,res)=>{
    const {am}=req.body;
    const upilink=`upi://pay?pa=JuhiLasod29@okhdfcbank&pn=juhi%20lasod&am=${am}&cu=INR`;
    // const upilink="upi://pay?pa=jalajlasod26@okhdfcbank&pn=jalaj%20lasod&am=1&cu=INR";

    const qrDataURL = await qrcode.toDataURL(upilink);
    res.json({qr: qrDataURL});
};