import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { baseURL } from '../../constants/constants';
import { Link } from 'react-router-dom';
import './Showvacancies.css'


function Showvacancies() {

  const [vacancies, setvacancies] = useState([])
  const [count, setCount] = useState(0);
  const [jobnamesearch, setjobnamesearch] = useState(false)
  const [filters, setfilters] = useState(false)

  const [searchjob, setsearchjob] = useState('')
  const [salary, setsalary] = useState([])
  const [exp, setexp] = useState(0)
  const [loc, setloc] = useState('')

  const getvacancies = async () => {
    const jobs = await axios.get(`${baseURL}getvacancies/`)
    //  console.log(jobs.data.vacancies);
    setvacancies(jobs.data.vacancies)

  }

  useEffect(() => {
    getvacancies()


  }, [])


  const handlesearch = async (e) => {
    if (filters) {
      let searchjob = e.target.value
      setsearchjob(searchjob)
      handlefilter()

    }
    else {
      let searchjob = e.target.value
      setsearchjob(searchjob)
      const response = await axios.post(`${baseURL}searchbyjob/`, { searchjob })
      // console.log(response.data);
      setvacancies(response.data)
    }
  }
  const handlerange = (e) => {
    setexp(e.target.value)
    const sliderEl = document.querySelector("#range")
    const sliderValue = document.querySelector(".value")

    sliderEl.addEventListener("input", (event) => {
      const tempSliderValue = event.target.value;

      sliderValue.textContent = "Experience : " + tempSliderValue;

      const progress = (tempSliderValue / sliderEl.max) * 100;

      sliderEl.style.background = `linear-gradient(to right, #f50 ${progress}%, #ccc ${progress}%)`;
    })
  }
  const handlefilter = async (e) => {

    let searchfilter = {
      searchjob: searchjob,
      location: loc,
      experience: exp,
      firstsal: salary[0],
      secsal: salary[1]
    }
    console.log(searchfilter);
    const response = await axios.post(`${baseURL}filterjobs/`, { searchfilter })
    console.log(response.data);
    setvacancies(response.data)
  }
  const clearfilter = () => {
    setfilters(false)
    setexp(0)
    setsalary([])
    setloc(0)
    getvacancies()
    setsearchjob('')

  }
  const handleradio = (e) => {
    //console.log(e.target.value);
    let sal = e.target.value
    if (sal == 1) {
      let salarray = [0, 100000]
      setsalary(salarray)
    }
    else if (sal == 2) {
      let salarray = [100001, 300000]
      setsalary(salarray)
    }
    else if (sal == 3) {
      let salarray = [300000, 600000]
      setsalary(salarray)
    }
    else if (sal == 4) {
      let salarray = [600000, 1000000]
      setsalary(salarray)
    }
    else {
      let salarray = [1000000, 10000000]
      setsalary(salarray)
    }
  }

  return (
    <>
      <div className="vaccancies">
        <br /><br />
        <div class="d-flex justify-content-center mx-auto py-auto">

          <h1 class="text-dark">Search For Your vacancies</h1>
        </div>
        {
          jobnamesearch ?
            <>
              <form class="w-80  mx-5 my-5" >
                <input type="search" onChange={e => handlesearch(e)} name='search' class="input-group input-group-lg p-4" placeholder="Search Job" aria-label="Search" />
              </form>
              {
                filters ?
                  <form class="row g-3 mx-5 w-70" >
                    <div class="col-md-2">
                      Preffered Location
                      <select name='location' required onChange={(e) => { setloc(e.target.value) }} id="inputState" class="input-group">
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
                    <div class="col-md-4">
                      <p class="value"> Experience 0</p>
                      <input className='range' required onChange={(e) => { handlerange(e) }} type="range" min="1" max="50" id="range" />

                    </div>

                    <div class="col-md-4">

                      {/*  */}
                      <div id="form-wrapper">
                        <div className='slide-form' >
                          Salary Range
                          <div id="debt-amount-slider">
                            <input type="radio" name="salary" onClick={(e) => handleradio(e)} id="1" value="1" required />
                            <label for="1" data-debt-amount="< ₹ 1Lakh"></label>
                            <input type="radio" onClick={(e) => handleradio(e)} name="salary" id="2" value="2" required />
                            <label for="2" data-debt-amount="₹1L-3L"></label>
                            <input type="radio" onClick={(e) => handleradio(e)} name="salary" id="3" value="3" required />
                            <label for="3" data-debt-amount="₹3L-6L"></label>
                            <input type="radio" onClick={(e) => handleradio(e)} name="salary" id="4" value="4" required />
                            <label for="4" data-debt-amount="₹6L-10L"></label>
                            <input type="radio" onClick={(e) => handleradio(e)} name="salary" id="5" value="5" required />
                            <label for="5" data-debt-amount="₹10L+"></label>

                            <div id="debt-amount-pos"></div>
                          </div>
                        </div>
                      </div>
                      {/*  */}



                    </div>
                    <div class="col-md-2 p-5 ">
                      <button class="btn btn-primary btn-lg p-4 " onClick={(e) => { handlefilter(e) }} type="button"> Filter Jobs <i class="fa-solid fa-briefcase"></i></button> &nbsp;
                      <button class="btn btn-secondary btn-lg p-4 " onClick={(e) => { clearfilter(e) }} type="button">Clear Filters <i class="fa-solid fa-delete-left"></i></button>
                    </div>
                  </form>

                  :
                  <div
                    onClick={(e) => setfilters(true)}
                    className="input-group input-group-lg p-4 mx-5 my-5 d-none d-sm-block"
                  >
                    Additional Filters
                  </div>
              }

            </>
            :

            <div onClick={(e) => { setjobnamesearch(true) }} class="input-group input-group-lg p-4 mx-5 my-5">Search By Job</div>



        }




        <div class="row row-cols-1 row-cols-md-4 mx-auto mt-5 g-4">

          {
            vacancies.length > 0 ?
              vacancies.map((vacancy) => {
                return (
                  <div class="col mb-5 " >
                    <div class="card h-100 ">

                      <div class="card-body ">
                        <h5 class="card-title text-center"><h1> {vacancy.jobtitle}  </h1></h5>
                        <p class="card-text "><br />
                          Department :  {vacancy.department} <br />
                          Location : {vacancy.location} <br />
                          Experience : {vacancy.experience} <br />
                          Salary : {vacancy.salary} <br />
                          Skills: {vacancy.skills} <br />
                          Qualifiaction: {vacancy.qualification} <br />
                          Gender : {vacancy.gender} <br />
                          Date Posted : {vacancy.postdate}
                        </p>
                      </div>
                      <div class="card-footer ">

                        <div class="d-grid gap-2">
                          <Link class="btn btn-outline-dark col-12 mx-auto" to={`/applyvacancy/${vacancy._id}`}><h3>Apply for this Job</h3></Link>

                        </div>

                      </div>
                    </div>

                  </div>
                )
              })
              :
              <div class="d-flex justify-content-center mx-auto">
                <h1 class="text-primary">Loading Vacancies....</h1>
                <br /><br /><br />
              </div>

          }


        </div>
      </div>
    </>
  )
}

export default Showvacancies