import React, { useRef ,useState} from 'react'
import './Forms.css'
import emailjs from '@emailjs/browser';
import axios from 'axios';
import { baseURL } from '../constants/constants';

function Forms() {
  const form = useRef();

  const [data, setData] = useState({
    from_name: "",
    frommail: "",
    phone:"",
    message:"",
    service:""
  });
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setData((prevProps) => ({
      ...prevProps,
      [name]: value
    }));
  };
  const sendEmail = async(event) => {
    event.preventDefault();
    console.log(form.current);
    emailjs
      .sendForm('service_c3oh2p4', 'template_ndajx56', form.current, {
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
       await axios.post(`${baseURL}`, {data} )
        .then((res) => { console.log("done"); });
      
      }
      catch (error) {
        console.log(error);
      }
      


  };

  return (
    <>
      <div className='contact-heading'>
        <h1>Contact</h1>
      </div>


      <div className="parent" id='contact'>
        <div className="child1">
          <img src="https://i.postimg.cc/rF1CMLXG/5754850-2975414.jpg" alt="" />
        </div>
        <div className="child2">
          <div class="form">
            <form ref={form} onSubmit={sendEmail}>


              <h1>Fill out the form</h1>

              <div class="input-container">
                <input id="from_name" required value={data.from_name} onChange={handleInputChange} name='from_name' class="input" type="text" placeholder="Name" />

              </div>

              <div class="input-container">
                <input id="email" required  value={data.frommail} onChange={handleInputChange} name='frommail' class="input" type="mail" placeholder="Email" />
              </div>

              <div class="input-container">
                <input  required value={data.phone} onChange={handleInputChange} class="input" name='phone' type="phone" placeholder="Number" />
              </div>

              <div className='message-box'>
                <textarea required value={data.message} onChange={handleInputChange} name="message" id="" cols="30" rows="4" placeholder='Message'></textarea>
              </div>

              <div className='dropdown'>
                <select name='service' value={data.service} required onChange={handleInputChange}>
                  <option value="">Select the service you want !</option>
                  <option value="DOCTOR'S PLACEMENT SERVICE">DOCTOR'S PLACEMENT SERVICE</option>
                  <option value="PLACEMENT SERVICE">PLACEMENT SERVICE</option>
                  <option value="DIGITAL MARKETING">DIGITAL MARKETING</option>
                  <option value="WEB DEVELOPMENT">WEB DEVELOPMENT</option>

                </select>
              </div>





              {/* <div className="input-container">
      <input type="file" name="myfile"/>
      </div> */}

              <button  type="submit" class="submit">Send</button>
            </form>

          </div>
        </div>
      </div>

    </>

  )
}

export default Forms