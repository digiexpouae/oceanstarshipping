import React from 'react'
import Image from 'next/image'
import banner from '../../../public/assets/143 copy 1.png'
const bannerone = () => {
  return (
    <div className=' md:h-[644px] w-full bg-gradient-to-l from-[#F6F6F6] via-[rgba(246,246,246,0)] to-transparent relative'>
      <Image src={banner} height={403} width={1090} className='w-full' objectFit='cover'/>
<div className='absolute  top-[20px]  left-[20px] xl:top-[96px] xl:left-[117px] z-50 '>
<div className=' text-primary text-[13px] sm:text-[16px]  md:text-[25px] lg:text-[28px] font-heading font-extrabold w-[220px] md:w-[500px] lg:w-[650px] mb-3 md:mb-5 xl:mb-10 md:leading-9 leading-4 lg:leading-13 uppercase  '>Ocean Star is a 
<br />leading electronic 
trading company 
based in the United 
Arab Emirates,
established in 2007</div> 
<div className=' md:text-[10px] text-[8px] top-[40px] md:text-[20px] lg:text-[23px] text-primary leading-2.5 w-full  h-[60px] left-[20px] md:left-[117px] md:top-[106px] md:leading-6.5 lowercase'>Over the years, we have built a strong reputation as a trusted provider of high-quality electronic products, catering to both corporate and retail clients across the UAE.</div>
</div>
    </div>
  )
}

export default bannerone;
// font-family: FONTSPRING DEMO - Manifold Extended CF Extra Bold;
// font-weight: 800;
// font-size: 45px;
// line-height: 54px;
// letter-spacing: 0%;
// width: 724;
// height: 324;
// top: 2243.41px;
// left: 117px;

// width: 1440;
// height: 644;
// top: 2113.95px;
