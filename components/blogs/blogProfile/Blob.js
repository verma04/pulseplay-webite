








import React from 'react'
import Banner from '../../coman/banner/Banner'
import { useQuery, gql } from "@apollo/client";
import { Section } from './Style'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Html from './html';
import axios from 'axios';

export default function Blob({data , id , blog}) {



  const [first, setfirst] = React.useState(null)

  const fetch = async () => {

  
    const  set = await axios.get("/api/team")
  



    const data = await set.data.find(set => set.slug === id)


 
    setfirst(data)


 
  } 

  React.useEffect(() => {
    fetch()
  }, [])
  

  


  
  return (
    <>
     <Banner cover={data?.blogAvatar}  text={""}  /> 
      
<Section>
<div className='flex' >

   <div className='flex-1' >


<h1>{data?.blogTitle}</h1>
       
{first === null ?
(
  null
)
:
(

  <>
   {JSON.parse(first?.blogDescriptionHtml).map(t => {

return (
<div key={t} >


{ Object.keys(t).length === 0 ?
(
  console.log("sds")
)
:
(
<p       dangerouslySetInnerHTML={{__html: t}} >

</p>
)

}

</div>
)
}
)

} 

  
  </>

)

}



</div> 


<div className='flex-2' >
    

 
     {blog?.filter(set => set?.slug !== id  ).map(t =>
        
        <div  key={t?.id} className='news-list' >



<Image
                            alt="Picture of the author"
                            objectFit="cover"
                            layout="fill" src={t?.blogAvatar}
                        />
  <p>{t?.blogTitle}</p>  

        </div>
     
     )

    

    }


    </div> 

</div>


</Section>


    </>
  )
}
