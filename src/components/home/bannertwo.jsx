import React from 'react'
import banner from '../../../public/assets/t.png'
import star from '../../../public/assets/Group 92.png'
import Image from 'next/image'
const bannertwo = () => {
  return (
    <div className='w-full flex items-center justify-center relative '>
      <Image  src={banner} width={1200} height={424}/>
      <div className='absolute z-[-10px] ri6ght-[10px] top-[-20px]'><Image src={star} width={280} height={265}/></div>
      <div className='absolute left-[70px] top-[10px] font-heading h-[180px] w-[475px] leading-15.5  text-primary'><h3 className='capitalize text-[50px]'>Get in
Touch For
Any Queries</h3></div>
    </div>
  )
}

export default bannertwo
