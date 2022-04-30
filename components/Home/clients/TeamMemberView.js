import React from 'react'
import { animate, motion } from "framer-motion"
import Image from 'next/image'
 


const TeamMemberView   = ({ arr , active , variants ,variantsImg}) => {
  return (
<>


<motion.div

variants={variants}

initial={"visible"}

animate={"animation"}
className='flex-left' >
<motion.div    

className="wrapper" >
      <Image
          alt="Picture of the author"
          objectFit="contain"
          layout="fill"
          src={arr[active].testimonialImage}
        />
      





  </motion.div>

  <div className='data' >
  <h2>{arr[active].testimonialName}  </h2>

<h3>{arr[active].testimoniaDesignation}</h3>
<h3>{arr[active].projectName}</h3>
  </div>

  
</motion.div>

<div className='flex-right' >

<motion.div



variants={variants}

initial={"visible"}

animate={"animation"}
dangerouslySetInnerHTML={{__html:arr[active].testimonialDescription}}
className='para' >




</motion.div>

</div>

</>
  )
}

export default TeamMemberView