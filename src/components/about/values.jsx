import React from 'react'
import Image from 'next/image'
import img from '../../../public/assets/Rectangle 35.png'
const values = () => {
  return (
<div className='md:h-[580px] w-full flex justify-center'>
<div className='h-[470px] flex justify-center gap-7 md:h-[470px] w-[280px] md:w-[600px] lg:w-full px-[20px] md:px-[30px]'>
 <div className='flex flex-col h-full justify-center gap-3'> 
  <h3 className='text-primary font-heading text-[23px] md:text-[45px]'>CORE VALUES:</h3>
  <ul className=' text-[17px] md:text-[25px] list-disc  md:h-[357px] flex flex-col justify-center'>  <li className='font-bold text-primary'>Integrity</li><p className=' text-[12px] md:text-[16px]'>We conduct our business with honesty and transparency.</p>
    <li  className='font-bold text-primary'>Innovation</li><p className=' text-[12px] md:text-[16px]'>We embrace technology and innovation to stay ahead in a competitive market.</p>
    <li  className='font-bold text-primary'>Customer Focus</li><p className=' text-[12px] md:text-[16px]'>We prioritize our clients’ needs and strive to deliver the best possible experience.</p>
    <li  className='font-bold text-primary'>Sustainability</li><p className=' text-[12px] md:text-[16px]'>We promote eco-friendly products and practices to contribute to a greener future.</p>
    </ul>
    </div>
<div className='hidden md:flex lg:h-[470px] lg:w-[470px] relative mb-4'><Image src={img} layout='fill' objectFit='cover' /></div>

</div>
{/*border  */}
{/* <div className='border border-gray-400
'></div> */}
</div>
  )
}

export default values