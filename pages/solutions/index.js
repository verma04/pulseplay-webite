import Navbar from '@components/coman/Navbar'
import  Solutions from '@components/solutions/solution'
import client from "../../apollo/apollo-client";
import clientPromise from '../../utils/mongodb'
import React from 'react'
import { NextSeo } from 'next-seo';
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
const prod = process.env.NODE_ENV === 'production'
const Service = ({data}) => {
  return (
      <>
            <NextSeo
      title="Solutions - Pulse Play Digital"
      description="Solutions - Pulse Play Digital"
      canonical="https://www.canonical.ie/"
    
    />
 <Navbar />
<Solutions data={data} />
    </>
  )
}

export const getStaticProps = async (context) => {
 
  try {
  
    


    await clientPromise
         const client = await clientPromise
   const db =   await client.db("pulseplay-webiste")


    const data = await   db.collection('solutions').find().toArray()




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


export default Service;