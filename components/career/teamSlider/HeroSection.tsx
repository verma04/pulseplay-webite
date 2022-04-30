import React, { useEffect } from 'react'
import {arr} from '../list'
import Team from './Team'
import { TeamListInterface } from '@/types/types'
export default function HeroSection() {
  




    const [first, setfirst] = React.useState<TeamListInterface>(arr[0])
   


    useEffect(() => {

  
       
      
    }, [first])

  

//     setInterval(function() {
//         const index = arr.findIndex(t => t.name === first.name)
//  if(index + 1 === arr.length  ) {
 
//     setfirst(arr[0])
//  }
//       else {
//         setfirst(arr[index +1])   

//       }
         
   
//     }, 10000);
    

  return (
  

    <div className='slider' >
      
        
        
<Team first={first} />
        
        
     
        
        
        </div>
  )
}
