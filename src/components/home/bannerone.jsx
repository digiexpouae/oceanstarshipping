import React from 'react'
import Image from 'next/image'
import banner from '../../../public/assets/143 copy 1.png'
const bannerone = () => {
  return (
    <div className=' h-[644px] w-full bg-gradient-to-l from-[#F6F6F6] via-[rgba(246,246,246,0)] to-transparent relative'>
      <Image src={banner} height={403} width={1090} className='w-full' objectFit='cover'/>
      <div className='absolute w-[300px] md:w-[1090px] md:h-[443.4599609375px] top-[30px]  left-[20px] md:top-[96px] md:left-[117px] z-50 '>
<div className=' text-primary text-[13px] md:text-[45px] font-heading font-extrabold w-[280px] md:w-[724px] mb-10 leading-4.5 md:leading-11 capitalize  '>Ocean Star is a 
leading electronic 
trading company 
based in the United 
Arab Emirates,
established in 2007</div> 
<div className=' text-[10px] top-[40px] md:text-[25px] text-primary leading-2.5  capitalize h-[60px]  left-[20px] md:left-[117px] md:top-[106px] md:leading-6.5'>Over the years, we have built a strong reputation as a trusted provider of high-quality electronic products, catering to both corporate and retail clients across the UAE.</div>
</div>
    </div>
  )
}

export default bannerone
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
