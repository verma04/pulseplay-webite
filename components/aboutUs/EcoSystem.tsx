import React from 'react'
import Image from "next/image";
export default function EcoSystem() {
  return (
    <div  className='ecosystem' >
<div className="view">
       <p> View Ecosystem &#10230;</p>
   
     </div>

    <div className='heading' >

<h2>Ecosystem</h2>



 <p className='bold' > #HimalayasDigital – Content, Conversations, Community, Commerce Ecosystem Initiative by PulsePlay Digital </p> 

 <li>Learning from the Living Cosmos </li>
 <li>Empowering Life, Living, Livelihoods and Lifestyles </li>

<p>
For Students, Farmers, Services Professional, Civil Professionals, Entrepreneurs, Artists, Sportsman, House wives, Labourers and more
</p>
    </div>

    <div className='imgArry' >
    <div  className="wrapper" >
            <Image
                alt="handshake"
                objectFit="cover"
                layout="fill"
                src="/aboutus/Students.png"
              />
            

    
        </div>
        <div  className="wrapper" >
            <Image
                alt="handshake"
                objectFit="cover"
                layout="fill"
                src="/aboutus/Students.png"
              />
            

    
        </div>
        <div  className="wrapper" >
            <Image
                alt="handshake"
                objectFit="cover"
                layout="fill"
                src="/aboutus/Students.png"
              />
            

    
        </div>

    </div>




   
 
    

   </div>
  )
}
