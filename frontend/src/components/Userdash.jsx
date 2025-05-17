import React, { useState } from "react";

function Userdash() {
  const [amount, setAmount] = useState("");

  const handlePay = () => {
    const upiLink = `upi://pay?pa=jalajlasod26@okhdfcbank&pn=jalaj%20lasod&am=1&cu=INR`;
    window.open(upiLink, "_self");


  };

  return (
    <div>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Enter amount"
      />
      <button onClick={handlePay}>Pay Now</button>
    </div>
  );
}

export default Userdash;
