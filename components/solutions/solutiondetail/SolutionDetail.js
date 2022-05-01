import React from 'react'
import { Section } from './style'
import Image from 'next/image'
import Banner from '../../coman/banner/Banner'
function Solutionsdetail({data}) {

  return (
    <>
  <Banner cover={data?.solutionsCover}  text={data?.solutionsName} />
    <Section>
      
      <div className="block-pulseplay">
        <div className="container">

          <div className="blocks-pulseplay">
            

            {data?.list.map(t => 
             <div key={t.id} className="pulse-block">

<div  className="pulse-icon" >
        <Image
            alt="handshake"
            objectFit="contain"
            layout="fill"
            src={t.logo}
          />
        


    </div>
           

             <h2>{t.head}</h2>
           
           </div>
            )

            }
           
          
          </div>

        </div>
      </div>


      <div className="section-content">
          

          <div className="section-two">
            <div className="section-two-left">

            <div className="wrapper">    

            <Image
              alt="Picture of the author"
              objectFit="cover"
              layout="fill"
              src={data?.solutionsImg1}
            /> 
            </div>

   


            </div>

             <div className="section-two-right">
              <h2>Capabilities</h2>
              {data?.paraList.map((t) => (
                <li key={t.label}>{t.label}</li>
              ))}
            </div> 
          </div>

          <div className="section-para">
            <h2>{data?.solutionsHeading2}</h2>
            <div className="para" dangerouslySetInnerHTML={{ __html: data?.solutionsPara1 }} />
          </div>
        </div>

    
   

  
    
  </Section >

    
    </>
  )
}

export default Solutionsdetail