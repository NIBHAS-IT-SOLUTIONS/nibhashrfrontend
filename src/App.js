import './App.css';
import Content from './components/Content';
import Header from './components/Header';
import Loginheader from './logincomp/Loginheader';
import { useContext, useEffect, useState } from 'react';
import More from './components/More';
import Footer from './components/Footer';
import Aboutus from './components/Aboutus';
import Forms from './components/Forms';
import Reviews from './components/Reviews';
import { Route, Routes } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';

import Jobpost from './jobpostcomp/Jobpost';
//import axios from 'axios';
import UserContext from './auth/UserContext';
import axios from 'axios';
import Jobcard from './jobpostcomp/Jobcard';
import Cheader from './candidatecomp/Cheader';
import Cfooter from './candidatecomp/Cfooter';
import Cregister from './candidatecomp/Cregister';
import Clogin from './candidatecomp/Clogin';
import Capply from './candidatecomp/Capply';
import { baseURL } from './constants/constants';
import Showvacancies from './vacancies/Showvacancies/Showvacancies';
import Applyvacancy from './vacancies/Applyvacancy/Applyvacancy';
import Doctorservice from './components/Doctorservice/Doctorservice';
import Contact from './components/Contact/Contact';
import Jobseekers from './components/Jobseekers/Jobseekers';
import WhatsAppWidget from './components/WhatsAppWidget';
import PhoneAuth from './Phoneauth/PhoneAuth';
import CandidateCorner from './CandidateCorner/CandidateCorner';
import Home from './Pages/Home';
import AboutUS from './Pages/AboutUS';
import Vacancypage from './Pages/Vacancypage';
import Doctorplacements from './Pages/Doctorplacements';
import Placementsforjobseekers from './Pages/Placementsforjobseekers';
import Contactuspage from './Pages/Contactuspage';

import Servicepage from './Pages/Servicepage';
import Loading from './Utils/Loading';







//import Chome from './candidatecomp/chome';


function App() {
  //  const user=useContext(UserContext)

  //   const [userData,setUserData]=useState({
  //     id:undefined,
  //     user:undefined
  //   })

  //   const userid=localStorage.getItem("loginid")?localStorage.getItem("loginid"):localStorage.getItem("candid")

  // console.log(userid);
  // const loggeduserdata=async()=>{
  //   const userid=localStorage.getItem("loginid")
  //   //console.log(userid);
  //   const candid=localStorage.getItem("candid")
  //   if(userid){
  //     const userid=localStorage.getItem("loginid")
  //   const loggeduser=await axios.get(`${baseURL}getuser/${userid}`)
  //    // console.log(loggeduser.data.user);
  //     setUserData({
  //       id:userid,
  //       user:loggeduser.data.user
  //     })}
  //     if(candid){
  //       const candid=localStorage.getItem("candid")
  //       const loggeduser=await axios.get(`${baseURL}getcandidate/${candid}`)
  //        // console.log(loggeduser.data.user);
  //         setUserData({
  //           id:userid,
  //           user:loggeduser.data.user
  //         })}
  //    // console.log(userData);
  // }

 



  return (
    <div className="App">
     
      <BrowserRouter basename='/' >
        {/* <UserContext.Provider value={{userData,setUserData}}> */}
        <Routes>

          {/* <Route path='login' element={<><Loginheader/><Employerlogin /> <Loginfooter/></>} /> */}
          {/* <Videopage/> */}

          <Route path='/' element={<Home/>} />

          <Route
            path="/about"
            element={
              <AboutUS/>
            }
          />
          <Route
            path="/vacancies"
            element={
              <Vacancypage/>
            }
          />
           <Route
            path="/Doctorplacements"
            element={
              <Doctorplacements/>
            }
          />
          <Route
            path="/placements-for-jobseekers"
            element={
              <Placementsforjobseekers/>
            }
          />
          <Route
            path="/contactus"
            element={
             <Contactuspage/>
            }
          />
           <Route
            path="/services"
            element={
            <Servicepage/>
            }
          />
           <Route
            path="/verify"
            element={
              <div className="page-container">
                <Header />
                <main className="main-content">
                  <PhoneAuth/>
                </main>
                <Footer />
              </div>
            }
          />
            <Route
            path="/candidatecorner"
            element={
              <div className="page-container">
                <Header />
                <main className="main-content">
                  <CandidateCorner/>
                </main>
                <Footer />
              </div>
            }
          />
          
          <Route path="applyvacancy/:id" element={<> <Header /> <Applyvacancy /><Footer /></>} />

          {/* <Route path='register' element={<><Loginheader/><Register /> <Loginfooter/></>} /> */}

          {/* {
          userid ?

        <Route path='postajob' element={<><Loginheader/> <Jobpost/> <Loginfooter/></>}/>
        :
        <Route path='postajob' element={<><Loginheader/><Employerlogin /> <Loginfooter/></>} />
        }
        
        {
          userid ?
        <Route path='alljobs' element ={<><Loginheader/> <Jobcard/> <Loginfooter/></>}/>
        :
        <Route path='alljobs' element={<><Loginheader/><Employerlogin /> <Loginfooter/></>} />
        }

        {/* candidate */}

          {/* <Route path='candidatelogin' element={<><Cheader/><Clogin/><Cfooter/></>}/>
          <Route path='candidateregister' element={<><Cheader/><Cregister/><Cfooter/></>}/>


          {
          userid ?
          <Route path='applyjob' element={<><Cheader/><Capply/><Cfooter/></>}/>
        :
        <Route path='applyjob' element={<><Cheader/><Clogin/><Cfooter/></>} />
        } */}








        </Routes>
        {/* </UserContext.Provider> */}
      </BrowserRouter>


    </div>
  );
}

export default App;
