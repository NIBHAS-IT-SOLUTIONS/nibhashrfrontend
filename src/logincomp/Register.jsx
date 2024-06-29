import { React, useState } from 'react'
import axios from 'axios'
import './Register.css'
import { useNavigate } from 'react-router-dom';
import { baseURL } from '../constants/constants';

function Register() {
  const [data, setData] = useState({
    companyname: "",
    companytype: "",
    email: "",
    password: "",
    cpassword: "",
    phone: "",
    address: "",
    url: ""
  });
  const navigate =useNavigate();
  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setData((prevProps) => ({
      ...prevProps,
      [name]: value

    }));
  };

  
  const handleSubmit =async (event) => {
    event.preventDefault();
    if(data.password===data.cpassword){
    try {
     const response= await axios.post(`${baseURL}register`, { data })
      console.log(response);
      window.alert("Successfully Registered")
      navigate('/login');
    }
    catch (error) {
      console.log(error);
    }
  }
  else{
      window.alert("Two Passwords are different")
  }
  };

 

  return (
    <>

      <div className="container">
        <div className="title">Registration</div>
        <div className="content">
        <form onSubmit={handleSubmit}>
          <div className="user-details">
          
            <div className="input-box">
              <span className="details">Company Name</span>
              <input type="text" value={data.companyname} onChange={handleInputChange} name='companyname' required />
            </div>

            <div className="input-box">
              <select required className='regcategory' name='companytype' value={data.companytype} onChange={handleInputChange}>
                <option value="">Select Your Company Category</option>
                <option value="Hospital">Hospital</option>
                <option value="Construction">Construction</option>
                <option value="Computer shop">Computer shop</option>
                <option value="Automobile shop">Automobile shop</option>
                <option value="Laboratory">Laboratory</option>
                <option value="Scanning center">Scanning center</option>
                <option value="Hotel">Hotel</option>
                <option value="Pharmacy">Pharmacy</option>
                <option value="Marketing company">Marketing company</option>
                <option value="Software company">Software company</option>
                <option value="Finance">Finance</option>
                <option value="Workshop">Workshop</option>
                <option value="Service center">Service center</option>
                <option value="Telecom">Telecom</option>
                <option value="Institute">Institute</option>
                <option value="Medical store">Medical store</option>
                <option value="Pvt company">Pvt company</option>
                <option value="Supermarket / Groceries shop">Supermarket / Groceries shop</option>
                <option value="Clinic">Clinic</option>
                <option value="Packaging company">Packaging company</option>
                <option value="IT">IT</option>
              </select>
            </div>


            <div className="input-box">
              <span className="details">Email id ( Username )</span>
              <input  pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$" name='email' value={data.email} onChange={handleInputChange}  type="email" required />
            </div>

            <div className="input-box">
              <span className="details">Password</span>
              <input name='password' value={data.password} onChange={handleInputChange} type="password" required pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
  title="Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters"/>
            </div>

            <div className="input-box">
              <span className="details">Confirm Password</span>
              <input name='cpassword' value={data.cpassword} onChange={handleInputChange} type="password" required />
            </div>

            <div className="input-box">
              <span className="details">Phone Number</span>
              <input type="number" value={data.phone} onChange={handleInputChange} id='number' name='phone' required />
            </div>

            <div className="input-box" >

              <span className="details">Address / Location</span>
              <input type="text" value={data.address} onChange={handleInputChange} id='address' name='address' required />
            </div>

            <div className="input-box">
              <span className="details">Website URL</span>
              <input type="text"  pattern="https?://.+" title="Include http://" value={data.url} onChange={handleInputChange} name='url' required />
            </div>
          </div>

          <div className="buttons">
            <input type="submit" value="Register" />
          </div>
          </form>
        </div>
      </div>



    </>
  )
}

export default Register