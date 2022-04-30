import React from 'react'
import {Section} from './Style'
import { useMousePosition } from './useMousePosition'
import Image from 'next/image'
const Services = () => {
  const [active, setActive] = React.useState("")
    
  return (
      <Section>



        <div  className='flex-1' >
        <div  onMouseLeave={()=>setActive("")}  onMouseOver={()=>setActive("Build")} className='block' >
    <div className='data' >
    <h2>
            <li>03</li>
            BUILD</h2>
            <p>Base. Budget. Build.</p>
    </div>

    {active === "Build" &&
  <div  className='img-ab' >

  <div className='img-wrapper' >
  <Image
        alt="Picture of the author"
        objectFit="contain"
        layout="fill"
        src={"/Builds.jpg"}
      />
  
          </div>
  
  
  </div>

}
    </div>  
  <div   onMouseLeave={()=>setActive("")}  onMouseOver={()=>setActive("Perform")} className='block' >
    <div className='data' >
    <h2>
            <li>04</li>
            PERFORM</h2>
            <p>Prepare. Perceive. Perform.</p>
    </div>
    {active === "Perform" &&
  <div className='img-ab' >

  <div className='img-wrapper' >
  <Image
        alt="Picture of the author"
        objectFit="contain"
        layout="fill"
        src={"/Performs.jpg"}
      />
  
          </div>
  
  
  </div>

}
    </div>        

 
  

             </div>
           









    </Section>
  )
}

export default Services