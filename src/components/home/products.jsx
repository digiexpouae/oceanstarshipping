import React from 'react'
import Image from 'next/image'
import headphones from '../../../public/assets/headphone.png'
import mobilephone from '../../../public/assets/pngegg.png'
import tablets from '../../../public/assets/pngegg (1).png'
import LED from '../../../public/assets/Led.png'
import playstation from '../../../public/assets/erasebg-transformed.png'
import arrow from '../../../public/assets/Vector (6).svg'

import Link from 'next/link'
const products = () => {
    const images=[{image:headphones,link:'/',title:'Headphones'},{image:mobilephone,link:'/',title:'Mobile phones'},{image:tablets,link:'/',title:'Tablets'},
        {image:LED,link:'/',title:'LED'},{image:playstation,link:'/',title:'Other Accessorries'}]
  return (
    <div className='h-full'>
        <h3 className=' text-[22px] text-primary md:text-[50px] underline mb-3 md:mb-8 font-heading font-bold text-center'>PRODUCTS</h3>
      <div className=' flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 gap-3 place-items-center w-full'>
        {images.map((elem,index)=>{
       return <div className=' bg-[#F6F6F6] w-[300px] h-[260px]  xl:w-[380px] lg:h-[333px]  flex flex-col justify-center items-center'> 
       <div key={index} className='h-[80%] w-[220px]  md:w-[270px] xl:w-[268px] flex flex-col justify-center items-center'><Image src={elem.image}/> </div>
<Link href={elem.link} className='text-start h-[20%] md:text-start w-full px-[8px] text-primary text-start flex items-center font-bold' >{elem.title}</Link>

       </div>
})}
    </div>
    </div>
  )
}

export default products
