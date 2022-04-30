  import About from '../components/aboutUs/Aboutus'
  import { NextSeo } from 'next-seo';
  export default function aboutus() {
    return (
      <>
        <NextSeo
      title="AboutUs - Pulse Play Digital"
      description=" AboutUs - Pulse Play Digital"
      canonical="https://www.canonical.ie/"
    
    />
      <About/>
      </>
    )
  }
