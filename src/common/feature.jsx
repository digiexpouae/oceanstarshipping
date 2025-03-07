import React from 'react'
import Image from 'next/image'
import icon2 from '../../public/assets/truck.svg'
import icon1 from '../../public/assets/person.svg'
import icon3 from '../../public/assets/shopping cart.svg'
import icon4 from '../../public/assets/Free Shipping & Returns.svg'
const feature = () => {
  return (
<div className='w-full md:h-[320px] h-[290px] lg:h-[146px] flex flex-col lg:flex-row items-center justify-center gap-[40px]'>
<div className='flex items-center gap-3 lg:w-[200px] xl:w-[270px] '><div className=' flex items-center justify-center w-[30%]'><Image className="w-[30px] h-[30px] md:w-[45px] md:h-[45px] lg:w-[50px] lg:h-[50px]" src={icon1} /></div><div className=' h-[30px] w-[50%] md:w- md:h-[45px] lg:h-[50px] text-nowrap'><h3 className=' text-[13px] md:text-[17px] xl:text-[20px] font-bold'> Online Support</h3> <p className='text-[12px] xl:text-[16px]'>Dedicated Support Team</p></div></div>
        <div className='flex items-center gap-3  lg:w-[200px] xl:w-[270px] '> <div className=' flex items-center justify-center w-[30%]'> <Image className="w-[30px] h-[30px] md:w-[45px] md:h-[45px] lg:w-[50px] lg:h-[50px]" src={icon2}/></div><div className='h-[30px]  md:h-[45px] lg:h-[50px] w-[50%] md:w-[70%] text-nowrap'> <h3  className='   text-[13px] md:text-[17px] xl:text-[20px] font-bold'>Free Shipping</h3> <p className=' text-[12px]  xl:text-[16px]'>Purchases Over $100</p></div></div>
        <div className='flex items-center gap-3  lg:w-[200px] xl:w-[270px] '><div className=' flex items-center justify-center w-[30%]'><Image  className="w-[30px] h-[30px] md:w-[45px] md:h-[45px] lg:w-[50px] lg:h-[50px]" src={icon3}/></div><div className=' h-[30px] md:h-[45px] lg:h-[50px] w-[50%] md:w-[70%] text-nowrap'><h3  className='   text-[13px] md:text-[17px] xl:text-[20px] font-bold'>Timeless Shopping</h3> <p className=' text-[12px]  xl:text-[16px]'>24/7 Purchasing</p>
        </div></div>
        <div className='flex items-center gap-3  lg:w-[200px] xl:w-[270px] '><div className=' flex items-center justify-center w-[30%]'><Image  className="w-[30px] h-[30px] md:w-[45px] md:h-[45px] lg:w-[50px] lg:h-[50px]"src={icon4}/></div><div className=' h-[30px] md:h-[45px] lg:h-[50px] w-[50%] md:w-[70%] text-nowrap'><h3  className='  text-[13px] md:text-[17px] xl:text-[20px] font-bold'>Product Returns</h3> <p className=' text-[12px]  xl:text-[16px] n'>No-Questions-Asked Returns</p></div></div>
    </div>
  )
}

export default feature