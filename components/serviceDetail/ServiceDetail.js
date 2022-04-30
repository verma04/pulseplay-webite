import React from "react";
import { Section } from "./Style";
import Image from "next/image";
import Banner from "../coman/banner/Banner";

import { useQuery, gql } from "@apollo/client";
import withApplo from "../../apollo/withApplo";

const array = ["#FFCC06" , "#00A551;"  , "#33C5F4"   , "#E125F8" ]
function Servicedetail({ data , id , ser }) {


 

const string = data?.servicesName.replace(/\s+/g, '<br/>')

const color = array[Math.floor(Math.random() * array.length)]

  return (
    <>
   

    

      <Section>
      <div style={{backgroundColor:  color   }}  className="banner">
  


  <div className="text">

      <div  dangerouslySetInnerHTML={{__html:  `<h1>  ${string} </h1>`  }} className="head">

</div>
</div>
</div>
        <div className="flex">
          <div className="section-left">
 
 <div  className="serivce-list" >

<div   className="head" >
<h2>All Services</h2>

</div>
<ul>
  {ser?.map(t =>
  <li  key={t?._id} id={t?.slug === id  ? "active" : ''} >
  <p  >{t?.servicesName}</p> 
  </li>
  )

  }





</ul>
 

 </div>

 <video style={{marginBottom:"2rem"}} src={data?.servicesVideo} />




          </div>

          <div className="section-right">
            <div className="section-para">
              <h2>{data?.servicesHeading1}</h2>
              <div className="para" dangerouslySetInnerHTML={{ __html: data?.servicesPara1 }} />
            </div>

            <div className="section-two">
              <div className="section-two-left">

              <div className="wrapper">    

              <Image
                alt="Picture of the author"
                objectFit="cover"
                layout="fill"
                src={data?.servicesCover}
              />
              </div>

   


              </div>

              <div className="section-two-right">
                <h2>Capabilities</h2>
                {data?.capabilities.map((t) => (
                  <li key={t.label}>{t.label}</li>
                ))}
              </div>
            </div>

            <div className="section-para">
              <h2>{data?.servicesHeading2}</h2>
              <div className="para" dangerouslySetInnerHTML={{ __html: data?.servicesPara1 }} />
            </div>
          </div>
        </div>

        <div className="contact">
          <div className="contact-detial">
            <div className="contact-left">
              <h3>Whether you have a brief or just an idea, we can chat </h3>
            </div>

            <div className="contact-right">
              <li>+91 91751 00108</li>
              <div className="button">
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 26 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21.9908 24.8012L23.4717 20.241C23.649 19.7605 23.4274 19.2 22.9547 18.9332L18.1304 16.3469C17.6985 16.1288 17.1945 16.22 16.85 16.5506L14.3737 19.0848C11.1135 17.1765 8.49591 14.1067 7.14529 10.4714L10.0707 8.47249C10.4561 8.19053 10.6334 7.71 10.4935 7.24684L8.78368 2.04691C8.60296 1.53509 8.0855 1.26438 7.58542 1.31085L2.8374 1.97798C2.3334 2.0692 1.98493 2.44457 1.93798 2.98159C0.936392 14.4379 9.3861 24.556 20.8872 25.5615C21.3794 25.6045 21.8135 25.2817 21.9908 24.8012Z"
                    fill="white"
                  />
                </svg>

                <span>Call us</span>
              </div>
            </div>
          </div>
        </div>

      

        <div className="expert">
          {/* dssd
                <Expert/> */}
        </div>
      </Section>
    </>
  );

  
}


export default  withApplo(Servicedetail)

