import React from 'react'
import Image from "next/image";
import {motion} from 'framer-motion'
import { useRouter } from 'next/router';
import { Section } from './Style';
export default function AllServices({data}) {

    const router = useRouter()
  return (
 
    <div  className='services' >

    <div className="view">
           <p> View Approach  &#10230;</p>
       
         </div>
        <div className='heading' >
    
    <h2>Our Solutions</h2>
    
        </div>
    
        <div className='services-list' >
    
    
      <div className='services-detials' >
    

    {data.map(t => 
    
    
    <div onClick={()=> router.push(`/solutions/${t.slug}`)} key={t.id} className='list' >
    <div className='head' >
  

<div  className="wrapper" >
        <Image
            alt="handshake"
            objectFit="contain"
            layout="fill"
            src={t.solutionsAvatar}
          />
        


    </div>
    </div>

<p>{t.solutionsName}</p>



  </div>

    )

    }
    
      
   

      
    
      </div>
    
        </div>
    
     
        
    
       </div>
 
  )
}
