import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import blogimage from '../../../public/assets/image (1).png'
import arrow from '../../../public/assets/Vector (6).svg'
const blogs = () => {
const blog_data=[{image:blogimage,release:'Press Release',date:'18 November 25',heading:'This is a Blog of Electronic Wholesale Appliances website',link:''},{image:blogimage,release:'Press Release' ,date:'20 November 25',heading:'This is a Blog of Electronic Wholesale Appliances website',link:''},{image:blogimage,release:'Press Release' ,date:'25 November 24',heading:'This is a Blog of Electronic Wholesale Appliances website',link:''}]


  return (
    <>
  <div className='h-[622px]'>
    <h3 className=' text-[22px] text-primary md:text-[50px] underline mb-3 md:mb-8 font-heading font-bold text-center'>OUR BLOGS</h3>
    <div className='w-full h-[200] grid grid-cols-3 gap-3 place-items-center mb-4'>
      {blog_data.map((elem,index)=>{
         
         return <>
                

         <div className='flex flex-col bg-primary w-[348px] h-[402px] text-white '>
      <div className=''><Image src={elem.image} width={348} height={160} objectFit='cover' /></div>
      <div className="h-[182px] ]w-[288px] px-3 py-7">
        <div className='flex justify-between  font-thin text-[16px] '><div className='bg-white/10 px-3 py-1'>{elem.release}</div><div className='bg-white/10 px-3 py-1 '>{elem.date}</div></div>
        <div className='text-white truncate text-[20px] leading-8 w-[310px] h-[72px]'>{elem.heading}</div>
       <div className='flex items-center w-[101px] gap-[10px]'><button className='text-[14px]'><Link href=''>Read More</Link></button><div><Image src={arrow}/></div></div>
      </div></div></>})}
    </div>
   <div className='flex items-center justify-center w-full'> <button className='btn'><Link href='/'>View All Blogs</Link></button></div>
   </div>
    </>
  )
}

export default blogs
