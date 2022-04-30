import Navbar from '../../components/coman/Navbar'
import { Container } from '../../theme/styled-box'
import React from 'react'
import HeroSection from './HeroSection'
import { Section } from './style'
import Values from './Values'
import Approch from './Approch'
import Journey from './Journey'
import EcoSystem from './EcoSystem'
import OurBrand from './OurBrand'
import Banner from '../coman/banner/Banner'
import Digital from './Digital'
import Footer from '../coman/Footer'
const  About = () => {
  return (
    <>
        <Navbar/>
        <Banner  cover="/aboutus/aboutusBannner.png" text="About us" />
    <Container>
  
    <Section>
    

    <Values/>
    <Approch/>
    <Digital/>
    <Journey/>
    <EcoSystem/>
    </Section>
  


    </Container>

    <Footer/>


    </>
  )
}

export default About