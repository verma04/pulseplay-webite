import React from 'react'
import Image from "next/image";
export default function Values() {
  return (
   <div  className='values' >

     <div className="view">
       <p> View Values  &#10230;</p>
   
     </div>


    <div className='heading' >

<h2>Values</h2>

    </div>

    <div className='section-2' >


<div className='list' >

<div  className="wrapper" >
            <Image
                alt="aboutusr"
                objectFit="contain"
                layout="fill"
                src="/aboutus/goal.png"
              />
            <h3>Purpose</h3>

    
        </div>


  <p>To drive your digital growth and scale your business to the next level. Bring community and opportunity together.</p>
</div>

<div  id="active" className='list' >
<div  className="wrapper" >
            <Image
                alt="handshake"
                objectFit="contain"
                layout="fill"
                src="/aboutus/handshake.png"
              />
            
<h3>Promise</h3>
    
        </div>

  <p>To consistently iterate, optimize and be focused on positive business outcomes.</p>
</div>
<div className='list' >
<div  className="wrapper" >
            <Image
                alt="handshake"
                objectFit="contain"
                layout="fill"
                src="/aboutus/performance.png"
              />
            

            <h3>Performance</h3>

    
        </div>
  <p>To deliver results driven strategy for your digital investments.</p>
</div>

    </div>
    

   </div>
  )
}
