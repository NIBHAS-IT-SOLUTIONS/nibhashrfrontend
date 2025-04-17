import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import axios from 'axios';
import { baseURL } from '../constants/constants';
import './Forms.css'

function Forms() {
  const form = useRef();

  const [data, setData] = useState({
    from_name: "",
    frommail: "",
    phone: "",
    message: "",
    service: ""
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setData((prevProps) => ({
      ...prevProps,
      [name]: value
    }));
  };

  const sendEmail = async (event) => {
    event.preventDefault();
    console.log(form.current);
    emailjs
      .sendForm('service_c3oh2p4', 'template_5ppfh5y', form.current, {
        publicKey: 'IqgHhEqtlLJn6Dp7x',
      })
      .then(
        () => {
          console.log('SUCCESS!');

          window.alert("Message Sent");
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
    try {
      await axios.post(`${baseURL}`, { data })
        .then((res) => { console.log("done"); });

    }
    catch (error) {
      console.log(error);
    }
  

  };

  return (
    <>
      <div className='contact-heading'id="contact">
        <h1>Contact</h1>
      </div>

      <div className="parent" >
  <div className="child1">
    <img src="https://i.postimg.cc/rF1CMLXG/5754850-2975414.jpg" alt="Contact Illustration" />
  </div>

  <div className="child2">
    <div className="form">
      <form ref={form} onSubmit={sendEmail}>
        <h1>We'd Love to Hear From You</h1>

        <div className="input-container">
          <input
            required
            id="from_name"
            name="from_name"
            type="text"
            placeholder="Name"
            value={data.from_name}
            onChange={handleInputChange}
          />
        </div>

        <div className="input-container">
          <input
            required
            id="email"
            name="frommail"
            type="email"
            placeholder="Email"
            value={data.frommail}
            onChange={handleInputChange}
          />
        </div>

        <div className="input-container">
          <input
            required
            name="phone"
            type="tel"
            placeholder="Phone Number"
            value={data.phone}
            onChange={handleInputChange}
          />
        </div>

        <div className="message-box">
          <textarea
            required
            name="message"
            placeholder="Message"
            rows="4"
            cols="60"
            value={data.message}
            onChange={handleInputChange}
          />
        </div>

        <button className='btn btn-primary btn-lg btn-block' type="submit" >Send</button>
      </form>
    </div>
  </div>
</div>


    </>



              )
}

              export default Forms;