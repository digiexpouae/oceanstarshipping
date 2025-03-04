import React from 'react'
import banner from '../../../public/assets/t.png'
import star from '../../../public/assets/Group 92.png'
import Image from 'next/image'
const bannertwo = () => {
  return (
    <div className='w-full flex items-center justify-center relative '>
      <Image  src={banner} width={1200} height={424}/>
      <Image src={star} width={280} height={265} className='absolute z-[-10] top-[-120px] right-[10px] '/>
      <div className='absolute left-[70px] top-[60px]  h-[284px] w-[475px] flex flex-col gap-[30px]'><h3 className='capitalize h-[180px] text-[50px] leading-15.5 font-heading text-primary'>Get in
Touch For
Any Queries</h3>
<button className='btn'>Contact us</button>
</div>
    </div>
  )
}

export default bannertwo
