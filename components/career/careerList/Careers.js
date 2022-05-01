import React from 'react'
import { Section } from './Style'
import Image from 'next/image'
import Carousel from './carousel'

import { useQuery, gql } from "@apollo/client";
import Router, { useRouter } from 'next/router';

function Careers({data , team}) {


    const member = team?.find(t => t._id === data?.employeLink)

    

    const router = useRouter()



    return (
        <Section>
            <div className="container">
                <div className="career-listing">
                    <div className="banner-content">
                        <div className="content-wrapper">
                            <p id="career">CAREER OPENING</p>
                            <h1>{data?.carrer}</h1>
                            <h5><span>LOCATION </span>-  {data?.carrerLocation} </h5>
                            <h5><span>VACANCY</span>     -  {data?.carrerVaccancy} </h5>
                            <button onClick={() => window.open('mailto:careers@pulseplaydigital.com')  }  className="btn-apply">Apply Now </button>
                        </div>



                        <div    dangerouslySetInnerHTML={{__html: data?.carrerDescription}}   className="listing-container">
                           
                        </div>
                        <div className="btn-container">
                            <button onClick={() => window.open('mailto:careers@pulseplaydigital.com')  } className="btn-apply">Apply Now</button> <p>Or</p><button className="btn-apply green">Refer Now</button>

                        </div>
                        <button onClick={() => router.push('/careers')  } className="all-jobs">View All Jobs</button>
                    </div>
                    <div className="banner-block">
                        <div className="banner-image">
                             <Image
                                alt="Picture of the author"
                        objectFit="cover"   
                                layout="fill" src={member?.memberCover}
                            /> 
                        </div>
                      <div className="about-pulseplay">
                          <div className="pulseplay-content">
                          <h2>About Pulseplay Digital:   </h2>
                          <div className='para' dangerouslySetInnerHTML={{__html: member?.shortDescription}}  ></div>

                          <h2>Why Pulseplay Digital?</h2>
                          <p>-  Your performance and remunerations in your digital marketing jobs & digital technology roles; will be reviewed & revised, timely, to reflect the growth of the company and not wait for the classical year-end review</p>
<p>- Your efforts will be recognized internally and across all digital/social channels</p>
<p>- You will be part of a growing team working in the lap of nature – the mighty Dhauladhar-Himalayan mountain range</p>
<p>-  You will be working with the leading experts in the industry on some of the most challenging and world class Digital projects. Dream Team. One Team</p>
<p>-  You will have access to digital tools and cross functional training</p>
<p>-  You will be part of a company culture that thrives on purpose, promise, productivity and performance</p>
<p>-  Your entrepreneurial attitude to take ownership and deliver results will shape your career at PulsePlay Digital and help us build a global Digital company we can all be proud of as a team</p>
                              </div>
                          
                        </div>
                    </div>

                </div>
              
            </div>
       
        </Section>
    )
}

export default Careers