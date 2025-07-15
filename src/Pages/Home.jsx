import React, { useEffect, useState } from 'react'
import Header from '../components/Header';
import Content from '../components/Content'
import Aboutus from '../components/Aboutus'
import More from '../components/More'
import Forms from '../components/Forms'
import WhatsAppWidget from '../components/WhatsAppWidget'
import Footer from '../components/Footer'
import { Helmet } from 'react-helmet';
import Loading from '../Utils/Loading';

function Home() {
   const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const timeout = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timeout);
    }, []);
  return (

    <div>
        {
        loading ? <Loading /> : 
        <>
        <Helmet>
        <title>Nibhas HRD | Thrissur’s No.1 Doctor Placement Agency</title>
        <meta name="description" 
        content="Searching for the perfect doctor job? Nibhas HRD, Thrissur’s No.1 placement agency, connects doctors with top hospitals. Apply now and get placed fast!
" />
      </Helmet>
        <Header /><Content />  <Aboutus /> <More />  <Forms /> <WhatsAppWidget/> <Footer />
        </>
}
        </div>
  )
}

export default Home