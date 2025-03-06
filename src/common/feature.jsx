import React from 'react'
import Image from 'next/image'
import icon2 from '../../public/assets/truck.svg'
import icon1 from '../../public/assets/person.svg'
import icon3 from '../../public/assets/shopping cart.svg'
import icon4 from '../../public/assets/Free Shipping & Returns.svg'
const feature = () => {
  return (
    <div className='w-full lg:h-[146px] flex flex-col lg:flex-row items-center justify-center gap-[40px]'>
  <div className='flex justify-between lg:w-[200px] xl:w-[270px]'><Image height={50} width={50} src={icon1} /><div className='flex flex-col items-center justify-center h-[86px]'><h3 className=' text-[17px] xl:text-[20px] font-bold'> Online Support</h3> <p className='text-[12px] xl:text-[16px]'>Dedicated Support Team</p></div></div>
        <div className='flex  justify-between lg:w-[200px] lg:w-[200px] xl:w-[270px]'>  <Image  height={50} width={50} src={icon2}/><div className='flex flex-col items-center justify-center h-[86px]'> <h3  className='  text-[17px] xl:text-[20px] font-bold'>Free Shipping</h3> <p className=' text-[12px]  xl:text-[16px]'>Purchases Over $100</p></div></div>
        <div className='flex  justify-between lg:w-[200px] xl:w-[270px]'><Image  height={50} width={50} src={icon3}/><div className='flex flex-col items-center justify-center h-[86px] '><h3  className='  text-[17px] xl:text-[20px] font-bold'>Timeless Shopping</h3> <p className=' text-[12px]  xl:text-[16px]'>24/7 Purchasing</p></div></div>
        <div className='flex  justify-between lg:w-[200px] xl:w-[270px]'><Image   height={50} width={50} src={icon4}/><div className='flex flex-col items-center justify-center h-[86px]'><h3  className=' text-[17px] xl:text-[20px] font-bold'>Product Returns</h3> <p className=' text-[12px]  xl:text-[16px] n'>No-Questions-Asked Returns</p></div></div>
    </div>
  )
}

export default feature