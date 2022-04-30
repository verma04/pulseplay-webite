import React from 'react'
import Banner from '../../../components/coman/banner/Banner'
import {Section} from './style'
import Image from 'next/image'
import { useRouter } from 'next/router'

function Team({data}) {

  const router =  useRouter()
  return (
<>
<Banner  cover={'/teamView.png'} text={'We are PulsePlayers'} />

<Section>


    <div  className='teamView' >

        <div className="head">

            <span>Our Team</span>

      <p> We are PulsePlayers. We Imagine, Design, Build and Perform. We collaborate with brands, businesses to provide full 360 digital media and technology services to leverage the digital ecoystems for growth.</p> 
        </div>

        {data.map(t => 
           <div  onClick={() => router.push(`/team/${t.slug}`) }  key={t.id} className="team">


           <Image
                         alt="Picture of the author"
                         objectFit="cover"
                         layout="fill"
                         src={t.memberCover}
                       />
         
            </div>
        )

        }
   


      
  


      

    </div>

    <div className="bottom-banner">
        <h2>
        Let’s Image, Design, Build & Perform Together
        </h2>
        <p>Have a project or want to chat? Say hello@pulseplaydigital.com</p>

        
    
     <h3>What our clients / brands say <span>about us</span> </h3>
    </div>

</Section>
</>

    
  )
}

export default Team