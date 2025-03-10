import React from 'react'
import motorolla from '../../../public/assets/motorola.png'
import samsung from '../../../public/assets/samsung.png'
import lenovo from '../../../public/assets/lenovo.png'
import nokia from '../../../public/assets/nokia.png'
import apple from '../../../public/assets/apple.png'
import xiaomi from '../../../public/assets/xiaomi.png'
import hp from '../../../public/assets/hp.png'
import huawei from '../../../public/assets/huawei.png'
import Image from 'next/image'
const brand = () => {
const Images=[nokia,motorolla,xiaomi,hp,lenovo,huawei,samsung,apple]
  return (
    <div className='w-full flex justify-center h-[500px] md:h-[982px]'>
    <div className='grid grid-cols-2 place-items-center h-[400px]  gap-x[60px] gap-y-[50px] md:gap-x-[50px] lg:gap-x-[120px] w-[80%] md:w-[65%]'>
      {
        Images.map((elem,index)=>{  
            return <div className='shadow relative w-[125px] h-[65px] md:w-[230px] md:h-[120px] lg:w-[350px] lg:h-[204px]'><Image layout='fill' src={elem} /></div>
        })
      }
    </div>
 </div>
  )
}



export default brand
