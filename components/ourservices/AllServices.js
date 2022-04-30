import React from 'react'
import Image from "next/image";
import {motion} from 'framer-motion'
import { useRouter } from 'next/router';
export default function AllServices({data}) {

    const router = useRouter()
  return (
    <div  className='services' >

    <div className="view">
           <p> View Approach  &#10230;</p>
       
         </div>
        <div className='heading' >
    
    <h2>Our Services</h2>
    
        </div>
    
        <div className='services-list' >
    
    
      <div className='services-detials' >
    

    {data.map(t => 
    
    
    <div onClick={()=> router.push(`/services/${t.slug}`)} key={t.id} className='list' >
    <div className='head' >
 

<div  className="wrapper" >
        <Image
            alt="handshake"
            objectFit="contain"
            layout="fill"
            src={t.servicesAvatar}
          />
        


    </div>
    </div>

<p>{t.servicesName}</p>



  </div>

    )

    }
    
      
   

      
    
      </div>
    
        </div>
    
     
        
    
       </div>
  )
}
