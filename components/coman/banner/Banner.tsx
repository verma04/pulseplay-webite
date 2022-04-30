import React from 'react'
import { Section } from './style'
import Image from 'next/image'

interface props {
    cover:string ,
     text:string
}

const Banner:React.FC<props> = ({cover , text}) => {
  return ( 
    <Section>

        <div className="banner">
  

  <Image
                alt="Picture of the author"
                objectFit="cover"
                layout="fill"
                src={cover}
              />
               <div className="text">

                   <div className="head">
            <h1 id="head" >
  {text}
            </h1>
            </div>
        </div>
        </div>

       

    </Section>
  )
}

export default Banner