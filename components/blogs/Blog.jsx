import React from 'react'
import { Section } from './Style'
import Image from 'next/image'
import Banner from '../coman/banner/Banner'
import Navbar from '../coman/Navbar'
import { useRouter } from 'next/router'

const Blog = ({ data }) => {

   const router =   useRouter()
    return (
        <>

        <Navbar/>

        <Banner text="Blog"   cover="/blog.png"/>
      
        <Section>

            <div className="banner">



                <div className="text">

                    <div className="head">
                        <h1 id="head" >
                           
                        </h1>
                    </div>
                </div>
            </div>


            <div className="blog-btn-container">
                <div className="container">
                    <div className="btn-flex">
                        <button className="flex-btn" id="yellow">D2C</button>
                        <button className="flex-btn">E-Commerce</button>
                        <button className="flex-btn">Performance Marketing</button>
                        <button className="flex-btn">SEO</button>
                        <button className="flex-btn">Startups and Enterprenueurship</button>
                    </div>
                </div>
            </div>
            {data.map(t => 
             <div    key={t.key} className="blogs-container">
                <div onClick={() => router.push(`/blog/${t.slug}`) } className="container">

                    <div   className="blogs-content">
                       

                        <Image
                            alt="Picture of the author"
                            objectFit="cover"
                            layout="fill" src={t.blogAvatar}
                        />

                        <p>{t.blogTitle}</p>


                    </div>
                 
                </div>
            </div>
            )
}
         
        </Section>

        </>
    )
}

export default Blog