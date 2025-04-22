import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, ToggleButton,Alert, ToggleButtonGroup } from 'react-bootstrap';
import { BsPeople, BsCpu } from 'react-icons/bs';
//import "bootstrap/dist/css/bootstrap.min.css";
import './CandidateCorner.css'
function CandidateCorner() {
  const [hiringFor, setHiringFor] = useState('company');
  const [otpSent, setOtpSent] = useState(false);
  const [workStatus, setWorkStatus] = useState('');
  const [resumeError, setResumeError] = useState('');

  const handleSendOTP = () => {
    setOtpSent(true);
  };

  const handleResumeUpload = (e) => {
    const file = e.target.files[0];
    if (file && file.size > 2 * 1024 * 1024) {
      setResumeError('File size exceeds 2MB');
    } else {
      setResumeError('');
    }
  };
  return (
    <div
  className="hero-section text-white d-flex align-items-center py-5"
  style={{
    minHeight: "100vh",
    background: "url('images/candibg.jpg') no-repeat center center",
    backgroundSize: "cover",
  }}
>
  <Container>
    <Row className="align-items-center flex-column-reverse flex-md-row">
      {/* Left Section */}
      <Col md={6} className="text-center text-md-start mt-4 mt-md-0">
        <div>
          <h1 className="fw-bold text-uppercase display-4 display-md-1 mb-3">
            Talent Decoded
          </h1>
          <h2 className="fw-bold lh-sm fs-3 fs-md-1">
            Decode India’s largest talent pool
          </h2>
          <p className="mt-3 fw-semibold">
            Acts as a link between various jobs and the jobseekers
          </p>
          <p className="fw-semibold text-primary-emphasis">Nibhas HRD Solutions</p>
          <Button
            variant="primary"
            className="rounded-pill px-4 py-3 mt-3 fw-bold"
          >
            Explore our Vacancies
          </Button>
        </div>
      </Col>

      {/* Right Section: Form */}
      <Col md={6} className="mb-5 mb-md-0">
        <div
          className="bg-white text-dark rounded-4 p-4 p-md-5 mx-auto"
          style={{
            maxWidth: "100%",
            boxShadow: "0 0.75rem 1.5rem rgba(0, 0, 0, 0.2)",
          }}
        >
          <h4 className="mb-4 text-center text-md-start">Register your details</h4>
          <Form>
            {/* Full Name */}
            <Form.Group controlId="fullName" className="mb-3">
              <Form.Label>Full Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your full name" />
            </Form.Group>

            {/* Email */}
            <Form.Group controlId="email" className="mb-3">
              <Form.Label>Email ID</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" />
              <Form.Text className="text-muted">
                We'll send relevant jobs and updates to this email.
              </Form.Text>
            </Form.Group>

            {/* Mobile + Verify */}
            <Form.Group controlId="mobile" className="mb-3">
              <Form.Label>Mobile Number</Form.Label>
              <Row className="g-2">
                <Col xs={8}>
                  <Form.Control type="tel" placeholder="Enter mobile number" />
                </Col>
                <Col xs={4}>
                  <Button
                    variant="primary"
                    className="w-100"
                    onClick={() => setOtpSent(true)}
                  >
                    {otpSent ? "Resend OTP" : "Verify"}
                  </Button>
                </Col>
              </Row>
            </Form.Group>

            {/* OTP */}
            {otpSent && (
              <Form.Group controlId="otp" className="mb-3">
                <Form.Label>Enter OTP</Form.Label>
                <Form.Control type="text" placeholder="Enter OTP" />
              </Form.Group>
            )}

            {/* Work Status */}
            <Form.Group className="mb-4">
              <Form.Label>Work Status</Form.Label>
              <div className="ps-1">
                {["experienced", "fresher", "student"].map((value, idx) => (
                  <div className="form-check mb-2" key={value}>
                    <input
                      className="form-check-input"
                      type="radio"
                      name="workStatus"
                      id={value}
                      value={value}
                      checked={workStatus === value}
                      onChange={(e) => setWorkStatus(e.target.value)}
                    />
                    <label
                      className="form-check-label ms-2"
                      htmlFor={value}
                      style={{ textTransform: "capitalize" }}
                    >
                      { `I'm ${value}`}
                    </label>
                  </div>
                ))}
              </div>
            </Form.Group>

            {/* Resume */}
            <Form.Group controlId="resume" className="mb-3">
              <Form.Label>Upload Resume</Form.Label>
              <Form.Control
                type="file"
                accept=".doc,.docx,.pdf,.rtf"
                onChange={handleResumeUpload}
                className="form-control"
                style={{ padding: "0.25rem", borderRadius: "0.5rem" }}
              />
              <Form.Text className="text-muted">
                DOC, DOCX, PDF, RTF | Max: 2 MB
              </Form.Text>
              {resumeError && (
                <Alert variant="danger" className="mt-2">
                  {resumeError}
                </Alert>
              )}
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100 fw-semibold">
              Submit
            </Button>
          </Form>
        </div>
      </Col>
    </Row>
  </Container>
</div>

  );
}

export default CandidateCorner