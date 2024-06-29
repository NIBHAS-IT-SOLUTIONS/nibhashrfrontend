import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { baseURL } from '../constants/constants';

function Cregister() {
  const navigate =useNavigate();
  const [data,setData]=useState({
    candidatename: "",
    email: "",
    password: "",
    cpassword: "",
    phone: "",
    qualification: "",
    skills: ""
  })
  const handlechange=(e)=>{
    const { name, value } = e.target;

    setData((prevProps) => ({
      ...prevProps,
      [name]: value

    }));
  }
  const handlesubmit=async (e)=>{
    e.preventDefault()
    if(data.password===data.cpassword){
      try {
       const response= await axios.post(`${baseURL}candidateregister`, { data })
        console.log(response);
        window.alert(response.data.message)
        navigate('/candidatelogin');
      }
      catch (error) {
        console.log(error);
      }
    }
    else{
        window.alert("Two Passwords are different")
    }
  }
  return (
    <>

      <div className="container">
        <div className="title">Candidate registration</div>
        <div className="content">
          <form onSubmit={handlesubmit} >
            <div className="user-details">

              <div className="input-box">
                <span className="details">Name</span>
                <input type="text" onChange={(e)=>{handlechange(e)}} name='candidatename' value={data.candidatename} required />
              </div>



              <div className="input-box">
                <span className="details">Email id ( Username )</span>
                <input pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$" onChange={(e)=>{handlechange(e)}} value={data.email} name='email' type="email" required />
              </div>

              <div className="input-box">
                <span className="details">Password</span>
                <input name='password' onChange={(e)=>{handlechange(e)}} type="password" value={data.password} required pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                  title="Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters" />
              </div>

              <div className="input-box">
                <span className="details">Confirm Password</span>
                <input name='cpassword' value={data.cpassword} onChange={(e)=>{handlechange(e)}} type="password" required />
              </div>

              <div className="input-box">
                <span className="details">Phone Number</span>
                <input type="number" id='number' value={data.phone} onChange={(e)=>{handlechange(e)}}  name='phone' required />
              </div>

              <div className="input-box">
                <span className="details">Qualification</span>
                <input type="text" value={data.qualification} onChange={(e)=>{handlechange(e)}}  name='qualification' required />
              </div>
              
              <div className="input-box">
                <span className="details">Skills</span>
                <input type="text" value={data.skills} onChange={(e)=>{handlechange(e)}}  name='skills' required />
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

export default Cregister