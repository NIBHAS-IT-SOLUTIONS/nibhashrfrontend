// PhoneAuth.js
import React, { useState } from 'react';
import axios from 'axios';

const PhoneAuth = () => {
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [step, setStep] = useState('phone');

  const sendOtp = async () => {
    console.log(phone);
    
    try {
      await axios.post('http://localhost:4000/send-otp', { phone });
      setStep('otp');
    } catch (err) {
      alert("Failed to send OTP");
    }
  };

  const verifyOtp = async () => {
    try {
      const res = await axios.post('http://localhost:4000/verify-otp', { phone, code: otp });
      if (res.data.status === "approved") {
        alert("Phone verified!");
      } else {
        alert("Incorrect OTP");
      }
    } catch (err) {
      alert("Verification failed");
    }
  };

  return (
    <div>
      {step === 'phone' ? (
        <>
          <input type="tel" placeholder="+11234567890" value={phone} onChange={e => setPhone(e.target.value)} />
          <button onClick={sendOtp}>Send OTP</button>
        </>
      ) : (
        <>
          <input type="text" placeholder="Enter OTP" value={otp} onChange={e => setOtp(e.target.value)} />
          <button onClick={verifyOtp}>Verify OTP</button>
        </>
      )}
    </div>
  );
};

export default PhoneAuth;
