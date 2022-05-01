import React from 'react'
import Solutionsdetail from '../components/solutions/solutiondetail/SolutionDetail'
import Navbar from '../../components/coman/Navbar'
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next'
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import client from "../../apollo/apollo-client";
import Footer from '../../components/coman/Footer';
import clientPromise from '../../utils/mongodb'
import { NextSeo } from 'next-seo';
function solutionsdetail({data}) {
  return (
    <>
            <NextSeo
      title={`${data?.solutionsName} - "Pulse Play Digital`}
      description="Solutions - Pulse Play Digital"
      canonical="https://www.canonical.ie/"
    
    />
    
    <Navbar />
    <Solutionsdetail  data={data} />
    <Footer/>
    </>
  )
}


export const getStaticPaths = async (context) => {
 
    try {
      
  

  
    
  
  
  
      await clientPromise
      const client = await clientPromise
const db =   await client.db("pulseplay-webiste")


 const data = await   db.collection('solutions').find().toArray()



  
    
  
  
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


  
  



const data = await   db.collection('solutions').findOne({slug:id})
   
    return {
      props: {  data:   JSON.parse(JSON.stringify(data)),},
      revalidate: 1, 
    }
  }
export default solutionsdetail