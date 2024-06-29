import React ,{useState,useContext}from 'react'
import './Employerlogin.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import UserContext from '../auth/UserContext';
import { baseURL } from '../constants/constants';

function Employerlogin() {

  const {setUserData}=useContext(UserContext)
    const navigate =useNavigate();
    const [data,setData]=useState({
      email:"",
      password:""
    })
    const handleInput=(event)=>{
      const {name,value}=event.target
      setData((prevProps) => ({
        ...prevProps,
        [name]: value
      }));
    }
    const handlesubmit=async(event)=>{
      event.preventDefault();
      
      try {
      const user= await axios.post(`${baseURL}login`, { data })
        window.alert(user.data.message)        
        if(user.data.success){
          localStorage.setItem("loginid", user.data.user._id);
          setUserData({
            id:user.data.user._id,
            user:user.data.user
          })
         navigate('/');
        }
      }
      catch (error) {
        console.log(error);
      }
    }

  return (
    <>
   <form action='' onSubmit={handlesubmit}>
    <div className='login-container'>

  
            <div class="input-box">
            <span class="details">Username</span>
            <input type="email" name='email' value={data.email} onChange={handleInput}  required/>
          </div>

          <div class="input-box">
            <span class="details">Password</span>
            <input type="password" onChange={handleInput} value={data.password} name='password' required/>
          </div>

          <div class="buttons">
          <input  type="submit" value="Login"/>
        </div>


        <div class="buttons2">
        
          <input onClick={()=>{navigate('/register');}} type="submit" value="Employer Registration"/>
        </div>

        </div>
        
        </form>

    </>
  )
}

export default Employerlogin


