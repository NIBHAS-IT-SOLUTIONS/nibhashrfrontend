import React,{useContext,useEffect} from 'react'
import './Loginheader.css'
import { useNavigate } from 'react-router-dom';
// import nibh from '../Images/nibhas-logo.jpg'
import UserContext from '../auth/UserContext';

function Header() {
  const navigate =useNavigate();
  //var cname=null
//   const user=useContext(UserContext)
//   console.log(user);
//   if(user.userData.id){
//     var cname=user.userData.user.companyname;
//     //console.log(cname);
//   }
  
//  const logout=()=>{
//   localStorage.removeItem("loginid")
//   window.location.reload();
//   navigate('/');
//  }

const backtohome=()=>{
  navigate('/')
}
  
 
    return (
        <>
          <nav className="nav">
      <a href="/" className="nav__brand">
        Nibhas HRD Solutions Private Limited
      </a>
      {/* {
        cname &&
        <a href="#" className="employer-loginbutton1">
     
 
      {

`Hello ${cname}!`
}
      
      </a>
      
}
{
        cname &&
        <button className='employer-
        loginbutton' onClick={()=>{logout()}}>Logout <i class="fa fa-sign-out" aria-hidden="true"></i></button>
       
}
{
        cname &&
        <button className='employer-loginbutton' onClick={()=>{navigate('/postajob')}}>Post Job <i class="fa fa-plus-square" aria-hidden="true"></i></button>
       
} */}
      
      
      <button className='backtohomebutton' onClick={()=>{navigate('/')}}>Back to home <i class="fa fa-arrow-left" aria-hidden="true"></i></button>
      
    </nav>


        </>
    )
}

export default Header

