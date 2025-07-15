import React, { useState,useContext,useEffect } from 'react'
import './Header.css'
import { Link, useNavigate } from 'react-router-dom';
// import nibh from '../Images/nibhas-logo.jpg'
import nibhaslogo from '../images/nibhashrdnobg.png'
import UserContext from '../auth/UserContext'
function Header() {
  const navigate =useNavigate();

  

  
    const [active, setActive] = useState("nav__menu");
    const [icon, setIcon] = useState("nav__toggler");
    const navToggle = () => {
      if (active === "nav__menu") {
        setActive("nav__menu nav__active");
      } else setActive("nav__menu");
  
      // Icon Toggler
      if (icon === "nav__toggler") {
        setIcon("nav__toggler toggle");
      } else setIcon("nav__toggler");
    }
    return (
        <>
          <nav className="nav" style={{backgroundColor:'white',color:"#2B53A1"}}>
      <Link to="/" style={{Color:'#2B53A1'}} className="nav__brand">
      <img src={nibhaslogo} alt="" width="100"/>
        Nibhas HRD Solutions
      </Link>
      
      <ul  style={{Color:'#2B53A1'}} className={active}>
        <li className="nav__item">
          <Link to="/"  className="nav__link">
            Home
          </Link>
        </li>
        
        <li className="nav__item">
          <Link to="/about" className="nav__link">
            About
          </Link>
        </li>
        <li className="nav__item">
          <Link to="/services"  className="nav__link">
            Services
          </Link>
        </li>
        <li className="nav__item">
          <Link to='/vacancies'  className="nav__link">
            Vacancies
          </Link>
        </li>
        <li className="nav__item">
          <Link to="/contactus"  className="nav__link">
            Contact
          </Link>
        </li>

        

        
      </ul>

      {/* <button className='candidate-loginbutton' onClick={()=>{navigate('/candidatelogin');}}>Candidate login</button>

      <button className='employer-loginbutton' onClick={()=>{navigate('/login');}}>Employer login</button>
   */}

      <div onClick={navToggle} className={icon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
        <div className="line4"></div>
      </div>
    </nav>


    {/*  */}
    
           

        </>
    )
}

export default Header

