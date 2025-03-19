import React from 'react'
import Image from 'next/image'
import banner from '../../../public/assets/143 copy 1.png'


const goals = () => {


  return (
    <div className='w-full bg-gradient-to-l from-[#F6F6F6] via-[rgba(246,246,246,0)] to-transparent relative flex items-center'>
      <Image src={banner} height={403} width={1090} className='w-full' objectFit='cover'/>
<div className='absolute  left-[20px] lg:left-[70px] xl:left-[117px] z-50 h-[250px]  lg:h-[499px] w-[50%] flex flex-col gap-3 justify-center'>
<div>
<h4 className=' text-primary text-[13px] sm:text-[16px]  md:text-[25px] lg:text-[35px] xl:text-[40px] font-heading font-extrabold w-[220px] md:w-[500px] lg:w-[650px] uppercase'>
Vision
</h4>
<div className='md:text-[13px] text-[7px] top-[40px] lg:text-[19px] xl:text-[23px] lowercase text-primary leading-2.5 w-full  left-[20px] md:left-[117px] md:top-[106px] md:leading-6.5'>
To be the leading electronic trading company in the UAE, recognized for our commitment to quality, innovation, and customer satisfaction.
</div>
</div>
<div>
<h4 className=' text-primary text-[13px] sm:text-[16px]  md:text-[25px] lg:text-[35px] xl:text-[40px] font-heading font-extrabold w-[220px] md:w-[500px] lg:w-[650px]  uppercase'>
Mission
</h4>
<div className=' text-[7px] top-[40px] md:text-[13px] lg:text-[19px] xl:text-[23px] text-primary leading-2.5 w-full capitalize  left-[20px] md:left-[117px] md:top-[106px] md:leading-6.5'>
<ul className='list-disc lowercase'>
<li>To provide businesses with access to the latest electronic products from top global brands.</li>
<li>To deliver exceptional value through competitive pricing, reliable service, and customized solutions.</li>
<li>To foster long-term partnerships with our clients by understanding their needs and exceeding their expectations.</li></ul>
</div>
</div>

</div>
</div>


  )
}
;

export default goals