import React from 'react'
import './Doctorservice.css'
import Carousel from 'react-bootstrap/Carousel';
import doctorimage from '../../images/doctor.jpg'
import doctorimage2 from '../../images/doctors-day-handsome-brunette-cute-guy-medical-gown-smiling-showing-good-gesture.jpg'
import { FaCheckCircle,FaUserMd, FaClock, FaFileContract, FaUsers, FaStar } from "react-icons/fa";




function Doctorservice() {
    const doctorList = [
        [
            "Physiatrist", "Physiologist", "Gynecologist", "Pediatrician",
            "Anesthesiology", "Radiologist", "Cardiologist", "Neurophysician", "Pediatric Surgery"
          ],
          [
            "Dermatologist", "Orthopedician", "General Physician",
            "Gastroenterology", "Urologist", "Neurosurgeon",
            "Ophthalmologist",, "Audiology", "General Medicine","Plastic Surgeon" 
          ],
          [
            "General Surgeon", "ENT Surgeon", "BDS / MDS", "Pulmonologist",
            "Nephrologists", "Neonatologist", "Psychiatrist", "Pharmacologist", "Pathologist", "Nurses"
          ],
          [
            "Forensic Medicine",  "Cosmetologist", "Rheumatologist",
            "Oncologist", "Diabetologist", "Laparoscopic Surgeon","Community Medicine",
            "Emergency Medicine","Emergency Physician" ,"DMO's/ RMO's (MBBS)" , "Interventional Cardiologist"
          ]
        ];
        const services = [
          {
            icon: <FaUserMd size={32} />,
            title: "Permanent recruitment",
            desc: "If you are looking for doctors to fill full-time positions in your medical facility, then our permanent placement services are just right for you. We can help you fill roles like surgeons, consultants etc.",
          },
          {
            icon: <FaClock size={32} />,
            title: "Temporary placement services",
            desc: "Hospitals, at times, require medical professionals for temporary roles as in during emergencies or uncalled leaves from other medical professionals.",
          },
          {
            icon: <FaFileContract size={32} />,
            title: "Contract recruitment",
            desc: "If your medical facility is constantly in need of medical professionals or doctors for a specific duration of time or for certain procedures, then hiring medical staff for a contractual period is the best option.",
          },
          {
            icon: <FaUsers size={32} />,
            title: "Senior level placements",
            desc: "Medical facilities sometimes may require professionals at a senior level for leadership positions like medical directors, department heads etc.",
          },
          {
            icon: <FaStar size={32} />,
            title: "Specialized roles placement",
            desc: "There are some roles that require specific expertise in the subject. These niche roles could be paediatric cardiologists, interventional radiologists etc.",
          },
        ];
      
      const flatList = doctorList.flat();
    return (
        <section>

         
            <Carousel data-bs-theme="dark" controls={false} indicators={false}>
                <Carousel.Item>
                    <div className="position-relative">
                        <img
                            style={{ height: '50vh', objectFit: 'fill', opacity: '0.75' }}
                            className="d-block w-100"
                            src={doctorimage}
                            alt="First slide"
                        />
                        <div
                            className="position-absolute top-0 start-0 w-100 h-100"
                            style={{
                                backgroundColor: 'rgba(0, 0, 0, 0.4)',
                                backdropFilter: 'blur(5px)',
                                WebkitBackdropFilter: 'blur(5px)',
                            }}
                        ></div>

                        <Carousel.Caption>
                            <h1 className="carcaption">Doctor Placement Services</h1>
                        </Carousel.Caption>
                    </div>
                </Carousel.Item>
            </Carousel>

    <div className="container my-5 py-4 px-3 px-md-5">
      <div className="row align-items-center">
        {/* Text Content */}
        <div className="col-lg-7 mb-4 mb-lg-0">
          <h2 className='text-dark fw-bold display-3' >
            Nibhas HRD Solutions
          </h2>
          <br />
          <h5 className="fw-bold text-primary display-5">
            Doctors Job Placement Agency – Healthcare Sector Recruitment Experts
          </h5><br />
          <p style={{ textAlign: "justify" }}>
            We are a doctors job placement agency that deals with all the necessities related to the Healthcare sector. Our mission is to connect organizations with talented professionals who bring expertise and dedication to their roles.
          </p>
          <p style={{ textAlign: "justify" }}>
            From understanding client requirements to ensuring the successful onboarding of candidates, we provide end-to-end recruitment services.
          </p>
          <p style={{ textAlign: "justify" }}>
            We offer comprehensive doctor placement services and support to hospitals and provide them reliable, experienced medical professionals.
          </p>
        </div>

        {/* Image */}
        <div className="col-lg-5 text-center">
          <img
            src={doctorimage2}
            alt="Doctor"
            className="img-fluid rounded"
            style={{ maxHeight: "500px", objectFit: "contain" }}
          />
        </div>
      </div>
    </div>
    <br /><br />

    <div className="container my-5 py-4 px-3 px-md-5 text-center">
      <h3 className="fw-bold display-3 ">Our Doctor Placement Services</h3>
      <br />
      <p className="text-muted mb-4 display-5">
        To help meet the unique staffing needs of hospitals, we offer a wide range of doctor placement services.
      </p>

      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mt-3">
        {services.map((service, index) => (
          <div key={index} className="col d-flex justify-content-center">
            <div
              className="p-4 bg-white shadow-sm h-100 rounded text-start"
              style={{ maxWidth: "360px" }}
            >
              <div className="text-primary mb-3">{service.icon}</div>
              <h4 className="fw-semibold display-5">{service.title}</h4>
              <p className="text-muted display-5" style={{ fontSize: "1.5rem" }}>
                {service.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
<br />
{/* <div className="w-full bg-blue-700 py-10 px-4 md:px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-6">
       
        <div className="flex justify-center">
          <img
            src={doctorimage2=''}
            alt="Business Meeting"
            className="rounded-lg max-h-96 object-cover w-full md:w-auto"
          />
        </div>

  
        <div className="text-white text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-semibold mb-3">
            Looking for A Trusted Talent Partner?
          </h2>
          <p className="text-base md:text-lg mb-5 leading-relaxed">
            Acquire and manage top-tier talent with our full-service talent solutions
            tailormade for your unique industry requirements.
          </p>
          <a
            href="#contact"
            className="inline-block bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded font-medium transition duration-300"
          >
            Talk to us
          </a>
        </div>
      </div>
    </div> */}
 <div className="container my-5 py-4 px-3 px-md-5 text-center">
  <h3 className="fw-bold text-uppercase">
    <span className="text-dark">Available Doctors</span>
  </h3>

  <div
    className="my-2 mx-auto"
    style={{ width: "100px", borderBottom: "3px solid rgb(0, 0, 0)" }}
  ></div>
  <br />
  
  <div className="row row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-4  mt-4">
    {doctorList.flat().map((doc, index) => (
      <div key={index} className="col d-flex justify-content-center">
        <div
          className="d-flex align-items-center p-3 w-100"
          style={{
            background: "#fff",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            borderRadius: "12px",
          }}
        >
          <FaCheckCircle className="me-2 text-primary" />&nbsp;&nbsp;
          <span className="text-start">{doc}</span>
        </div>
      </div>
    ))}
  </div>
</div> 







        </section>
    )
}

export default Doctorservice