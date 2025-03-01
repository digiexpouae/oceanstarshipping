import React from 'react'
import Image from 'next/image'
import heroban from '../../../public/assets/image.png'
const herobanner = () => {
  return (
    <div className="relative w-full h-96">
      <Image src={heroban} layout="fill" objectFit="cover" alt="Hero Banner" />
    </div>
  )
}

export default herobanner;
