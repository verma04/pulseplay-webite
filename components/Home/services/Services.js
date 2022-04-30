import React from 'react'
import {Section} from './Style'
import Serivice2 from './Services2'
import { useMousePosition } from './/useMousePosition'
import Image from 'next/image'
import { BrowserView, MobileView, isBrowser, isMobile , isDesktop } from 'react-device-detect';
const Services = () => {

        const [active, setActive] = React.useState("")
    
  return (

        <>



<>
      <Section>



        <div  className='flex-1' >

<div   onMouseLeave={()=>setActive("")}  onMouseOver={()=>setActive("Imagine")}  className='block' >
    <div className='data' >


    <h2>
            <li>01</li>
            IMAGINE  </h2>
            <p>Inspire. Ideate. Imagine.</p>
    </div>

{active === "Imagine" &&
  <div  className='img-ab' >

  <div className='img-wrapper' >
  <Image
        alt="Picture of the author"
        objectFit="contain"
        layout="fill"
        src={'/Imagines.jpg'}
      />
  
          </div>
  
  
  </div>

}
  

   
    </div>  
    <div  onMouseLeave={()=>setActive("")}  onMouseOver={()=>setActive("Design")} className='block' >
    <div className='data' >
    <h2>
            <li>02</li>
            DESIGN</h2>
            <p>Draw. Decipher. Design.</p>
    </div>

    {active === "Design" &&
  <div className='img-ab' >

  <div className='img-wrapper' >
  <Image
        alt="Picture of the author"
        objectFit="contain"
        layout="fill"
        src={"/Designs.jpg"}
      />
  
          </div>
  
  
  </div>

}
  
    </div> 
    
    
  

             </div>
           









    </Section>
    

<Serivice2/>
    </>

        </>
  )
}

export default Services