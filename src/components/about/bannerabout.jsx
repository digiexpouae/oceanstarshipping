import React from 'react'
import Image from 'next/image'
import aboutbanner from '../../../public/assets/Rectangle 34.png'
const bannerabout = () => {
  return (
   <div className="relative w-full h-[250px] md:!h-[600px] mb-3">
    <div className='absolute left-0 top-0 right-0 bottom-0'> <Image
        src={aboutbanner}
        layout="responsive"
        // height={200}
        // width={200}
        alt="Hero Banner"    className="h-[500px] md:!h-[550px]"
      /></div> 
      <div className='font-heading absolute left-[30px] md:left-[60px] z-40 text-white text-[19px] md:text-[50px] !h-[200px] md:!h-[500px] flex items-center' >ABOUT <br /> US</div>
      </div>
  )
}

export default bannerabout