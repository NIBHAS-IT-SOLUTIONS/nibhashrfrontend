import React from 'react'
import './Content.css'
import Carousel from 'react-bootstrap/Carousel';
// import Job from '../Images/JOB.jpg'
// import Docimage from '../Images/DOCTOR.jpg'
// import Itimage from '../Images/IT WORK.jpg'
// import Nibhas from '../Images/NIBHAS.png'



function Content() {
  return (
    <>
   
      <Carousel data-bs-theme="dark">

      <Carousel.Item>
          <img style={{ height: '80vh' }}
            className="d-block w-100"
            src="https://i.postimg.cc/zfrQT4Sc/NIBHAS.png"
            alt="First slide"
          />
        </Carousel.Item>

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
            <p className='since'>SINCE 2017</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img style={{ height: '80vh' }}
            className="d-block w-100"
            src="https://i.postimg.cc/HkqcY11j/JOB.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h1 className='carcaption'>'SAY GOODBYE TO UNEMPLOYMENT' <br /> WE CAN MAKE <span className='you'>YOUR FUTURE</span> BETTER </h1>
            <p className='since'>AS A PLACEMENT AGENCY</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img style={{ height: '80vh' }}
            className="d-block w-100"
            src="https://i.postimg.cc/NGC0Gv1Y/IT-WORK.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h1 className='carcaption'>'ACHIEVE YOUR <span className='dream'>DREAMS</span> WITH US'</h1>
            <p className='since'>
             NIBHAS IT SOLUTIONS
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default Content;


