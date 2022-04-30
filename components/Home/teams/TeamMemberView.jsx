import React from 'react'
import { animate, motion } from "framer-motion"
import Image from 'next/image'
 


const TeamMemberView  = ({ arr , active , variants ,variantsImg}) => {
  return (
<>
<div className='flex-left' >

<motion.div



variants={variants}

initial={"visible"}

animate={"animation"}

className='teamMember' >

<h2>{arr[active].memberName}  </h2>

<h3>{arr[active].memberDesignation}</h3>

<p   dangerouslySetInnerHTML={{__html: arr[active].memberDescription}}  />
</motion.div>

</div>

<div className='flex-right' >
<motion.div    variants={variantsImg}

initial={"visible"}

animate={"animation"}className="wrapper" >
      <Image
          alt="Picture of the author"
          objectFit="contain"
          layout="fill"
          src={arr[active].memberAvatar}
        />
      




  </motion.div>
</div>

</>
  )
}

export default TeamMemberView