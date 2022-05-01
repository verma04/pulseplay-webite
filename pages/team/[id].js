

import Navbar from '../../components/coman/Navbar';
import Team from '../../components/teamView/teamView/team';
const prod = process.env.NODE_ENV === 'production'
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next'
import { NextSeo } from 'next-seo';
import clientPromise from '../../utils/mongodb'
import { gql } from "@apollo/client";
import client from "../../apollo/apollo-client";
import Footer from '../../components/coman/Footer';

const Home = ({data}) => {





return (
    <>
        <NextSeo
      title={data?.memberName}
      description="Pulse Play Digital"
 
    
    />
    <Navbar/>
  <Team data={data} />

  <Footer/>
  </>
)
}


export const getStaticPaths = async (context) => {

try {
  


  await clientPromise
  const client = await clientPromise
const db =   await client.db("pulseplay-webiste")




  const data = await   db.collection('teammembers').find().toArray()





  const paths = data.map(t => {
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
  

  console.log(error  , "dsdsd")
}



}

export const getStaticProps = async (context) => {

const id = context.params.id;


await clientPromise
const client = await clientPromise
const db =   await client.db("pulseplay-webiste")


const data = await   db.collection('teammembers').findOne({slug:id})



if ( !data) {
return { notFound: true };
}
return { props: {    data:   JSON.parse(JSON.stringify(data)), }, 

revalidate: 1, };


}


export default Home
