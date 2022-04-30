import Navbar from '@components/coman/Navbar'
import React from 'react'
import AllServices from './allSolutions'
import HeroSection from './HeroSection'
import { Section } from '../ourservices/Style.ts'
import Footer from '../coman/Footer'

function Services({data}) {
  return (
      <Section>

       <Navbar/>
     <HeroSection/>
     <AllServices data={data} />

     <Footer/>
 
</Section>
  )
}

export default Services