import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import More from '../components/More'
import './pages.css'
import { Helmet } from 'react-helmet'
import Loading from '../Utils/Loading'
function Servicepage() {
     const [loading, setLoading] = useState(true);
        
          useEffect(() => {
           
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
        <title>Best recruitment agency in thrissur | Nibhas HRD Solutions</title>
        <meta name="description" 
        content="Your career partner in Thrissur. Nibhas HRD provides tailored job placement services for doctors, freshers, and experienced professionals"
 />
      </Helmet>
                   <Header />
                   <main className="main-content">
                     <More />
                   </main>
                   <Footer />
                    </>} </div>
  )
}

export default Servicepage