import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Jobseekers from '../components/Jobseekers/Jobseekers'
import Footer from '../components/Footer'
import { Helmet } from 'react-helmet'
import Loading from '../Utils/Loading'

function Placementsforjobseekers() {
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
        <title>Nibhas HRD Solution | Trusted Job Placement Consultancy
</title>
        <meta name="description" 
        content="Finding a job made easy! Nibhas HRD Solution is a trusted job placement consultancy helping you connect with the right employers across Kerala. Contact Now!"
 />
      </Helmet>
                    <Header />
                    <main className="main-content">
                      <Jobseekers/>
                    </main>
                    <Footer />
                    </>}
                  </div>
  )
}

export default Placementsforjobseekers