import React from 'react'
import Image from 'next/image'
import heroban from '../../../public/assets/image.png'
const herobanner = () => {
  return (
    <>    <div className="relative w-full !h-[80px]">
    <Image
      src={heroban}
      layout="responsive"
      height={200}
      width={200}
      alt="Hero Banner"    className="!h-[620px]"
    />
  </div>
<div className="absolute bottom-95 left-30 z-20  leading-[1] ">
  <span className='text-white text-[30px] font-light leading-[2]'>EMPOWERING YOUR
  </span>
  <h1 className='text-white text-[50px] mb-8 font-heading font-bold leading-[1.2]'>WORLD WITH <br />
TECHNOLOGY</h1>
<button className='btn-white '>Contact us</button>
</div>
</>
  )
}

export default herobanner;
