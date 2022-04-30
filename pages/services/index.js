
import Services from '../../components/ourservices/Services'
import React from 'react'
import clientPromise from '../../utils/mongodb'
import { NextSeo } from 'next-seo';

import { gql } from "@apollo/client";
import client from "../../apollo/apollo-client";
import Footer from '../../components/coman/Footer';
const Home= ({data}) => {


  return (
      <>
           <NextSeo
      title="Services - Pulse Play Digital"
      description="Services - Pulse Play Digital"
      canonical="https://www.canonical.ie/"
    
    />
     
    <Services data={data} />

    <Footer/>

    </>
  )
}




export const getStaticProps = async (context) => {
 
  try {
  
    


    await clientPromise
         const client = await clientPromise
   const db =   await client.db("pulseplay-webiste")


    const data = await   db.collection('services').find().toArray()




  return {
    props: {
      data:   JSON.parse(JSON.stringify(data)),

    
    },
    revalidate: 1,
  };


  } catch (error) {
    

    console.log(error)
  }


}


export default Home