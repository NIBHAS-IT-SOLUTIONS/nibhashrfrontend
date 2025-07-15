import React, { useEffect, useState } from 'react'
import './pages.css'
import Header from '../components/Header'
import Aboutus from '../components/Aboutus'
import Footer from '../components/Footer'
import { Helmet } from 'react-helmet'
import Loading from '../Utils/Loading'

function AboutUS() {
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
        <title>Professional Placement Services | Nibhas HRD, Thrissur</title>
        <meta name="description" 
        content="Nibhas HRD, Thrissur’s trusted doctor placement and job consultancy agency, connects skilled professionals with top hospitals and leading companies."
 />
      </Helmet>
                <Header />
                <main className="main-content">
                <Aboutus />
                </main>
                <Footer />
                </>}
              </div>
  )
}

export default AboutUS