import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Forms from '../components/Forms'
import Footer from '../components/Footer'
import './pages.css'
import { Helmet } from 'react-helmet'
import Loading from '../Utils/Loading'
function Contactuspage() {
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
        <title>Contact Us | Nibhas HRD –  Top Placement Consultancy
</title>
        <meta name="description" 
        content="Find the best job opportunities in Thrissur with Nibhas HRD Placement. We connect skilled professionals with top recruiters quickly. Don’t wait apply now!"
 />
      </Helmet>
                   <Header />
                   <main className="main-content">
                     <Forms/>
                   </main>
                   <Footer />
                    </>}
                 </div>
  )
}

export default Contactuspage