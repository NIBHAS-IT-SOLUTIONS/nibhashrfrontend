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
import Loginfooter from './logincomp/Loginfooter';
import Employerlogin from './logincomp/Employerlogin';
import Register from './logincomp/Register';
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
import Videopage from './components/Videopage';
import { baseURL } from './constants/constants';
import Showvacancies from './vacancies/Showvacancies/Showvacancies';
import Applyvacancy from './vacancies/Applyvacancy/Applyvacancy';

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


 useEffect(()=>{
  
    // loggeduserdata()
  },[])
  


  return (
    <div className="App">
      <BrowserRouter>
      {/* <UserContext.Provider value={{userData,setUserData}}> */}
      <Routes>
      
        {/* <Route path='login' element={<><Loginheader/><Employerlogin /> <Loginfooter/></>} /> */}
        {/* <Videopage/> */}

          <Route path='/' element={<><Header /><Content /> <Showvacancies/> <Aboutus /> <More />  <Reviews /> <Forms /> <Footer /> </>} />

          <Route path='/vacancies' element={<><Loginheader /><Showvacancies/> </>} />
          <Route path="applyvacancy/:id" element={<><Loginheader /> <Applyvacancy/></>} />

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
