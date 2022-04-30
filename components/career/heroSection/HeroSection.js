import React, { useEffect } from 'react'

import Team from './Team'
import { TeamListInterface } from '@/types/types'
export default function HeroSection({data}) {
  

console.log(data)


    const [first, setfirst] = React.useState(data[0])
   


    useEffect(() => {

  
       
      
    }, [first])

  

    setInterval(function() {
        const index = data.findIndex(t => t.name === first.name)
 if(index + 1 === data.length  ) {
 
    setfirst(data[0])
 }
      else {
        setfirst(data[index +1])   

      }
         
   
    }, 10000);
    

  return (
  

    <div className='set' >
      
        
        
<Team first={first} />
        
        
     
        
        
        </div>
  )
}
