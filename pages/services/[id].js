import React from 'react'
import Navbar from '../../components/coman/Navbar'   
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next'
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import ServiceDetail from '../../components/serviceDetail/ServiceDetail'
import { useRouter } from 'next/router';
import Footer from '../../components/coman/Footer';
import clientPromise from '../../utils/mongodb'
import withapplo from '../../hoc/withapplo';
import client from "../../apollo/apollo-client";
import { NextSeo } from 'next-seo';
function Servicedetail({data , ser}) {
  const router = useRouter()
  const { id } = router.query
  return (
    <>
            <NextSeo
      title={`${data?.servicesName} - "Pulse Play Digital`}
      description="Solutions - Pulse Play Digital"
      canonical="https://www.canonical.ie/"
    
    />
      <Navbar/>
         <ServiceDetail  id={id} data={data}  ser={ser}/>
         <Footer/>
    </>
  )
}

export const getStaticPaths = async (context) => {
 
    try {
      

  
    
  
      await clientPromise
      const client = await clientPromise
const db =   await client.db("pulseplay-webiste")


 const data = await   db.collection('services').find().toArray()


  
  
    
  
  
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


const data = await   db.collection('services').findOne({slug:id})

const ser = await   db.collection('services').find().toArray()
  
   
    return {
      props: {  data:   JSON.parse(JSON.stringify(data)),
        ser:   JSON.parse(JSON.stringify(ser)),
        
 
      revalidate: 1, 
    }
  }
  }

export default   withapplo(Servicedetail)