import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Doctorservice from '../components/Doctorservice/Doctorservice'
import Footer from '../components/Footer'
import './pages.css'
import { Helmet } from 'react-helmet'
import Loading from '../Utils/Loading'

function Doctorplacements() {
   const [loading, setLoading] = useState(true);
      
        useEffect(() => {
          // Simulate loading (e.g., auth check or API call)
          const timeout = setTimeout(() => {
            setLoading(false);
          }, 1000);
      
          return () => clearTimeout(timeout);
        }, []);
  return (
   <div className="page-container">
    {
        loading ? <Loading /> : 
        <>
      <Helmet>
        <title>Doctors placement services in thrissur |  Nibhas HRD</title>
        <meta name="description" 
        content="Nibhas HRD is your trusted partner for doctor placements in Thrissur. Fast, reliable recruitment  for hospitals and clinics"
 />
      </Helmet>
                   <Header />
                   <main className="main-content">
                     <Doctorservice/>
                   </main>
                   <Footer />
                   </>}
                 </div>
  )
}

export default Doctorplacements