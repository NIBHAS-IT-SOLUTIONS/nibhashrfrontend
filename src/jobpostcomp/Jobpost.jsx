import React,{useContext, useEffect,useState} from 'react'
import './Jobpost.css'
import { useNavigate } from 'react-router-dom';
import UserContext from '../auth/UserContext'
import axios from 'axios';
import { baseURL } from '../constants/constants';


function Jobpost() {
    const navigate =useNavigate();
    const [data, setData] = useState({
        jobtitle: "",
        timing: "",
        department:"",
        gender: "",
        location: "",
        salary: "",
        experience: "",
        agelimit: "",
        qualification: "",
        skills: "",
        description: ""
      });
    //const user=useContext(UserContext)
   const handlesubmit=(e)=>{
    e.preventDefault()
    var jobdata={
        employerid:localStorage.getItem("loginid"),
        jobtitle: data.jobtitle,
        department:data.department,
        timing: data.timing,
        gender: data.gender,
        location: data.location,
        salary: data.salary,
        experience: data.experience,
        agelimit: data.agelimit,
        qualification: data.qualification,
        skills: data.skills,
        description: data.description

    }

    try {
        axios.post(`${baseURL}jobpost`, { jobdata })
        .then((res) => { console.log("done"); });
        //window.alert("Successfully Registered")
       navigate('/');
      }
      catch (error) {
        console.log(error);
      }
   }
   const handlechange=(event)=>{
    const { name, value } = event.target;

    setData((prevProps) => ({
      ...prevProps,
      [name]: value


    }));
   }
    
    return (
        <>

            <div className="jobpostcontainer">
                <div className="posttitle">Post a job</div>
                <div className="postcontent">
                <form onSubmit={handlesubmit} >
                    <div className="input-box">
                        <span className="details">Job title</span>
                        <input required onChange={(e)=>{handlechange(e)}} value={data.jobtitle} name='jobtitle'  />
                    </div>

                    <div className="input-box">
                        <span className="details">Department</span>
                        <input required onChange={(e)=>{handlechange(e)}} value={data.department} name='department'  />
                    </div>

                    <div className="input-box">
                        <select required value={data.timing} onChange={(e)=>{handlechange(e)}}  name="timing" id="">
                            <option value="">Full Time / Part Time</option>
                            <option value="Full Time">Full Time</option>
                            <option value="Part Time">Part Time</option>
                        </select>
                    </div>

                
                    <div className="input-box">
                        <select required value={data.gender} onChange={(e)=>{handlechange(e)}}  name="gender" id="">
                            <option value="">Select Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                    </div>
                    
                    <div className="input-box">

                        <select required value={data.location} onChange={(e)=>{handlechange(e)}}  name="location" id="">
                            <option value="">Select Location</option>
                            <option value="Kasaragod">Kasaragod</option>
                            <option value="Kannur">Kannur</option>
                            <option value="Kozhikode">Kozhikode</option>
                            <option value="Malapuram">Malapuram</option>
                            <option value="Wayanad">Wayanad</option>
                            <option value="Idukki">Idukki</option>
                            <option value="Palakkad">Palakkad</option>
                            <option value="Thrissur">Thrissur</option>
                            <option value="Ernakulam">Ernakulam</option>
                            <option value="Alapuzha">Alapuzha</option>
                            <option value="Kottayam">Kottayam</option>
                            <option value="Pathanamthitta">Pathanamthitta</option>
                            <option value="Kollam">Kollam</option>
                            <option value="Trivandrum">Trivandrum</option>


                        </select>
                    </div>

                    <div className="input-box">
                        <span className="details">Salary</span>
                        <input type='number' required value={data.salary} onChange={(e)=>{handlechange(e)}} name='salary'  />
                    </div>

                    <div className="input-box">
                        <span className="details">Experience required</span>
                        <input type='number' required value={data.experience} onChange={(e)=>{handlechange(e)}} name='experience'  />
                    </div>
                    <div className="input-box">
                        <span className="details">Age limit</span>
                        <input type='number' required value={data.agelimit} onChange={(e)=>{handlechange(e)}} name='agelimit'   />
                    </div>

                    <div className="input-box">
                        <span className="details">Qualification</span>
                        <input required value={data.qualification} onChange={(e)=>{handlechange(e)}}  name='qualification'  />
                    </div>

                    <div className="input-box">
                        <p> Skills Required</p>
                        <textarea required onChange={(e)=>{handlechange(e)}}  value={data.skills} name="skills" id="" cols="63" rows="2">
                       
                        </textarea>
                    </div>

                    <div className="input-box">
                        <p>Description</p>
                        <textarea required onChange={(e)=>{handlechange(e)}}  value={data.description} name="description" id="" cols="63" rows="2">
                       
                        </textarea>
                    </div>

                    <div className="buttons">
            <input type="submit"  value="Post Job" />
          </div>
          </form>

                </div>
            </div>

        </>
    )
}

export default Jobpost