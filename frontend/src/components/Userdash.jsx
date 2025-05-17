import React, { useState } from "react";
function Userdash(){
    const [am,setAm]=useState('');
    const [qr,setQr]=useState('');
    const handlePay=async()=>{
        const res=await fetch("http://localhost:8000/api/qr/generate",{
            method: "POST",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify({am})
        });
        const data=await res.json();
        setQr(data.qr);
    }
    return (
        <div>
            <div><input type="text" 
                        value={am}
                        onChange={(e)=>setAm(e.target.value)}
                />
            </div>
            <button onClick={handlePay}>pay now</button>
            <div>
                {(qr) && (<img src={qr} alt="upi qr"/>)}
            </div>
        </div>
    );
}
export default Userdash;