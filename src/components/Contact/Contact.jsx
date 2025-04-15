import React from 'react'
import './Contact.css'
function Contact() {
  return (
 <section className="contact-section py-5 bg-light">
      <div className="container">
        <h2 className="fw-bold mb-5 text-center text-md-start display-6">
          Find a <span className="text-primary">Doctors Door</span> office near you
        </h2>

        <div className="row gx-5 gy-4">
          {/* Contact Info Card */}
          <div className="col-lg-6">
            <div className="card shadow border-0 h-100">
              <div className="card-header border-0 rounded-top bg-gradient-bar"></div>
              <div className="card-body">
                <h4 className="fw-bold mb-3">Contact Us</h4>
                <p className="text-muted mb-4">
                  We welcome inquiries and comments. Send us a message and a representative will get back to you.
                </p>

                <div className="mb-3">
                  <strong className="text-muted">Address:</strong><br />
                  <strong>DOCTORS DOOR HEALTH CARE STAFFING AND CONSULTANT LLP</strong><br />
                  Police Station Road, Opposite to BSNL Exchange,<br />
                  Door No: SBM VI/1313 J,<br />
                  Near Police Station,<br />
                  Sultan Bathery, Kerala 673592, India
                </div>

                <div className="mb-3">
                  <strong className="text-muted">Phone:</strong><br />
                  <a href="tel:+919486960111" className="text-decoration-none fw-semibold text-dark">
                    +91 9486960111
                  </a>
                </div>

                <div className="mb-4">
                  <strong className="text-muted">Mail ID:</strong><br />
                  <span className="badge bg-primary fs-6">consult@doctorsdoor.in</span>
                </div>

                <div className="d-flex gap-3 fs-5">
                  <a href="#"><i className="bi bi-facebook"></i></a>
                  <a href="#"><i className="bi bi-twitter"></i></a>
                  <a href="#"><i className="bi bi-linkedin"></i></a>
                  <a href="#"><i className="bi bi-instagram"></i></a>
                  <a href="#"><i className="bi bi-whatsapp"></i></a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form Card */}
          <div className="col-lg-6">
            <div className="card shadow border-0 h-100">
              <div className="card-header border-0 rounded-top bg-gradient-bar"></div>
              <div className="card-body">
                <h4 className="fw-bold mb-4">Send a Message</h4>
                <form>
                  <div className="mb-3">
                    <input type="text" className="form-control form-control-lg bg-light" placeholder="Your Name" />
                  </div>
                  <div className="mb-3">
                    <input type="email" className="form-control form-control-lg bg-light" placeholder="Email Address" />
                  </div>
                  <div className="mb-3">
                    <input type="text" className="form-control form-control-lg bg-light" placeholder="Subject" />
                  </div>
                  <div className="mb-3">
                    <input type="tel" className="form-control form-control-lg bg-light" placeholder="Phone Number" />
                  </div>
                  <div className="mb-3">
                    <textarea className="form-control form-control-lg bg-light" rows="4" placeholder="Your Message"></textarea>
                  </div>
                  <button type="submit" className="btn btn-success w-100 fw-bold fs-6">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}

export default Contact