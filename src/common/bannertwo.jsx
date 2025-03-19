import React from 'react'
import poster from '../../public/assets/t.png'
import star from '../../public/assets/Group 92.png'
import Image from 'next/image'
import Link from 'next/link'
const bannertwo = () => {
  return (
    <div className='w-full flex items-center justify-center relative h-[125px] md:h-[330px] xl:h-[408px]'>
<div className='absolute z-[-10]  top-[-50%] md:top-[-30%] lg:top-[-40%]  xl:top-[-35%]   right-[1%] '>      
<div className='h-[100px] w-[120px] md:h-[280px] md:w-[265px] relative'><Image src={star} layout='intrinsic' /></div></div>
<div className='w-[85%] relative '><Image  src={poster} layout='responsive' /></div>   
 <div className='absolute left-[10%]  md:left-[10%]  md:w-[475px] flex flex-col md:gap-[10px] lg:gap-[30px]'><h3 className='uppercase text-[14px] font-extrabold  md:text-[27px] lg:text-[45px] leading-5 md:leading-9 lg:leading-13 font-heading text-primary'>Get in
<br />Touch For
<br/>Any Queries</h3>
<button className='btn'><Link href='/contact'>Contact us</Link></button>
</div>
    </div>
  )
}

export default bannertwo
