import React from 'react'

import { useQuery, gql } from "@apollo/client";
import { useRouter } from 'next/router';
const arr =[
  "Imagine",
"Design",
  "Build",
  "Perform"
]

export default function Career({data}) {

   const router = useRouter()



  console.log(data)


  const [ active , setActive] = React.useState('')

   console.log(data)
  return (
  <div className='career' > 
  
  <div className='career-top' >
    <h2>Careers</h2>
    <p>
    PulsePlayers work across these four major areas - Imagine, Design, Build and Perform. When each of these areas intersect, they become more meaningful, impactful and complete. One may start in an area but may play across the others areas.
    </p>
  </div>

  <div className='filter' >
    <h3>Experienced Hires</h3>
    <h3>Interns</h3>

  </div>

  <div className='career-list' >
   {arr.map((t, key) => 
  
    <div key={key} className='list' >

      <div className='head' >

    <h4>{t}</h4>
    {active === t ?
      (
        
    <div  onClick={() => setActive('') } className='btn' >
     
     <svg width="24" height="27" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.4099 13.9191L19.7099 7.0804C19.8982 6.87568 20.004 6.598 20.004 6.30847C20.004 6.01894 19.8982 5.74127 19.7099 5.53654C19.5216 5.33181 19.2662 5.2168 18.9999 5.2168C18.7336 5.2168 18.4782 5.33181 18.2899 5.53654L11.9999 12.3861L5.70994 5.53654C5.52164 5.33181 5.26624 5.2168 4.99994 5.2168C4.73364 5.2168 4.47824 5.33181 4.28994 5.53654C4.10164 5.74127 3.99585 6.01894 3.99585 6.30847C3.99585 6.598 4.10164 6.87568 4.28994 7.0804L10.5899 13.9191L4.28994 20.7577C4.19621 20.8588 4.12182 20.979 4.07105 21.1115C4.02028 21.244 3.99414 21.3861 3.99414 21.5297C3.99414 21.6732 4.02028 21.8153 4.07105 21.9478C4.12182 22.0803 4.19621 22.2005 4.28994 22.3016C4.3829 22.4035 4.4935 22.4844 4.61536 22.5396C4.73722 22.5948 4.86793 22.6232 4.99994 22.6232C5.13195 22.6232 5.26266 22.5948 5.38452 22.5396C5.50638 22.4844 5.61698 22.4035 5.70994 22.3016L11.9999 15.4521L18.2899 22.3016C18.3829 22.4035 18.4935 22.4844 18.6154 22.5396C18.7372 22.5948 18.8679 22.6232 18.9999 22.6232C19.132 22.6232 19.2627 22.5948 19.3845 22.5396C19.5064 22.4844 19.617 22.4035 19.7099 22.3016C19.8037 22.2005 19.8781 22.0803 19.9288 21.9478C19.9796 21.8153 20.0057 21.6732 20.0057 21.5297C20.0057 21.3861 19.9796 21.244 19.9288 21.1115C19.8781 20.979 19.8037 20.8588 19.7099 20.7577L13.4099 13.9191Z" fill="black"/>
</svg>


</div>
      )
      : (
        <div onClick={() => setActive(t)} className='btn' >
     
        <svg    width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15 7H9V1C9 0.734784 8.89464 0.48043 8.70711 0.292893C8.51957 0.105357 8.26522 0 8 0C7.73478 0 7.48043 0.105357 7.29289 0.292893C7.10536 0.48043 7 0.734784 7 1V7H1C0.734784 7 0.48043 7.10536 0.292893 7.29289C0.105357 7.48043 0 7.73478 0 8C0 8.26522 0.105357 8.51957 0.292893 8.70711C0.48043 8.89464 0.734784 9 1 9H7V15C7 15.2652 7.10536 15.5196 7.29289 15.7071C7.48043 15.8946 7.73478 16 8 16C8.26522 16 8.51957 15.8946 8.70711 15.7071C8.89464 15.5196 9 15.2652 9 15V9H15C15.2652 9 15.5196 8.89464 15.7071 8.70711C15.8946 8.51957 16 8.26522 16 8C16 7.73478 15.8946 7.48043 15.7071 7.29289C15.5196 7.10536 15.2652 7 15 7Z" fill="black"/>
    </svg>
    
    </div>
      )

      }


</div>

{active === t && 
  <div  className='career-list'  >
  {data?.filter(car =>car.carrerCategory === t).map(list =>
  
 <li onClick={()=> router.push(`/career/${list.slug}`)} key={list.id} > {list.carrer} </li>   
  )
  
  }
  </div>
}

    
   
     
     </div>
    
   )

   }




 

  </div>




  </div>
  )
}
