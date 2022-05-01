import Navbar from '../coman/Navbar'
import React from 'react'

import {Section} from './style'
import Section2 from './section2'
import HeroSection from './heroSection/HeroSection'

import List from './carrerList/list'
function team({data , team}) {
  return (
      <>
<Navbar/>
      <Section>
      <HeroSection  data={team} />

   <List  data={data} />

   <Section2/>

   </Section> 

   </>
  )
}

export default team