import React, { useEffect, useState } from 'react'
import './Capply.css'
import axios from 'axios'
import { baseURL } from '../constants/constants'




function Capply() {

  const [jobs, setJobs] = useState([])
  const [locations,setLocations]=useState([])

  const getjobsbyEmployer = async () => {
    //const userid = localStorage.getItem("loginid")
    //  console.log(userid);
    const jobs = await axios.get(`${baseURL}getjobs/`)
    //console.log(jobs.data.alljobs);
    const alljobs = jobs.data.alljobs
    setJobs(alljobs)
  }
  const getlocations=async()=>{
    const locationsdata = await axios.get(`${baseURL}getlocations/`)
    //console.log(locationsdata.data.locations[0]);
    //const locations = jobs.data.alljobs
    setLocations(locationsdata.data.locations[0])
    
  } 
  useEffect(() => {
    getjobsbyEmployer()
    getlocations()
  }, [])
  //console.log(locations);


  const handlejobbylocation =async(e)=>{
    var  location=e.target.value
    const jobs = await axios.get(`${baseURL}getjobsbylocation/?location=${location}`)
    //console.log(jobs.data.alljobs);
    const alljobs = jobs.data.alljobs
    setJobs(alljobs)
  }

  const applyjob=async(jobid,empid)=>{

    const candidateid = localStorage.getItem("candid")
    var jobs={
      jobid:jobid,
      candidateid:candidateid,
      employerid:empid
    }
    console.log(jobs);
    var applied= await axios.post(`${baseURL}applyjobs`,{jobs})
    console.log(applied);
  }
  
  return (
    <>
    <div className="sorting">

    </div>
    {/* <select onChange={(e)=>handlejobbylocation(e)}>
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
                            
            
    </select> */}

    {
      jobs.map((job,index)=>{
return(
      

      <div className="csinglecard-container">
        <div className="csingle-card">
          <div className="csinglecard-title">
            <h1> </h1>
          </div>
          <div className="csingle-cardcontent">

            <ul>
              <h2>
                
               {job.jobtitle}

              </h2>

              <li><i class="fa fa-briefcase" aria-hidden="true"></i> Department : {job.department}</li>
              <li><i class="fa fa-user"></i> Gender : {job.gender}</li>
              <li><i class="fa fa-map-marker" aria-hidden="true"></i> Location : {job.location}</li>
              <li><i class="fa fa-inr" aria-hidden="true"></i> Salary : {job.salary}</li>
              <li><i class="fa fa-calendar-check" aria-hidden="true"></i> Experince :  {job.experience}</li>
              <li><i class="fa fa-people-arrows"></i> Age limit : {job.agelimit}</li>
              <li><i class="fa fa-thin fa-graduation-cap"></i> Qualification : {job.qualification}</li>
              <li><i class="fa fa-thin fa-wand-magic-sparkles"></i> Skills : {job.skills}</li>
              <li><i class="fa fa-sharp fa-thin fa-clipboard"></i> Description : {job.description}</li>

            </ul>



          </div>
          <button  onClick={()=>{applyjob(job._id,job.employerid)}} className='ccard-button'>Apply <i class="fa fa-hand-pointer" aria-hidden="true"></i> </button>

        </div>

 
      </div>
        )
      })
}
    </>
  )
}

export default Capply