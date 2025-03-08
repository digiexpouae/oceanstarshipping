import React from 'react'
import Image from 'next/image'
import icon2 from '../../public/assets/truck.svg'
import icon1 from '../../public/assets/person.svg'
import icon3 from '../../public/assets/shopping cart.svg'
import icon4 from '../../public/assets/Free Shipping & Returns.svg'
const feature = () => {
  return (
<div className='w-full h-[290px] md:h-[146px] flex flex-col lg:flex-row items-center justify-center gap-[40px] '>
<div className=' md:w-full w-[70%]  md:h-[146px] h-[290px] flex  flex-col md:flex-row md:gap-3 justify-between mt-[15px]
 md:justify-center'>
<div className='flex items-center justify-center gap-2 lg:w-[200px] xl:w-[270px] md:w-[23%]'><div className=' flex items-center justify-center w-[20%]'><Image className="w-[30px] h-[30px] md:w-[37px] md:h-[37px] lg:w-[50px] lg:h-[50px]" src={icon1} /></div><div className=' h-[30px] w-[50%] md:w-[80%] md:h-[40px] lg:h-[50px] text-nowrap'><h3 className=' text-[13px] md:text-[15px] xl:text-[20px] font-bold'> Online Support</h3> <p className='text-[12px] xl:text-[16px]'>Dedicated Support Team</p></div></div>
        <div className='flex items-center gap-2 justify-center lg:w-[200px] xl:w-[270px] md:w-[20%] '> <div className=' flex items-center justify-center w-[20%]'> <Image className="w-[30px] h-[30px] md:w-[37px] md:h-[37px] lg:w-[50px] lg:h-[50px]" src={icon2}/></div><div className='h-[30px]  md:h-[45px] lg:h-[50px] w-[50%] md:w-[80%] text-nowrap'> <h3  className='   text-[13px] md:text-[15px] xl:text-[20px] font-bold'>Free Shipping</h3> <p className=' text-[12px]  xl:text-[16px]'>Purchases Over $100</p></div></div>
        <div className='flex items-center gap-2 justify-center lg:w-[200px] xl:w-[270px] md:w-[23%] '><div className=' flex items-center justify-center w-[20%]'><Image  className="w-[30px] h-[30px] md:w-[37px] md:h-[37px] lg:w-[50px] lg:h-[50px]" src={icon3}/></div><div className=' h-[30px] md:h-[45px] lg:h-[50px] w-[50%] md:w-[80%] text-nowrap'><h3  className='   text-[13px] md:text-[15px] xl:text-[20px] font-bold'>Timeless Shopping</h3> <p className=' text-[12px]  xl:text-[16px]'>24/7 Purchasing</p>
        </div></div>
        <div className='flex items-center gap-2  justify-center lg:w-[200px] xl:w-[270px] md:w-[23%] '><div className=' flex items-center justify-center w-[20%]'><Image  className="w-[30px] h-[30px] md:w-[37px] md:h-[37px] lg:w-[50px] lg:h-[50px]"src={icon4}/></div><div className=' h-[30px] md:h-[45px] lg:h-[50px] w-[50%] md:w-[80%] text-nowrap'><h3  className='  text-[13px] md:text-[15px] xl:text-[20px] font-bold'>Product Returns</h3> <p className=' text-[12px]  xl:text-[16px] n'>No-Questions-Asked Returns</p></div></div>
    </div></div>
  )
}

export default feature