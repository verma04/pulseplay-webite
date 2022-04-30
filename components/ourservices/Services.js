import Navbar from '../../components/coman/Navbar'
import React from 'react'
import AllServices from './AllServices'
import HeroSection from './HeroSection'
import { Section } from './Style'

function Services({data}) {
  return (
      <Section>

       <Navbar/>
     <HeroSection/>
     <AllServices data={data} />
 
</Section>
  )
}

export default Services