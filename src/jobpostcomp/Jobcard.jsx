import React, { useEffect, useState } from 'react'
import './Jobcard.css'
import axios from 'axios'
import { baseURL } from '../constants/constants'


function Jobcard() {

    const [jobs, setJobs] = useState([])
    const getjobsbyEmployer = async () => {
        const userid = localStorage.getItem("loginid")
        //  console.log(userid);
        const jobs = await axios.get(`${baseURL}getjobs/?id=${userid}`)
        // console.log(jobs.data.jobsbyemployer);
        const jobsbyemployer = jobs.data.jobsbyemployer
        setJobs(jobsbyemployer)
    }
    useEffect(() => {
        getjobsbyEmployer()
    }, [])

const handleDelete=async(userid)=>{

const response=await axios.delete(`${baseURL}deletejobs/?id=${userid}`)
window.alert(response.data.message)
getjobsbyEmployer()

}
    // var userid='65cc5941c8b665122fc65696'
    // alljobsudata= await axios.get(`http://localhost:4000/getjobs/`)
    //console.log(udata.data.alljobs);
    //const udata= await axios.get(`http://localhost:4000/getjobs/?id=${userid}`) jobs by employer
    //console.log(udata.data);
    return (
        <>
            {
                jobs.map((job, index) => {
                    return (

                        <div className="singlecard-container">
                            <div className="single-card">
                                <div className="singlecard-title">
                                    <h1>{job.jobtitle} </h1>
                                </div>




                                <div className="single-cardcontent">

                                    <ul>

                                        <li><i class="fa fa-briefcase" aria-hidden="true"></i> Department : {job.department}</li>
                                        <li><i class="fa fa-user"></i> Gender : {job.gender}</li>
                                        <li><i class="fa fa-map-marker" aria-hidden="true"></i> Location : {job.location}</li>
                                        <li><i class="fa fa-inr" aria-hidden="true"></i> Salary : {job.salary}</li>
                                        <li><i class="fa fa-calendar-check" aria-hidden="true"></i> Experince : {job.experience} years</li>
                                        <li><i class="fa fa-people-arrows"></i> Age limit : {job.agelimit}</li>
                                        <li><i class="fa fa-thin fa-graduation-cap"></i> Qualification : {job.qualification}</li>
                                        <li><i class="fa fa-thin fa-wand-magic-sparkles"></i> Skills : {job.skills}</li>
                                        <li><i class="fa fa-sharp fa-thin fa-clipboard"></i> Description : {job.description}</li>

                                    </ul>



                                </div>
                                <button onClick={()=>handleDelete(job._id)} className='card-button'>Delete <i class="fa fa-trash" aria-hidden="true"></i> </button>

                            </div>

                        </div>
                    )
                })
            }

        </>
    )
}

export default Jobcard

