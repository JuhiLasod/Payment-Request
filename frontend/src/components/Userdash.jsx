import React, { useState } from "react";

function UpiPayButton() {
  const [amount, setAmount] = useState("");

  const handlePay = () => {
    const upiLink = `upi://pay?pa=jalajlasod26@okhdfcbank&pn=jalaj%20lasod&am=${amount}&cu=INR`;
    window.open(upiLink);

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

export default UpiPayButton;
