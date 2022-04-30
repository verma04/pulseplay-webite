import { animate, motion } from "framer-motion"

  
 export const textAnimationSlider = {
    visible : {
 opacity:0
    },
    animation : {
     opacity:[-1 , 0.1 , 0.2 , 0.4 , 0.5 , 0.6 , 0.9 , 1] , transition:{duration:1}  
    }

  }

   export const imgAnimationSlider = {
    visible : {
      x: 300 , opacity:0
    },
    animation : {
      x:0 , opacity:[-1 ,0.1 , 0.2 , 0.4 , 0.5 , 0.6 , 0.9 , 10] , transition:{duration:1}
    }

  }
