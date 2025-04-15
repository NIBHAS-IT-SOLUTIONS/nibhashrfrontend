import React from 'react'
import candidates from '../../images/people-collage-design.jpg'
import './Jobseekers.css'
import { Container, Row, Col, Button } from "react-bootstrap";
import { Carousel } from "react-bootstrap";
import { FaSearch, FaBookOpen, FaThumbsUp } from "react-icons/fa";
import { CheckCircleFill } from 'react-bootstrap-icons';
function Jobseekers() {
  const joblists = 
    ["Banking and Financial Services",
     " Information Technology",
      "sales and marketing",
      "Healthcare",
    "  Manufacturing & Logistics",
      "E-commerce"];
  return (
    <section className="job-seeker-section py-5 bg-white">
       {/* <div className="doctor-carousel-hero">
 
      <Carousel fade controls={false} indicators={false}>
        <Carousel.Item>
          <img
            className="d-block w-100 hero-img"
            src={candidates}
            alt="First slide"
          />
        </Carousel.Item>
      
      </Carousel>

    
      <div className="overlay-content">
        <Container>
          <h1 className="hero-title">Doctor Placement Services</h1>
        </Container>
      </div>
    </div> */}
   <section className="placement-hero position-relative text-center">
      <img
        src={candidates} // ✅ Use your actual image path
        alt="Doctor Placement"
        className="img-fluid w-100 hero-bg-image"
      />
      <div className="placement-text-overlay">
        <h1 className="hero-title">Placement For Jobseekers</h1>
      </div>
    </section>
   
    <Container style={{marginTop:'10%'}}>
      <Row className="align-items-center">
        {/* Left Column */}
        <Col lg={6}>
          <p className="label mb-2">For Job Seekers</p>
          <h2 className="section-title mb-4">Discover Your Potential</h2>
          <p className="section-description mb-5">
          Nibhas HRD solution offers reliable recruitment services that help take your 
          organization to the next level. As a top job consultancy committed to helping job seekers
           find the right career opportunities. we specialize in connecting talented professionals with the best jobs in irijalakuda, 
          jobs in thrissur and jobs in kerala across various industries.
          </p>
          <br /><br />
        </Col>

        {/* Right Column */}
        
        <Col lg={6} className="mb-5 mb-lg-0">
          <div className="d-flex mb-5">
            <div className="icon-wrapper me-4">
              <FaSearch className="icon" />
            </div>
            <div>
              <h4 className="item-title">Job Search Assistance</h4>
              <p className="item-description">
                Discover the right job opportunities that align with your skills and aspirations.
              </p>
            </div>
          </div>

          <div className="d-flex mb-5">
            <div className="icon-wrapper me-4">
              <FaBookOpen className="icon" />
            </div>
            <div>
              <h4 className="item-title">Career Development Resources</h4>
              <p className="item-description">
                Access valuable resources, expert advice, and insightful tips to enhance your job search,
                develop professionally, and succeed in your chosen field.
              </p>
            </div>
          </div>

          <div className="d-flex">
            <div className="icon-wrapper me-4">
              <FaThumbsUp className="icon" />
            </div>
            <div>
              <h4 className="item-title">Confidentiality and Respect</h4>
              <p className="item-description">
                We prioritize your privacy and treat your job search with the utmost confidentiality and
                respect, ensuring a positive and professional experience.
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
    <br /><br /><br />
    <section className="available-jobs py-5">
      <div className="container">
        <h5 className="text-center section-title mb-4">AVAILABLE JOB SECTORS</h5>
        <br /><br />
        <div className="row justify-content-center">
          {joblists.map((job, idx) => (
            <div key={idx} className="col-12 col-sm-6 col-md-4 mb-3">
              <div className="job-box d-flex align-items-center shadow-sm rounded-3 p-3">
                <CheckCircleFill className="text-primary me-2" size={18} />
                <span className="job-name">{job.trim()}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </section>
  )
}

export default Jobseekers