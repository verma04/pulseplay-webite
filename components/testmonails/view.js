import React from 'react'
import { Section } from './stye'
import { Player } from 'video-react';

import Image from 'next/image'
export default function view({data}) {
  return (
      <Section style={{backgroundColor: data?.clientColorTheme}} >
        <div className="client-top">
            <div className='para'
               dangerouslySetInnerHTML={{__html: data?.projectDescription}}
            />
<ul>
            <li>{data?.location}</li>
            <li></li>
            <li>{data?.projectIndustry.map(t => <> {t.label} </>  )}</li>
        </ul>
        </div>

        <div className="client-cover">

        <Image
                alt="Picture of the author"
                objectFit="cover"
                layout="fill"
                src={data?.projectCover}
              /> 
            

            </div>

            <div className="client-section">
            <div className="section">

  <div className="section-left">

      <ul>
          <li>Area</li>
          {data?.area.map(t =>
            <li key={t.id} >{t.label}</li>
          )

          }
        

        
      </ul>
  </div>
    

  <div className="section-right">
   
   <div className="para"
                  dangerouslySetInnerHTML={{__html: data?.projectPara1}}
   >
       
   </div>

   <div
     dangerouslySetInnerHTML={{__html: data?.projectPara2}}
   className="para-bottom">
     
   </div>

  </div>
  </div>

    </div>

 

    <div className="client-homePage">
     <div className='head' >
    <h2>Home Page</h2>
    </div>
    <div className='wrapper' >
    <Image
                alt="Picture of the author"
                objectFit="contain"
                layout="fill"
                src={data?.projectHomePageImage}
              /> 
    </div>
  
    </div>



    <div className="client-social">
     <div className='head' >
    <h2>Social Media Posts</h2>
    </div>
    <div className='wrapper' >
    <Image
                alt="Picture of the author"
                objectFit="contain"
                layout="fill"
                src={data?.projectSocialImage}
              /> 
    </div>
  
    </div>

    <div className="client-bottom">

    <div className="img-wrapper">

 
    <Image
                alt="Picture of the author"
                objectFit="contain"
                layout="fill"
                src={data?.projectDetialImage}
              /> 

</div>

<div
    dangerouslySetInnerHTML={{__html: data?.aboutproject}}
className='para' >

</div>


</div>

<video  className='set' src={data?.projectVideo} autoPlay loop muted />
     
<div className='space' ></div>



    <div className="testimonial">
     <div className='head' >
    <h2>Testimonial</h2>
    </div>
    <div className='testiminal-view' >

    <div className='testiminal-left' >
      
    <h2> {data?.testimonialName} </h2>
 <p id="des" >{data?.testimoniaDesignation}</p> 
 <p id="bt"  >{data?.projectName}</p> 

<div   dangerouslySetInnerHTML={{__html: data?.testimonialDescription}} className='para' ></div>
   </div>




   <div className='testiminal-right' >
   <Image
                alt="Picture of the author"
                objectFit="contain"
                layout="fill"
                src={data?.testimonialImage}
              /> 
   </div>
   
    </div>
  
    </div>
      </Section>
   
  )
}
