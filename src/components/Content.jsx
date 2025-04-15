import React from 'react'
import './Content.css'
import Carousel from 'react-bootstrap/Carousel';
// import Job from '../Images/JOB.jpg'
// import Docimage from '../Images/DOCTOR.jpg'
// import Itimage from '../Images/IT WORK.jpg'
// import Nibhas from '../Images/NIBHAS.png'
import Carousel1  from '../images/nibhas hr.png';


function Content() {
  return (
    <>
       {/* <Carousel.Item>
          <img style={{ height: '80vh' }}
            className="d-block w-100"
            src={Carousel1}
            alt="First slide"
          />
        </Carousel.Item> */}
      <Carousel data-bs-theme="dark">

  

        <Carousel.Item>
          <img style={{ height: '80vh' }}
            className="d-block w-100"
            src="https://i.postimg.cc/2S2cMGsH/DOCTOR.jpg"
            alt="First slide"
          />

          <Carousel.Caption>
            <h1 className='carcaption'>WE PLACED
              <span className='so'> SO MANY </span><br />
              DOCTORS <span className='so'>ALL OVER KERALA</span>
            </h1>
            
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img style={{ height: '80vh' }}
            className="d-block w-100"
            src="https://i.postimg.cc/HkqcY11j/JOB.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h2 className='carcaption'>'SAY GOODBYE TO UNEMPLOYMENT' <br /> WE CAN MAKE <span className='you'>YOUR FUTURE</span> BETTER </h2>
           
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img style={{ height: '80vh' }}
            className="d-block w-100"
            src="https://i.postimg.cc/NGC0Gv1Y/IT-WORK.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h2 className='carcaption'>'ACHIEVE YOUR <span className='dream'>DREAMS</span> WITH US'</h2>
           
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <br /><br />
    </>
  );
}

export default Content;


