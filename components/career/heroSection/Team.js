import React from 'react'
import Image from "next/image";
import { motion} from 'framer-motion'
import { textAnimationSlider , imgAnimationSlider } from '@/framerMotionVartiants/vartiants'
import { TeamListInterface } from '@/types/types'

import {arr} from '../list'

const  Team= ({first}) => {
  return (
    <>
          
          <div className="left">
          <svg width="40" height="36" viewBox="0 0 40 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.55" d="M36.25 18H30V13C30 10.2656 32.1875 8 35 8H35.625C36.6406 8 37.5 7.21875 37.5 6.125V2.375C37.5 1.35938 36.6406 0.5 35.625 0.5H35C28.0469 0.5 22.5 6.125 22.5 13V31.75C22.5 33.8594 24.1406 35.5 26.25 35.5H36.25C38.2812 35.5 40 33.8594 40 31.75V21.75C40 19.7188 38.2812 18 36.25 18ZM13.75 18H7.5V13C7.5 10.2656 9.6875 8 12.5 8H13.125C14.1406 8 15 7.21875 15 6.125V2.375C15 1.35938 14.1406 0.5 13.125 0.5H12.5C5.54688 0.5 0 6.125 0 13V31.75C0 33.8594 1.64062 35.5 3.75 35.5H13.75C15.7812 35.5 17.5 33.8594 17.5 31.75V21.75C17.5 19.7188 15.7812 18 13.75 18Z" fill="white"/>
</svg>

              <motion.p
              variants={textAnimationSlider}
              dangerouslySetInnerHTML={{__html: first.shortDescription}}
              initial={"visible"}
              
              animate={"animation"}
              >
            
              </motion.p>
              <motion.ul
               variants={textAnimationSlider}

               initial={"visible"}
               
               animate={"animation"}
              >
                  <li>{first.memberName}</li>
                  <li id="deg" >{first.memberDesignation}</li>
              </motion.ul>

              <div className="btn">
                <h1>Join The Tribe</h1>

                <button>View All Jobs</button>
              </div>
          </div>
        
         <motion.div
           variants={textAnimationSlider}

           initial={"visible"}
           
           animate={"animation"}
         className="right">
         <Image
                alt="Picture of the author"
                objectFit="contain"
                layout="fill"
                src={first.memberAvatar}
              />
         </motion.div>
          </>

        
  )
}


export default Team