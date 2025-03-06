import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import blogimage from '../../public/assets/image (1).png'
import arrow from '../../public/assets/Vector (6).svg'
const blogs = ({Homepage}) => {
  const [show, setshow] = useState(true)
const blog_data=[{image:blogimage,release:'Press Release',date:'18 November 25', heading: (
  <>
    This is a Blog of Electronic <br /> Wholesale Appliances website  Appliances website
  </>
)},{image:blogimage,release:'Press Release' ,date:'20 November 25', heading: (
      <>
        This is a Blog of Electronic <br /> Wholesale Appliances website Appliances website
      </>
    )},{image:blogimage,release:'Press Release' ,date:'25 November 24', heading: (
      <>
        This is a Blog of Electronic <br /> Wholesale Appliances website Appliances website
      </>
    )},
    {image:blogimage,release:'Press Release' ,date:'25 November 24', heading: (
      <>
        This is a Blog of Electronic <br /> Wholesale Appliances website Appliances website
      </>
    )},
    {image:blogimage,release:'Press Release' ,date:'25 November 24', heading: (
      <>
        This is a Blog of Electronic <br /> Wholesale Appliances website Appliances website
      </>
    )}]
const filtereddata=Homepage?blog_data:blog_data.slice(0, 3);
  return (
    <>
  <div className=''>
    <h3 className=' text-[22px] text-primary md:text-[50px] underline mb-3 md:mb-8 font-heading font-bold text-center'>OUR BLOGS</h3>
    <div className={`w-full h-[200]  flex flex-col md:grid grid-cols-3 ${show?' grid-rows-1':'auto-rows-auto'} gap-3 place-items-center mb-4`}>
      {filtereddata.map((elem,index)=>{
         
         return <>
                

         <div className='flex flex-col bg-primary w-[250px] h-[282px] md:w-[300px] md:h-[390px] text-white '>
      <div className=' w-[250px] h-[100px] md:w-full md:h-[160px] relative'><Image src={elem.image} layout='fill' objectFit='cover' /></div>
      <div className="h-[182px] ]w-[288px] px-3 py-7">
        <div className='flex justify-between  font-thin text-[12px] md:text-[16px] '><div className='bg-white/10 px-3 py-1'>{elem.release}</div><div className='bg-white/10 px-3 py-1 '>{elem.date}</div></div>
        <div className='text-white truncate text-[14px] md:text-[20px] leading-8 md:w-[300px] h-[72px]'>{elem.heading}</div>
       <div className='flex items-center w-[101px] gap-[10px]'><button className='text-[14px]'>Read More</button><div><Link href=''><Image src={arrow}/></Link></div></div>
      </div></div></>})}
    </div>
   <div className='flex items-center justify-center w-full'> <button className='btn'><Link href='/'>View All Blogs</Link></button></div>
   </div>
    </>
  )
}

export default blogs
