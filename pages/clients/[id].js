import React from 'react'
import Client from '../../components/testmonails/view'
import clientPromise from '../../utils/mongodb'
const prod = process.env.NODE_ENV === 'production'
import { gql } from "@apollo/client";
import client from "../../apollo/apollo-client";
import Navbar from '../../components/coman/Navbar';
import Footer from '../../components/coman/Footer';
import { NextSeo } from 'next-seo';
export default function inde({data}) {


  return (
    <>
           <NextSeo
      title={`  ${data?.testimonialName}  -Pulse Play Digital `}
      description="Pulse Play Digital"
      canonical="https://www.canonical.ie/"
    
    />
    <Navbar/>

      
      <Client data={data} />
      <Footer/>
      </>
  )
}


export const getStaticPaths = async (context) => {
 
  try {
    



  


    await clientPromise
         const client = await clientPromise
   const db =   await client.db("pulseplay-webiste")


    const data = await   db.collection('clients').find().toArray()



  


    const paths = data.map((t) => {
      return {
        params: { id: t.slug }
      }
    })

    console.log(paths)
    
    return {
      paths,
      fallback: true
    }
  } catch (error) {
    

    console.log(error)
  }



}

export const getStaticProps = async (context) => {
   

  const id = context.params.id;
  await clientPromise
         const client = await clientPromise
   const db =   await client.db("pulseplay-webiste")


    const data = await   db.collection('clients').findOne({slug:id})

  

  


 
 
  return {
    props: { data: JSON.parse(JSON.stringify(data)),},
    revalidate: 1, 
  }
}

