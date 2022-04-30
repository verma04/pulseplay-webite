import React from 'react'
import Career from '../../components/career/career'
import withapplo from '@/hoc/withapplo'
import client from "../../apollo/apollo-client";
import { gql } from "@apollo/client";
import Footer from '../../components/coman/Footer';
import clientPromise from '../../utils/mongodb'
import { NextSeo } from 'next-seo';
function teams({data , team}) {
  return (
    <>
        <NextSeo
      title="Home"
      description="Pulse Play Digital"
      canonical="https://www.canonical.ie/"
    
    />
 
    <Career data={data} team={team} />
    <Footer/>

    </>
  )
}

export const getStaticProps = async (context) => {
 
  try {
    

    await clientPromise
         const client = await clientPromise
   const db =   await client.db("pulseplay-webiste")


    const data = await   db.collection('carrers').find().toArray()

    const team = await   db.collection('teammembers').find().toArray()




  return {
    props: {
      data:   JSON.parse(JSON.stringify(data)),
 
      team:   JSON.parse(JSON.stringify(team))
    
    },
    revalidate: 1,
  };
  } catch (error) {
    

    console.log(error)
  }


}

export default  withapplo(teams)