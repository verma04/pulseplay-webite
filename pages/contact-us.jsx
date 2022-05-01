import Contactus from '../components/contactus/Contactus'
import React from 'react'
import Footer from '../components/coman/Footer'
import Navbar from '../components/coman/Navbar'
import { NextSeo } from 'next-seo';
function contact() {
  return (
      <>
       <>
    <NextSeo
      title="Contact Us"
      description="Pulse Play Digital"
 
    
    />
 
  </>
      <Navbar/>
  <Contactus/>
  <Footer/>
 </>
  )
}

export default contact