import React, { useState,useContext,useEffect } from 'react'
import './Header.css'
import { Link, useNavigate } from 'react-router-dom';
// import nibh from '../Images/nibhas-logo.jpg'
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
          <nav className="nav">
      <a href="/" className="nav__brand">
        Nibhas HRD Solutions
      </a>
      
      <ul className={active}>
        <li className="nav__item">
          <a href="#home"  className="nav__link">
            Home
          </a>
        </li>
        <li className="nav__item">
          <Link to='vacancies'  className="nav__link">
            Vacancies
          </Link>
        </li>
        <li className="nav__item">
          <a href="#about" className="nav__link">
            About
          </a>
        </li>
        <li className="nav__item">
          <a href="#service"  className="nav__link">
            Services
          </a>
        </li>
      
        <li className="nav__item">
          <a href="#contact"  className="nav__link">
            Contact
          </a>
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
