
import Navbar from '../../components/coman/Navbar'   
import Careers from '../../components/career/careerList/Careers'
import client from "../../apollo/apollo-client";
import { gql } from "@apollo/client";
import { NextSeo } from 'next-seo';
import Footer from '../../components/coman/Footer';
import clientPromise from '../../utils/mongodb'
function careers({data , team}) {
  return (
    <div>
          <NextSeo
      title={`${data?.carrer} Pulse Play Digital`}
      description="Pulse Play Digital"
      canonical="https://www.canonical.ie/"
    
    /> 
 
        <Navbar />

       <Careers  data={data}  team={team}/>

        <Footer/>
    </div>
  )
}

export const getStaticPaths = async (context) => {
 
    try {
      
  
  
  
    
      await clientPromise
      const client = await clientPromise
const db =   await client.db("pulseplay-webiste")


 const data = await   db.collection('carrers').find().toArray()
  
  
    
  
  
      const paths = data.map((t) => {
        return {
          params: { id: t.slug }
        }
      })
  

      
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


    const data = await   db.collection('carrers').findOne({slug:id})

    const team = await   db.collection('teammembers').find().toArray()
    
    
  
    
   console.log(data)

    
    
 
   
    return {
      props: { 
        data:   JSON.parse(JSON.stringify(data)),
 
        team:   JSON.parse(JSON.stringify(team))

      },
      revalidate: 1, 
    }
  }

export default careers