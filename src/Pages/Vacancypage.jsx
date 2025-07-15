import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Showvacancies from '../vacancies/Showvacancies/Showvacancies'
import Footer from '../components/Footer'
import './pages.css'
import { Helmet } from 'react-helmet'
import Loading from '../Utils/Loading'

function Vacancypage() {
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
        <title>Latest Job Vacancies in Thrissur – Nibhas HRD Placement
</title>
        <meta name="description" 
        content="Find the best job opportunities in Thrissur with Nibhas HRD Placement. We connect skilled professionals with top recruiters quickly. Don’t wait apply now!"
 />
      </Helmet>

                   <Header />
                   <main className="main-content">
                     <Showvacancies />
                   </main>
                   <Footer />
                </>} </div>
  )
}

export default Vacancypage