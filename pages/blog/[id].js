

import Navbar from '../../components/coman/Navbar';
import Blog from '../../components/blogs/blogProfile/Blob';
const prod = process.env.NODE_ENV === 'production'
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next'
import clientPromise from '../../utils/mongodb'
import { useRouter } from 'next/router'
import { gql } from "@apollo/client";
import client from "../../apollo/apollo-client";
import withapplo from '../../hoc/withapplo';
import Footer from '../../components/coman/Footer';
import { NextSeo } from 'next-seo';
const Home = ({data , blog}) => {

    const router = useRouter()
    const { id } = router.query



  return (
      <> <>
      <NextSeo
        title={data?.blogTitle}
        description="Pulse Play Digital"

      
      />
   
    </>
      
      <Navbar  />

      <Blog data={data} id={id} blog={blog} />

      <Footer/>
   
    </>
  )
}


export const getStaticPaths = async (context) => {
 
  try {
    


  


    await clientPromise
         const client = await clientPromise
   const db =   await client.db("pulseplay-webiste")


    const data = await   db.collection('blogs').find().toArray()


  


    const paths = data?.map(t => {
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


const data = await   db.collection('blogs').findOne({slug:id})

const blog = await   db.collection('blogs').find().toArray()



console.log(data)


if (!data) {
  return { notFound: true };
}
return { props: { 
  data:   JSON.parse(JSON.stringify(data)),
  blog:   JSON.parse(JSON.stringify(blog)),
  
 }, 

revalidate: 1, };
 

}


export default   withapplo(Home)
