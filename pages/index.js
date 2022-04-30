
import { gql, useQuery } from '@apollo/client';
import { detect }  from 'detect-browser';
import axios from 'axios'
import {useState,useEffect} from 'react'
import IP from '../components/IP';
import Navbar from '../components/coman/Navbar';
import HomePage from '../components/Home/Mobile/mobile';
import Services from '../components/Home/services/Services'
import Clients from '../components/Home/clients/Clients'
import clientPromise from '../utils/mongodb'
import client from "../apollo/apollo-client";
import Team from '../components/Home/teams/Team';
import Contactus from '../components/Home/contactus/Contactus';
import HomeStyle from '../components/coman/Home'
import { NextSeo } from 'next-seo';
import { BrowserView, MobileView, isBrowser, isMobile , isDesktop } from 'react-device-detect';
const Home  = ({data , clients}) => {



  const browser = detect();

  const [ip, setIP] = useState('');
  const [first, setFirst] = useState(false);

 
 



  return (
    <>
 <>
    <NextSeo
      title="Home"
      description="Pulse Play Digital"
      canonical="https://www.canonical.ie/"
    
    />
 
  </>
<Navbar/>
{isDesktop && 

<div className="outer-wrapper">
<div
className="inner-wrapper"
>


<Services/>


<Team data={data} />
 <Clients data={clients}  /> 

<Contactus/>
</div>
</div>

}

{isMobile && 
<>
    {!first && 
      <HomePage setFirst={setFirst} />
    }

{first && 
<>

<Services/>
<Team data={data} />
<Clients data={clients}/>

<Contactus/>



</>

}
</>
}






    </>
  )
}

export const getStaticProps = async (context) => {
 
  try {
    

    await clientPromise
         const client = await clientPromise
   const db =   await client.db("pulseplay-webiste")


    const data = await   db.collection('teammembers').find().sort({memberDateOfJoinnng:1}).toArray()
    const clients = await   db.collection('clients').find().toArray()



  return {
    props: {
      data:   JSON.parse(JSON.stringify(data)),
      clients:  JSON.parse(JSON.stringify(clients)),

    
    },
    revalidate: 1,
  };
  } catch (error) {
    

    console.log(error)
  }


}


export default Home
