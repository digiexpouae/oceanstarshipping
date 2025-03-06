import React from 'react'
import motorolla from '../../public/assets/motorola.png'
import samsung from '../../public/assets/samsung.png'
import lenovo from '../../public/assets/lenovo.png'
import nokia from '../../public/assets/nokia.png'
import apple from '../../public/assets/apple.png'
import xiaomi from '../../public/assets/xiaomi.png'
import hp from '../../public/assets/hp.png'
import huawei from '../../public/assets/huawei.png'
import Image from 'next/image'

const slider = () => {
    const Images=[nokia,motorolla,xiaomi,hp,lenovo,huawei,samsung,apple]
  return (
    <div className='slider'>
      {
        Images.map((elem,index)=>{  
            return <Image  width={225} height={58} src={elem} />
        })
      }
    </div>
  )
}

export default slider

