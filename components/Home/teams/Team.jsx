import React from 'react'

import Image from 'next/image'
import { Section  }from './Style'


import { animate, motion } from "framer-motion"
import TeamMemberView from './TeamMemberView'


function Team({data}) {

  const [visible, setVisible] = React.useState(false)

  const [active, setActive] = React.useState(0)

  const NextSlide = async (index) => {
 await   setActive(index)
 await setVisible(true)
 setTimeout(() => {
  setVisible(false)
 }, 100);
    
  }

  const func =   async() => {
  await  setVisible(true)
 await   setTimeout(() => {
     setVisible(false)
    }, 100);
  }

  React.useEffect(() => {
  
  func()
  }, [])
  
  const variants = {
    visible : {
      y: 100 , opacity:0
    },
    animation : {
       y:0 , opacity:[-1 , 0.1 , 0.2 , 0.4 , 0.5 , 0.6 , 0.9 , 1] , transition:{duration:1}  
    }

  }

  const variantsImg = {
    visible : {
      x: 300 , opacity:0
    },
    animation : {
      x:0 , opacity:[-1 ,0.1 , 0.2 , 0.4 , 0.5 , 0.6 , 0.9 , 10] , transition:{duration:1}
    }

  }

  const decremnet =  async() => {
  await setActive(active-1)
   await setVisible(true)
   setTimeout(() => {
    setVisible(false)
   }, 100);
   
  }

  const increment = async () => {
  await  setActive(active+1)
    await setVisible(true)
    setTimeout(() => {
     setVisible(false)
    }, 100);
   }
  return (
    <Section>
    
  <div  className='flex' >
    {active === 0 ?
    (
<div   style={{cursor:'not-allowed'}}   className='arrow-left' >
  <svg    width="33" height="28" viewBox="0 0 33 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M32.4297 14.5C32.4297 15.7656 31.4453 16.75 30.25 16.75H8.66406L16.0469 24.2031C16.9609 25.0469 16.9609 26.5234 16.0469 27.3672C15.625 27.7891 15.0625 28 14.5 28C13.8672 28 13.3047 27.7891 12.8828 27.3672L1.63281 16.1172C0.71875 15.2734 0.71875 13.7969 1.63281 12.9531L12.8828 1.70312C13.7266 0.789062 15.2031 0.789062 16.0469 1.70312C16.9609 2.54688 16.9609 4.02344 16.0469 4.86719L8.66406 12.25H30.25C31.4453 12.25 32.4297 13.3047 32.4297 14.5Z" fill="#A9A9A9"/>
</svg>
</div>
    )
    :(
      <div  onClick={()=>decremnet()}   className='arrow-left' >
      <svg    width="33" height="28" viewBox="0 0 33 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M32.4297 14.5C32.4297 15.7656 31.4453 16.75 30.25 16.75H8.66406L16.0469 24.2031C16.9609 25.0469 16.9609 26.5234 16.0469 27.3672C15.625 27.7891 15.0625 28 14.5 28C13.8672 28 13.3047 27.7891 12.8828 27.3672L1.63281 16.1172C0.71875 15.2734 0.71875 13.7969 1.63281 12.9531L12.8828 1.70312C13.7266 0.789062 15.2031 0.789062 16.0469 1.70312C16.9609 2.54688 16.9609 4.02344 16.0469 4.86719L8.66406 12.25H30.25C31.4453 12.25 32.4297 13.3047 32.4297 14.5Z" fill="#0070E2"/>
    </svg>
    </div>  
    )

    }
{active === data.length - 1 ?
(
<div  style={{cursor:'not-allowed'}}   className='arrow-right' >
<svg    width="32" height="28" viewBox="0 0 32 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M30.7969 16.1172L19.5469 27.3672C19.125 27.7891 18.5625 28 18 28C17.3672 28 16.8047 27.7891 16.3828 27.3672C15.4688 26.5234 15.4688 25.0469 16.3828 24.2031L23.7656 16.75H2.25C0.984375 16.75 0 15.7656 0 14.5C0 13.3047 0.984375 12.25 2.25 12.25H23.7656L16.3828 4.86719C15.4688 4.02344 15.4688 2.54688 16.3828 1.70312C17.2266 0.789062 18.7031 0.789062 19.5469 1.70312L30.7969 12.9531C31.7109 13.7969 31.7109 15.2734 30.7969 16.1172Z" fill="#A9A9A9"/>
</svg>
</div>
)
:
(
  <div  onClick={() => increment()} className='arrow-right' >
  <svg    width="32" height="28" viewBox="0 0 32 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M30.7969 16.1172L19.5469 27.3672C19.125 27.7891 18.5625 28 18 28C17.3672 28 16.8047 27.7891 16.3828 27.3672C15.4688 26.5234 15.4688 25.0469 16.3828 24.2031L23.7656 16.75H2.25C0.984375 16.75 0 15.7656 0 14.5C0 13.3047 0.984375 12.25 2.25 12.25H23.7656L16.3828 4.86719C15.4688 4.02344 15.4688 2.54688 16.3828 1.70312C17.2266 0.789062 18.7031 0.789062 19.5469 1.70312L30.7969 12.9531C31.7109 13.7969 31.7109 15.2734 30.7969 16.1172Z" fill="#0070E2"/>
</svg>
</div>
)

}

{!visible ? (
  <TeamMemberView  arr={data}  active={active} variants={variants}  variantsImg={variantsImg} />
):
(
  null
)

}


 


 <div  className="bottom-bar">

   <div className='team_bar' >

   {data.map((t, index)=>
    <div  onMouseLeave={()=> NextSlide(index)}  onMouseOver={()=> NextSlide(index)} key={index} className="teamMember">
   
   <div  className={active === index ? ("activeWrapper"): ("wrapper")}   >
            <Image
                alt="Picture of the author"
                objectFit="cover"
                layout="fill"
                src={t.memberCover}
              />
            



    
        </div>

<span>{t.memberName}</span>
    </div>
   
   )

   }
</div>
 </div>
  </div>

    </Section>
  )
}

export default Team