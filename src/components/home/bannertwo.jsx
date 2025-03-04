import React from 'react'
import banner from '../../../public/assets/t.png'
import star from '../../../public/assets/Group 92.png'
import Image from 'next/image'
const bannertwo = () => {
  return (
    <div className='w-full flex items-center justify-center relative h-[300px] md:h-[424px]'>
     <div className='w-screen h-[200px] md:w-full md:h-[424px] absolute left-0 right-0 top-0 bottom-0'><Image  src={banner} layout='fill' objectFit='cover' /></div> 
      <Image src={star} width={280} height={265} className='absolute z-[-10] top-[-120px] right-[10px] '/>
      <div className='absolute left-[32px] top-[60px] md:left-[70px] md:top-[60px]  md:h-[284px] md:w-[475px] flex flex-col gap-[30px]'><h3 className='capitalize md:h-[180px] text-[22px] font-extrabold md:text-[50px] leading-5 md:leading-15.5 font-heading text-primary'>Get in
<br />Touch For
<br/>Any Queries</h3>
<button className='btn'>Contact us</button>
</div>
    </div>
  )
}

export default bannertwo
