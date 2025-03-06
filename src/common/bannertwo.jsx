import React from 'react'
import poster from '../../public/assets/t.png'
import star from '../../public/assets/Group 92.png'
import Image from 'next/image'
const bannertwo = () => {
  return (
    <div className='w-full flex items-center justify-center relative h-[125px] md:h-[330px] xl:h-[408px]'>
<div className='w-[90%] relative '><Image  src={poster} layout='responsive' /></div> 
      <Image src={star} width={280} height={265} className='absolute z-[-10] top-[-120px] right-[10px] '/>
 <div className='absolute left-[37px]  md:left-[12%]  md:h-[200px] md:w-[475px] flex flex-col md:gap-[10px] lg:gap-[30px]'><h3 className='uppercase text-[14px] font-extrabold  md:text-[30px] lg:text-[45px] leading-5 md:leading-9 lg:leading-13 font-heading text-primary'>Get in
<br />Touch For
<br/>Any Queries</h3>
<button className='btn'>Contact us</button>
</div>
    </div>
  )
}

export default bannertwo
