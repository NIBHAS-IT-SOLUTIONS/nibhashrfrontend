import React,{useContext, useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import UserContext from '../auth/UserContext';
import axios from 'axios';
import { baseURL } from '../constants/constants';
function Cheader() {
    const navigate =useNavigate(); 
    const [cname,setcname]=useState("")
        //var cname=null
    const user=useContext(UserContext)
    console.log(user);
    
    const getcandidate=async()=>
{
    let userid=localStorage.getItem("candid")
    if(userid){
      const candidate=await axios.get(`${baseURL}getcandidate/${userid}`)
    
    setcname(candidate.data.user.candidatename)
    
    }
}

useEffect(()=>{
getcandidate()
},[])

   
    
   const logout=()=>{
    localStorage.removeItem("candid")
    window.location.reload();
    navigate('/applyjob');
   }
  
  
  return (
    <>
    <nav className="nav">
      <a href="/" className="nav__brand">
        Nibhas HRD Solutions
      </a>

      {
        cname &&
        <a href="#" className="employer-loginbutton1">
     
 
      {

`Hello ${cname}!`
}
      
      </a>
      
}
{
        cname &&
        <button className='employer-loginbutton' onClick={()=>{logout()}}>Logout <i class="fa fa-sign-out" aria-hidden="true"></i></button>
       
}

      
      <button className='backtohomebutton' onClick={()=>{navigate('/');}}>Back to home <i class="fa fa-arrow-left" aria-hidden="true"></i></button>

   


    
    </nav>
    </>
  )
}

export default Cheader