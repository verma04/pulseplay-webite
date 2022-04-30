import React from 'react'
import { Section } from './style'
import Image from 'next/image'

import { useQuery, gql } from "@apollo/client";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { NextSeo } from 'next-seo';
import services from '../../json/services.json'
import solutions from '../../json/solutions.json'
const Banner = () => {


   const notify = () => toast("Thanks for submission");
  return ( 
    <>
            <NextSeo
      title={`Contact Us - "Pulse Play Digital`}
      description="Solutions - Pulse Play Digital"
      canonical="https://www.canonical.ie/"
    
    />
    <Section>
      <ToastContainer/>

        <div className="banner">
  

  <Image
                alt="Picture of the author"
                objectFit="cover"
                layout="fill"
                src={"/contactus.png"}
              />
               <div className="text">

                   <div className="head">
                     <span>Contact Us</span>
            <h1 id="head" >
            Let’s Build Together
            </h1>
            <p>Our team comprises of highly skilled digital experts, analysts and engineers who imagne, design, build and perform across the digital ecosystems, platforms and technologies.</p>
            </div>
        </div>
        </div>

      
      <div className='form' >
        <input placeholder="Name*"></input>

<input placeholder="Email*"></input>
<input placeholder="Phone*"></input>
<input placeholder="Organization*"></input>
<select name="cars" id="cars">
 <option>Services</option>
  {services.map(t =>
  <option  key={t.id} value="volvo">{t.servicesName}</option>
  )

  }

</select>
<select name="cars" id="cars">
 <option>Solution</option>
  {solutions.map(t =>
  <option  key={t.id} value="volvo">{t.solutionsName}</option>
  )

  }

</select>

            <textarea placeholder="Message*"></textarea>


<div className="btn">
  <button  type="button" onClick={ ()  => notify ()}  >Send</button>
</div>
</div>

    </Section>
    </>
  )
}

export default Banner;






