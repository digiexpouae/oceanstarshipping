import React from 'react'
import Image from 'next/image'
import headphones from '../../../public/assets/headphone.png'
import mobilephone from '../../../public/assets/pngegg.png'
import tablets from '../../../public/assets/pngegg (1).png'
import LED from '../../../public/assets/Led.png'
import playstation from '../../../public/assets/erasebg-transformed.png'
import Link from 'next/link'
const products = () => {
    const images=[{image:headphones,link:'/',title:'Headphones'},{image:mobilephone,link:'/',title:'Mobile phones'},{image:tablets,link:'/',title:'Tablets'},
        {image:LED,link:'/',title:'LED'},{image:playstation,link:'/',title:'Other Accessorries'}]
  return (
    <section>
    <div className='h-full'>
        <h3 className=' text-[22px] text-primary md:text-[50px] underline mb-3 md:mb-8 font-heading font-bold text-center'>PRODUCTS</h3>
      <div className=' flex flex-col lg:grid lg:grid-cols-3 gap-3 place-items-center'>
        {images.map((elem,index)=>{
       return <div key={index} className='h-[270px] w-[280px] md:h-[333px] md:w-[300px] bg-[#F6F6F6] flex flex-col justify-center items-center'><Image src={elem.image}  />
<Link href={elem.link} className='text-center md:text-start'>{elem.title}</Link>
       </div>
})}
    </div>
    </div>
    </section>
  )
}

export default products
