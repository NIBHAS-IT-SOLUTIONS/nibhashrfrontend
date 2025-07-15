import React from 'react'
import './Footer.css'



function Footer() {
  return (
    <>

      <footer>
        <div class="top">
          <div class="pages">
            <ul>

              <li><a href="/#home">   Home</a></li>
              <li><a href="/#about">  About</a></li>
              <li><a href="/#service">Services</a></li>
              <li><a href="/vacancies">Vacancies</a></li>
              <li><a href="/#contact">Contact</a></li>
            </ul>

          </div>



          {/* form */}

          <div class="newsletter">
            <h3>Keep In Touch</h3>
            <div class="social">

              <a href="mailto:nibhashrdsolutions@gmail.com"> <i class="fa-regular fa-envelope"></i> </a>

              <a href="https://www.facebook.com/profile.php?id=100088368601664"><i class="fab fa-facebook" ></i> </a>

              <a href="https://www.instagram.com/nibhasitsolutions/?hl=en"><i class="fab fa-instagram" ></i> </a>



            </div>

          </div>



          <div className='location' style={{textAlign:'left'}}>
            <ul>
              <h3>Nibhas HRD Solutions Pvt Ltd</h3>
              <li></li>



              <li><i class="fa-solid fa-location-dot"> </i> Marigold Shopping complex</li>
              <li>Thekkekara Road,</li>
              <li>Near Metro Health Care , Irinjalakuda</li>
              <li> Thrissur 680121 </li>


            </ul>


          </div>

          <div className='numb'>
            <li>
            <a href='tel:+91808609220007'>
            <i class="fa-solid fa-phone-volume"> +91 80-86-22-00-07</i>
            </a>              
            </li>
            <li>
            <a href='tel:+918086094884'>
            <i class="fa-solid fa-phone-volume">+91 80-86-09-48-84</i>
            </a>              
            </li>
            <br />
            <li>
            <i class="fa-regular fa-envelope"></i> <a href='mailto:info@nibhashr.com'  className='mailid'> info@nibhashr.com</a>
            </li>
            <li>
            <i class="fa-regular fa-envelope"></i> <a href='mailto:cv.nibhashrdsolutions@gmail.com'  className='mailid'> cv.nibhashrdsolutions@gmail.com</a>
            </li><li>
            <i class="fa-regular fa-envelope"></i> <a href='mailto:nibhashrdsolutions@gmail.com'  className='mailid'> nibhashrdsolutions@gmail.com</a>
            </li>
          </div>

        </div>


        <div class="info">
          {/* <div class="legal">
            <a href="#">Terms & Conditions</a><a href="#">Privacy Policy</a>
          </div> */}
          <div class="copyright">2024 Copyright &copy; Nibhas HRD Solutions Pvt Ltd</div>
        </div>

      </footer>
    </>
  )
}

export default Footer


