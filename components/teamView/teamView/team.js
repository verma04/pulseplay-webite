import React from 'react'
import {Section} from './Style'
import Image from 'next/image'
import Blob from '@/svg/blob'
import Blob2 from '../../../svg/blob2'
import Blob3 from '../../../svg/blob3'
import Blob4 from '../../../svg/blob4'
import { Line, Circle } from 'rc-progress';
import Star from '../../../svg/star'
import Heart from '../../../svg/Heart'
import Certificate from '../../../svg/certificate'
import Social from './Social'
import Education from '../../../svg/education'
import About from './about'
import withApplo from '../../../apollo/withApplo'
import withapplo from '@/hoc/withapplo'
import Project from './project'
import { useQuery, gql } from "@apollo/client";
 function Team({data}) {





  return (
    <Section>

   
  
   <div className="banner">

   <div className='bg-img' >


       
     </div>

   <div className="banner-right">
   <About/>
   

     <div className="head">
       <h1 id="head" >{data?.memberName}</h1>

       <h3>{data?.memberDesignation}</h3>

     </div>
          
              </div>

              <div className="banner-left">
              <Image
                alt="Picture of the author"
                objectFit="contain"
                layout="fill"
                src={data?.memberAvatar}
              />

              <Social  data={data?.social} />


              </div>
           
        </div>

        <div className="description">

          <div className="description-left">
<h2>About</h2>
<div className='para' dangerouslySetInnerHTML={{__html: data?.memberDescription}} />


          </div>

          <div className="description-right">
            <h2>PulsePlayer</h2>
    

   
    <div className="line">
      <h3>Imagine</h3>
    <Line  style={{width:"80%"}} percent={data?.rating.imagine} strokeWidth="1" strokeColor="#FFCC06" />
    </div>

    <div className="line">
      <h3>Design</h3>
    <Line  style={{width:"80%"}} percent={data?.rating.design} strokeWidth="1" strokeColor="#00A551" />
    </div>
    <div className="line">
      <h3>Build</h3>
    <Line  style={{width:"80%"}} percent={data?.rating.build} strokeWidth="1" strokeColor="#33C5F4" />
    </div>
    <div className="line">
      <h3>Perform</h3>
    <Line  style={{width:"80%"}} percent={data?.rating.perform} strokeWidth="1" strokeColor="#9856A0" />
    </div>
    </div>

            
     
          
        </div>


        <div className='dream' >

{data?.dreams.length === 0 ?
(
  null
) :
(

  <div className='list' >


  <div className='img-wrapper' >


  </div>


<div className='data' >

<div className='list-left' >

  
Dreams

</div>


<div className='list-right' >



{data?.dreams.map(t =>
<p key={t} >{t} </p>

)

}


</div>
</div>




 
</div>
)

}
   
{data?.interest.length === 0 ? 
(
 null
):
(
<div className='list' >


<div className='img-wrapper' >


</div>





  <div className='data' >

<div className='list-left' >


Interest

</div>


<div className='list-right' >



{console.log(data?.interest)}
{data?.interest.map(t =>
<p key={t} >{t} </p>
 
)

}

</div>
</div>









</div>
)
 }

{data?.certificate.length === 0 ? 
(
 null
):
(
<div className='list' >


<div className='img-wrapper' >


</div>


<div className='data' >

<div className='list-left' >


Certification

</div>


<div className='list-right' >
  {data?.certificate.map(t =>
<p key={t} >{t} </p>
 
)

}
  




</div>
</div>





</div>

)
 }

{data?.education === '' ?  (
  null
) : (
       <div className='list' >


            <div className='img-wrapper' >

            </div>


<div className='data' >

<div className='list-left' >

            
Education
 
</div>

<div className='list-right' >
  <p>{data?.education}</p>

 
</div>
</div>


   

           
          </div>
)
 }




        </div>


{/* <Project data={data} /> */}

      
        {/* <div className="memories">
  
  <div className="heading">
    <h2>Memories</h2>
  </div>

  <div className="work-list">




<div className="list">

<div className="data">
<Image
                alt="Picture of the author"
                objectFit="cover"
                layout="fill"
                src={'/teamView.png'}
              />
</div>
<div className="data">
<Image
                alt="Picture of the author"
                objectFit="cover"
                layout="fill"
                src={'/teamView.png'}
              />
</div>
<div className="data">
<Image
                alt="Picture of the author"
                objectFit="cover"
                layout="fill"
                src={'/teamView.png'}
              />
</div>

<div className="data">
<Image
                alt="Picture of the author"
                objectFit="cover"
                layout="fill"
                src={'/teamView.png'}
              />
</div>
<div className="data">
<Image
                alt="Picture of the author"
                objectFit="cover"
                layout="fill"
                src={'/teamView.png'}
              />
</div>
<div className="data">
<Image
                alt="Picture of the author"
                objectFit="cover"
                layout="fill"
                src={'/teamView.png'}
              />
</div>
<div className="data">
<Image
                alt="Picture of the author"
                objectFit="cover"
                layout="fill"
                src={'/teamView.png'}
              />
</div>

</div>


  </div>
  

        </div> */}

    </Section>
  )
}


export default  withApplo(Team)