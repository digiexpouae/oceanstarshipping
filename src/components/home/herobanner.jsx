import React from 'react'
import Image from 'next/image'
import heroban from '../../../public/assets/image.png'
const herobanner = () => {
  return (
    <>  
  <div className="relative w-full h-[250px] md:!h-[600px] mb-3 md:flex flex-col justify-center">
  <div className='absolute left-0 top-0 right-0 bottom-0'> <Image
      src={heroban}
      layout="responsive"
      // height={200}
      // width={200}
      alt="Hero Banner"    className="!h-[250px] md:!h-[600px]"
    /></div> 
<div className="z-40 leading-[1] absolute left-[2%] lg:left-[6%]  top-[15%] sm:top-[25%] md:top-auto ">
  <span className=' text-[18px] text-white md:text-[30px] font-light leading-[2]'>EMPOWERING YOUR
  </span>
  <h1 className='text-[21px] text-white md:text-[40px] lg:text-[50px] mb-3 md:mb-8 font-heading font-bold leading-[1.2]'>WORLD WITH <br />
TECHNOLOGY</h1>
<button className='btn-white '>Contact us</button>
</div>
</div>

</>
  )
}

export default herobanner;
