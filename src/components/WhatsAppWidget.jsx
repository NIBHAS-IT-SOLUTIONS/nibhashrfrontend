import React from 'react';
import { FloatingWhatsApp } from 'react-floating-whatsapp'; // ✅ Correct component
//import 'react-floating-whatsapp/dist/floating-whatsapp.css'; // ✅ Correct CSS path
import dp from '../images/nibhashrdlogo.png'
const WhatsAppWidget = () => {
  return (
    <FloatingWhatsApp
      phoneNumber="+918086094884" // ✅ Add your full WhatsApp number with country code
      accountName="Nibhas HRD Solutions"
      statusMessage="Typically replies in minutes"
      chatMessage="Hi there! 👋 How can we help you?"
      avatar={dp} // optional
      allowClickAway
      notification
      notificationSound
    />
  );
};

export default WhatsAppWidget;
