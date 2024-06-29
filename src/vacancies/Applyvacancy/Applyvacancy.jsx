import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import { baseURL } from '../../constants/constants';
import { useNavigate, useParams } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import Form from 'react-bootstrap/Form';
import './Applyvacancy.css'

function Applyvacancy() {
  const form = useRef();
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState('');
  const [filename, setfilename] = useState('');

  const navigate = useNavigate();
  const { id } = useParams()
  const [vacancy, setvacancy] = useState([])
  const [data, setData] = useState({
    vacancyid: "",
    from_name: "",
    frommail: "",
    phone: ""
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setData((prevProps) => ({
      ...prevProps,
      [name]: value
    }));
  };

  const getvacancybyid = async () => {


    try {
      const response = await axios.get(`${baseURL}getvacancybyid/${id}`)
      setvacancy(response.data.editvaca)
    }
    catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    if (id) {

      getvacancybyid()
      setData((prevProps) => ({
        ...prevProps,
        vacancyid: id
      }));
    }
    setfilename('Choose File')
  }, [id])

  const onChange = (e) => {
    setFile(e.target.files[0]);
    console.log(e.target.files[0]);
    setfilename(e.target.files[0].name)
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(data);
    try {
      const response = await axios.post(`${baseURL}applyvacancy`, { data })

      let id = response.data._id
      const formData = new FormData();
      formData.append('file', file);
      formData.append('id', id)
    console.log(form.current);
      try {
        const res = await axios.post(`${baseURL}upload/`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        emailjs
        .sendForm('service_c3oh2p4', 'template_ndajx56', form.current, {
          publicKey: 'IqgHhEqtlLJn6Dp7x',
        })
        .then(
          () => {
            console.log('SUCCESS!');
  
            window.alert("Message Sent");
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
        setMessage(res.data);

      } catch (err) {
        setMessage('There was a problem with the server');
      }

    }
    catch (error) {
      console.log(error);
    }

  };

  return (
    <>

      <div class="row ml-10 ">
        <div class="col-sm-5">
          <div class="card w-100 text-center ">
            <div class="card-body">
              <h1 class="card-title">{vacancy.jobtitle}  {vacancy.department}</h1>
              <br />



              <table class="table-striped" style={{ marginLeft: '25%',marginLeft: '25%', width: '50%', border: 'none', borderSpacing: '40px' }}>
                <thead>
                  <tr>

                    <th scope="col"></th>
                    <th scope="col"></th>

                  </tr>
                </thead>
                <tbody>

                  <tr>
                    <th scope="row">Skills</th>
                    <td>{vacancy.skills}</td>
                  </tr>
                  <tr>
                    <th scope="row">Description</th>
                    <td>{vacancy.description}</td>
                  </tr>
                  <tr>
                    <th scope="row">Location</th>
                    <td>{vacancy.location}</td>
                  </tr> <tr>
                    <th scope="row">Salary</th>
                    <td> {vacancy.salary}</td>
                  </tr> <tr>
                    <th scope="row">Gender</th>
                    <td>{vacancy.gender}</td>
                  </tr> <tr>
                    <th scope="row">Experience</th>
                    <td>{vacancy.experience}</td>
                  </tr> <tr>
                    <th scope="row">Qualification</th>
                    <td>{vacancy.qualification}</td>
                  </tr><tr>
                    <th scope="row">Timing</th>
                    <td>{vacancy.timing}</td>
                  </tr><tr>
                    <th scope="row">Date Posted</th>
                    <td>{vacancy.postdate}</td>
                  </tr>


                </tbody>
              </table>


            </div>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="card w-100">
            <div class="card-body">
              <h1 class="card-title"></h1><br />
              <h2>Enter Your Details</h2><br />
              {message && <p>{message}</p>}
              <form ref={form} onSubmit={onSubmit}>


                <div class="input-group input-group-lg mb-3">
                  <div class="input-group-prepend">
                    <span class="input-group-text" id="inputGroup-sizing-lg">Name</span>
                  </div>
                  <input id="from_name" required value={data.from_name} onChange={handleInputChange} name='from_name' type="text" placeholder="Name" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" />
                </div>
                <div class="input-group input-group-lg mb-3">
                  <div class="input-group-prepend">
                    <span class="input-group-text" id="inputGroup-sizing-lg">Email</span>
                  </div>
                  <input type="email" id="email" placeholder="Email" required value={data.frommail} onChange={handleInputChange} name='frommail' class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" />
                </div><div class="input-group input-group-lg mb-3">
                  <div class="input-group-prepend">
                    <span class="input-group-text" id="inputGroup-sizing-default">Phone No</span>
                  </div>
                  <input required value={data.phone} onChange={handleInputChange}
                    name='phone' type="phone" placeholder="Number"
                    class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" />
                </div>

                <div class="input-group input-group-lg mb-3">
                  <div class="input-group-prepend">
                    <span class="input-group-text">Resume</span>
                  </div>
                  <div class="custom-file">
                    <input type="file"  required onChange={onChange} accept=".pdf, .doc, .docx" class="custom-file-input" id="inputGroupFile01" />
                    <label class="custom-file-label" for="inputGroupFile01">{filename}</label>
                  </div>
                </div>

                {/* <Form.Group controlId="formFileLg" className=" mb-3">
                    <Form.Label>Resume</Form.Label>
                    <Form.Control type="file" onChange={onChange}   accept=".pdf, .doc, .docx" size="lg" />
                  </Form.Group> */}

                <small>Only PDF, DOC, and DOCX files are allowed.</small>
                <br /><br /><br />

                <button type="submit" class="btn btn-dark btn-lg btn-block">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Applyvacancy