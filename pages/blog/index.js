import React from 'react'
import Blog from '../../components/blogs/Blog'
import client from "../../apollo/apollo-client";
import { gql } from "@apollo/client";
import Footer from '../../components/coman/Footer';
import { NextSeo } from 'next-seo';
import clientPromise from '../../utils/mongodb'
function blog({data}) {
  return (
      <>
          <NextSeo
      title={"Blog Pulse Play Digital "}
      description="Pulse Play Digital"
      canonical="https://www.canonical.ie/"
    
    />
    <Blog  data={data}  />
    <Footer/>
    </>
  )
}


export const getStaticProps = async (context) => {
 
  try {
    

    await clientPromise
         const client = await clientPromise
   const db =   await client.db("pulseplay-webiste")


    const data = await   db.collection('blogs').find().toArray()




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



export default blog