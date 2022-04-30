
import Navbar from '../../components/coman/Navbar';
import Team from '@components/teamView/allTeam/Team';
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
const prod = process.env.NODE_ENV === 'production'
import client from "../../apollo/apollo-client";
import clientPromise from '../../utils/mongodb'
import { NextSeo } from 'next-seo';
const endpoint = prod ? 'https://artofwearing.com/graphql' : 'http://43.204.5.144/graphql'
const Home = ({data}) => {




  return (
      <>
        <NextSeo
      title="Team - Pulse Play Digital"
      description="Pulse Play Digital"
 
    
    />
      <Navbar/>
    <Team  data={data}/>
    </>
  )
}

export const getStaticProps = async (context) => {
 
  try {
    

    await clientPromise
         const client = await clientPromise
   const db =   await client.db("pulseplay-webiste")


    const data = await   db.collection('teammembers').find().sort({memberDateOfJoinnng:1}).toArray()




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
