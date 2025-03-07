import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import blogimage from '../../public/assets/image (1).png'
import arrow from '../../public/assets/Vector (6).svg'
import heroimage from '../../public/assets/Rectangle 34 (2).png'

export const blog_data=[{id:'1',image:blogimage,release:'Press Release',date:'18 November 25', heading: (
  
  '  This is a Blog of Electronic  Wholesale Appliances website  Appliances website'

)},{id:'2',image:blogimage,release:'Press Release' ,date:'20 November 25', heading: (

       ' This is a Blog of Electronic Wholesale Appliances website Appliances website'
    
    )},{id:'3',image:blogimage,release:'Press Release' ,date:'25 November 24', heading: (
      
      '  This is a Blog of Electronic  Wholesale Appliances website Appliances website'
      
    )},
    {id:'4',image:blogimage,release:'Press Release' ,date:'25 November 24', heading: (
    
        'This is a Blog of Electronic  Wholesale Appliances website Appliances website'
    )},
    {id:'5',image:blogimage,release:'Press Release' ,date:'25 November 24', heading: (
        'This is a Blog of Electronic  Wholesale Appliances website Appliances website'
    )}]


const blogs = ({Homepage}) => {
  const [show, setshow] = useState(true)
const filtereddata=Homepage?blog_data:blog_data.slice(0, 3);
  return (
    <>
    <div className='h-[200]  flex flex-col lg:grid lg:grid-cols-3 place-items-center'>
      {filtereddata.map((elem)=>{
         
         return <div key={elem.id}>
                

         <div className='flex flex-col bg-primary w-[250px] h-[282px] md:w-[300px] md:h-[390px] text-white  mb-4'>
      <div className=' w-[250px] h-[100px] md:w-full md:h-[160px] relative'><Image src={elem.image} layout='fill' objectFit='cover' /></div>
      <div className="h-[182px] ]w-[288px] px-3 py-7">
        <div className='flex justify-between  font-thin text-[12px] md:text-[16px] '><div className='bg-white/10 px-3 py-1'>{elem.release}</div><div className='bg-white/10 px-3 py-1 '>{elem.date}</div></div>
        <div className='text-white truncate text-[14px] md:text-[20px] leading-8 md:w-[300px] h-[72px]'>{elem.heading}</div>
       <div className='flex items-center w-[101px] gap-[10px]'><button className='text-[14px]'>Read More</button><div><Link href={`/blogs/${elem.id}`}><Image src={arrow}/></Link></div></div>
      </div></div></div>})}
    </div>
    </>
  )
}

export default blogs
