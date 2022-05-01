import React from 'react'
import { Section } from './Style'
import Image from 'next/image'

import { useQuery, gql } from "@apollo/client";
import { useRouter } from 'next/router';
import services from '../../json/services.json'
import solutions from '../../json/solutions.json'
import Link from 'next/link';
function Footer() {

    const router = useRouter();

    
    return (
        <Section>
            <div className="footer">
                <div className="container">
                    <div className="footer-container">
                        <div className="col-footer">
                            <h3>Work</h3>
                            <li>
                            <Link href={{ pathname: '/clients' }}>
                                Case Studies
                                </Link>
                                </li>
                            <li>Client</li>
                            <div className="col-about">
                                <h3>
                                <Link href={{ pathname: '/about-us' }}>
                                    About
                                    </Link>
                                    </h3>
                                <li>
                                <Link href={{ pathname: '/about-us' }}>
                                    Brand
                                    </Link>
                                    </li>
                                <li>
                                <Link href={{ pathname: '/about-us' }}>
                                    Values
                                    
                                    </Link></li>
                                <li>
                                <Link href={{ pathname: '/about-us' }}>
                                    Functions
                                    </Link></li>
                                <li>
                                <Link href={{ pathname: '/team' }}>
                                    Team
                                    </Link>
                                    </li>
                                <li>
                                <Link href={{ pathname: '/about-us' }}>
                                    Digital Capabilities
                                    </Link>
                                    </li>
                                <li>
                                <Link href={{ pathname: '/about-us' }}>
                                    Approach
                                    </Link>
                                    </li>
                                <li>
                                <Link href={{ pathname: '/about-us' }}>
                                    Journey
                                    </Link>
                                    </li>
                                <li>
                                <Link href={{ pathname: '/about-us' }}>
                                    Ecosystem
                                    </Link>
                                    </li>
                            </div>
                        </div>
                        <div className="col-footer">
                            <h3>Services</h3>
                            {services.map((set , key) =>
                            <li    key={key} >
                                <Link href={{ pathname: `${`/services/${set.slug}`}` }}>
                                {set.servicesName}
                                </Link>
                                </li>

                            )

  }
                          
                        </div>
                        <div className="col-footer">
                            <h3>Solutions</h3>

                            {solutions.map(set => 
                            <li        key={set.id}  >
                                <Link href={{ pathname: `${`/solutions/${set.slug}`}` }}>
                                {set.solutionsName}
                                </Link>
                                </li>
                            )
}
                     
                        </div>
                        <div className="col-footer">
                            <h3>
                            <Link href={{ pathname: '/careers' }}>
                                Careers
                                </Link>
                                </h3>
                            <li>
                            <Link href={{ pathname: '/careers' }}>
                                Live & work in the  lap of Himalayas
                                </Link>
                                </li>
                            <li>
                            <Link href={{ pathname: '/careers' }}>
                                Why join our growing team
                                </Link>
                                </li>
                            <li>
                            <Link href={{ pathname: '/careers' }}>
                                Apply
                                </Link>
                                </li>
                            <li>
                            <Link href={{ pathname: '/careers' }}>
                                Refer
                                </Link>
                                </li>
                            <div className="col-media">
                                <h3>
                                <Link href={{ pathname: '/blog' }}>
                                    Media
                                    </Link>
                                    </h3>
                                <li>
                                <Link href={{ pathname: '/blog' }}>
                                    Blog
                                    </Link></li>
                                <li>
                                <Link href={{ pathname: '/blog' }}>
                                    Awards
                                    </Link>
                                    </li>
                                <li>
                                <Link href={{ pathname: '/blog' }}>
                                    News
                                    </Link>
                                    </li>
                            </div>
                        </div>
                        <div className="col-footer">
                            <h3>Contact</h3>
 
                            <li>                            <i className="fa fa-map-marker" aria-hidden="true"></i> PulsePlay Digital Private
                                Limited, Sushma
                                Cottage, Ram Nagar
                                Dharamshala 176215
                                Himachal Pradesh, India</li>
                            <div className="contact-details">
                                <li>+91 91751 00108</li>
                                <li     onClick={() => window.open('mailto:info@pulseplaydigital.com')  }  >info@pulseplaydigital.com</li>
                            </div>
                        </div>
                    </div>
                <div className="footer-copyright">
                    <div className="copyright-text">
                    <li   >  © 2022 PulsePlay Digital Private Limited | All Rights Reserved | Privacy Policy</li>
                        </div>
                        <div className="social-copyright">
                        <li>Follow Us:</li>
                      <li>
                          <a href="https://www.facebook.com/pulseplaydigital/" >   <i className="fa-brands fa-facebook-square"></i></a>
                         </li>  
                        <li>
                            <a  href="https://in.linkedin.com/company/pulseplaydigital" >                            <i className="fa-brands fa-linkedin"></i></a>
</li>

                        <li>
                            <a  href="https://www.instagram.com/pulseplaydigital/" >            <i className="fa-brands fa-instagram"></i></a>
                </li>

                <li>
                    <a href="https://twitter.com/PulsePlayD" ><i className="fa-brands fa-twitter"></i></a>
                </li>
                <li>
                    <a href="https://www.youtube.com/channel/UC-Zqx8qL5Er9GMXWj0KXKqA/featured"  >   <i className="fa-brands fa-youtube-square"></i></a>
                </li>


             
                            </div>
                    </div>
                </div>
            </div>
        </Section>
    )
}
export default Footer