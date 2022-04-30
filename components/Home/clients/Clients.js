import React from 'react'

import Image from 'next/image'
import { Section  }from './Style'

import { useQuery, gql } from "@apollo/client";
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
       y:0 , opacity:[0.1 , 0.2 , 0.4 , 0.5 , 0.6 , 0.9 , 1] , transition:{duration:1}  
    }

  }

  const variantsImg = {
    visible : {
      x: 300 , opacity:0
    },
    animation : {
      x:0 , opacity:[0.1 , 0.2 , 0.4 , 0.5 , 0.6 , 0.9 , 10] , transition:{duration:1}
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
 
  

  const arr = data
  return (
    <Section>
    
  <div  className='flex' >
    {active === 0 ?
    (
<div   style={{cursor:'not-allowed'}}   className='arrow-left' >
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 23.625C18.4219 23.625 23.625 18.4219 23.625 12C23.625 5.57812 18.4219 0.375 12 0.375C5.57812 0.375 0.375 5.57812 0.375 12C0.375 18.4219 5.57812 23.625 12 23.625ZM13.3125 16.9219C13.7812 17.3438 13.7812 18.0938 13.3594 18.5156L12.8438 19.0312C12.4219 19.4531 11.6719 19.4531 11.25 19.0312L5.01562 12.7969C4.59375 12.375 4.59375 11.6719 5.01562 11.2031L11.25 5.01562C11.6719 4.54688 12.375 4.54688 12.8438 5.01562L13.3594 5.53125C13.7812 5.95312 13.7812 6.70312 13.3125 7.125L9.79688 10.5H18.375C18.9844 10.5 19.5 11.0156 19.5 11.625V12.375C19.5 13.0312 18.9844 13.5 18.375 13.5H9.79688L13.3125 16.9219Z" fill="white"/>
</svg>

</div>
    )
    :(
      <div  onClick={()=>decremnet()}   className='arrow-left' >
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 23.625C18.4219 23.625 23.625 18.4219 23.625 12C23.625 5.57812 18.4219 0.375 12 0.375C5.57812 0.375 0.375 5.57812 0.375 12C0.375 18.4219 5.57812 23.625 12 23.625ZM13.3125 16.9219C13.7812 17.3438 13.7812 18.0938 13.3594 18.5156L12.8438 19.0312C12.4219 19.4531 11.6719 19.4531 11.25 19.0312L5.01562 12.7969C4.59375 12.375 4.59375 11.6719 5.01562 11.2031L11.25 5.01562C11.6719 4.54688 12.375 4.54688 12.8438 5.01562L13.3594 5.53125C13.7812 5.95312 13.7812 6.70312 13.3125 7.125L9.79688 10.5H18.375C18.9844 10.5 19.5 11.0156 19.5 11.625V12.375C19.5 13.0312 18.9844 13.5 18.375 13.5H9.79688L13.3125 16.9219Z" fill="black"/>
</svg>
    </div>  
    )

    }
{active === arr.length - 1 ?
(
<div  style={{cursor:'not-allowed'}}   className='arrow-right' >
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 0.375C5.57812 0.375 0.375 5.57812 0.375 12C0.375 18.4219 5.57812 23.625 12 23.625C18.4219 23.625 23.625 18.4219 23.625 12C23.625 5.57812 18.4219 0.375 12 0.375ZM10.6406 7.125C10.1719 6.70312 10.1719 5.95312 10.5938 5.53125L11.1094 5.01562C11.5781 4.54688 12.2812 4.54688 12.7031 5.01562L18.9375 11.25C19.3594 11.6719 19.3594 12.375 18.9375 12.7969L12.7031 19.0312C12.2812 19.4531 11.5781 19.4531 11.1094 19.0312L10.5938 18.5156C10.1719 18.0938 10.1719 17.3438 10.6406 16.9219L14.1562 13.5H5.625C4.96875 13.5 4.5 13.0312 4.5 12.375V11.625C4.5 11.0156 4.96875 10.5 5.625 10.5H14.1562L10.6406 7.125Z" fill="white"/>
</svg>

</div>
)
:
(
  <div  onClick={() => increment()} className='arrow-right' >
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 0.375C5.57812 0.375 0.375 5.57812 0.375 12C0.375 18.4219 5.57812 23.625 12 23.625C18.4219 23.625 23.625 18.4219 23.625 12C23.625 5.57812 18.4219 0.375 12 0.375ZM10.6406 7.125C10.1719 6.70312 10.1719 5.95312 10.5938 5.53125L11.1094 5.01562C11.5781 4.54688 12.2812 4.54688 12.7031 5.01562L18.9375 11.25C19.3594 11.6719 19.3594 12.375 18.9375 12.7969L12.7031 19.0312C12.2812 19.4531 11.5781 19.4531 11.1094 19.0312L10.5938 18.5156C10.1719 18.0938 10.1719 17.3438 10.6406 16.9219L14.1562 13.5H5.625C4.96875 13.5 4.5 13.0312 4.5 12.375V11.625C4.5 11.0156 4.96875 10.5 5.625 10.5H14.1562L10.6406 7.125Z" fill="black"/>
</svg>

</div>
)

}

{!visible ? (
  <TeamMemberView  arr={arr}  active={active} variants={variants}  variantsImg={variantsImg} />
):
(
  null
)

}


 


 
  </div>

  <div  className="bottom-bar">

   <div className='team_bar' >

   {arr.map((t, index)=>
    <div onMouseLeave={()=> NextSlide(index)}  onMouseOver={()=> NextSlide(index)}   onClick={()=> NextSlide(index)} key={index} className="teamMember">
   
   <div  className={active === index ? ("activeWrapper"): ("wrapper")}   >



     {!t.projectLogo  ?
     (
 null
     )
     :
     (
      <Image
      alt="Picture of the author"
      objectFit="contain"
      layout="fill"
      src={t.projectLogo}
    />
  
     )

     }
           



    
        </div>


    </div>
   
   )

   }
</div>
 </div>

    </Section>
  )
}

export default  Team