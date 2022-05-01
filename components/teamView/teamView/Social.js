import React from 'react'
import Image from 'next/image'
import Link from 'next/link';  
export default function Social({data}) {
  return (

    <div className='social' >

{data?.linkedin && 
<li>
     <Link href={data?.linkedin} passHref={true}>
<Image
                alt="linkedin.png"
                objectFit="contain"
                layout="fill"
                src={'/linkedin.png'}
              />


</Link>

</li>
}




{data?.instagram && 
<li>
   <Link href={data?.instagram} passHref={true}>

 <Image
                 alt="Picture of the author"
                 objectFit="contain"
                 layout="fill"
                 src={'/instagram.png'}
               />
               </Link>
               </li>
 
}


{data?.twitter && 

<li>
<Link href={data?.twitter} passHref={true}>
<Image
                alt="Picture of the author"
                objectFit="contain"
                layout="fill"
                src={'/twitter.png'}
              />


</Link>
</li>
}

{data?.medium && 
<li>
    <Link href={data?.medium} passHref={true}>
<Image
                alt="Picture of the author"
                objectFit="contain"
                layout="fill"
                src={'/medium.png'}
              />
</Link>
</li>

}
{data?.snapchat && 
<li>
  <Link href={data?.snapchat} passHref={true}>


<Image
                alt="Picture of the author"
                objectFit="contain"
                layout="fill"
                src={'/snapchat.png'}
              />
</Link>
</li>
}





    </div>
  )
}
