

import Navbar from '../../components/coman/Navbar';
import Client from '../../components/client/clients';
import { gql } from "@apollo/client";
import client from "../../apollo/apollo-client";
import Footer from '../../components/coman/Footer';
import clientPromise from '../../utils/mongodb'
import { NextSeo } from 'next-seo';
const Home = ({data}) => {



  console.log(data)


  return (
      <>
            <NextSeo
      title={`Case Studies-Pulse Play Digital `}
      description="Pulse Play Digital"
      canonical="https://www.canonical.ie/"
    
    />
      <Navbar  />
    <Client data={data} />
  <Footer/>
    </>
  )
}

export const getStaticProps = async (context) => {
 
  try {
  
    


    await clientPromise
         const client = await clientPromise
   const db =   await client.db("pulseplay-webiste")


    const data = await   db.collection('clients').find().toArray()




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
