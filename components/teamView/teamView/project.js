import React from 'react'
import Image from 'next/image'
import { useQuery, gql } from "@apollo/client";
export default function Project({data}) {

    const QUERY = gql`
    query GetProjectById($id: ID) {
      getProjectById(id: $id) {
        projectName
        projectCover
        projectLogo
      }
    }`
    
 
    
    const { loading, error, data:data1 } = useQuery(QUERY, {
        variables: { id: data?.id  },
      });
    
  
      if(loading) {
          return null
      }

  return (
    <div className="work">
      {data1.getProjectById.length === 0 ?

      (
        null
      )
      :
      (
        <>
        
        <div className="heading">
      <h2>Work</h2>
    </div>
  
    <div className="work-list">
  
  
  
  
  <div className="list">

      {data1.getProjectById.map(set => 
        <div  key={set.id} className="data">
        <Image
                        alt="Picture of the author"
                        objectFit="cover"
                        layout="fill"
                        src={set?.projectLogo}
                      />
        </div>
      )

      }
  


  
  </div>
  
  
    </div>
    
        </>

      )

      }
  
  
  
          </div>
  
  )
}
