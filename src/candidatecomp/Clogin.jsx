import React, { useState,useContext } from 'react'
import './Clogin.css'
import { useNavigate } from 'react-router-dom';
import UserContext from '../auth/UserContext';
import axios from 'axios';
import { baseURL } from '../constants/constants';


function Clogin() {
    const {setUserData}=useContext(UserContext)
    const navigate =useNavigate();
    const [data,setData]=useState({
        email:"",
        password:""

    })
    const handlechange=(e)=>{
        const { name, value } = e.target;
    
        setData((prevProps) => ({
          ...prevProps,
          [name]: value
    
        }));
      }
     const handlesubmit=async(e)=>{
        e.preventDefault()
        console.log(data);
        try {
            const user= await axios.post(`${baseURL}candidatelogin`, { data })
              window.alert(user.data.message)        
              if(user.data.success){
                console.log(user.data);
                localStorage.setItem("candid", user.data.user._id);
                setUserData({
                  id:user.data.user._id,
                  user:user.data.user
                })
               navigate('/applyjob');
              }
            }
            catch (error) {
              console.log(error);
            }
     }

    return (
        <>
            <form onSubmit={handlesubmit} >
                <div className='clogin-container'>

                    <h1 className='ccardheading'>Candidate Login</h1>
                    <div class="input-box">
                        <span class="details">Username</span>
                        <input onChange={(e)=>{handlechange(e)}} value={data.email} name='email' type="email" required />
                    </div>

                    <div class="input-box">
                        <span class="details">Password</span>
                        <input onChange={(e)=>{handlechange(e)}} value={data.password} type="password" name='password' required />
                    </div>


                    <div class="cbuttons">
                        <input type="submit" value="Login" />
                    </div>


                    <div class="cbuttons2">
                        <input  onClick={()=>{navigate('/candidateregister')}} type="button" value="Candidate
                        Registration" />
                    </div>

                </div>

            </form>
            </>
    )
}

export default Clogin