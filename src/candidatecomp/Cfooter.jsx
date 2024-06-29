import React from 'react'

function Cfooter() {
  return (
    <>
  
<footer className='loginfooter'>
        <div class="topf">
      

          {/* form */}

          <div class="newsletterf">
            <h3>Keep In Touch</h3>
            <div class="socialf">

              <a href="mailto:cv.nibhashrdsolutions@gmail.com"> <i className="fa-regular fa-envelope"></i> </a>

              <a href="https://www.facebook.com/profile.php?id=100088368601664"><i className="fab fa-facebook" ></i> </a>

              <a href="https://www.instagram.com/nibhasitsolutions/?hl=en"><i className="fab fa-instagram" ></i> </a>

            </div>

          </div>



          <div className='locationf'>
            <ul>
              <h3>Nibhas HRD Solutions</h3>
              <li></li>



              <li><i className="fa-solid fa-location-dot"> </i> Neyyan's Plaza,</li>
              <li>Opp. Vyabarabhavan,</li>
              <li>Chandakkunnu, Irinjalakuda,</li>
              <li>Thrissur, Kerala, 680121</li>

            </ul>

          </div>

          <div className='numbf'>
            <li>
              <i className="fa-solid fa-phone-volume"> +91 80-86-22-00-07</i>
            </li>
            <li>
              <i className="fa-solid fa-phone-volume"> +91 80-86-09-48-84</i>
            </li>
            <br />
            <li>
            <i class="fa-regular fa-envelope"></i> <a href='#'  className='mailid'> info@nibhashr.com</a>
            </li>
            <li>
            <i class="fa-regular fa-envelope"></i> <a href='#'  className='mailid'> cv.nibhashrdsolutions@gmail.com</a>
            </li><li>
            <i class="fa-regular fa-envelope"></i> <a href='#'  className='mailid'> nibhashrdsolutions@gmail.com</a>
            </li>
          </div>

        </div>


        <div className="infof">
         
          <div className="copyrightf">2024 Copyright &copy; Nibhas HRD Solutions</div>
        </div>

      </footer>
    </>
  ) 
}

export default Cfooter