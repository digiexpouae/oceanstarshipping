import React from 'react'
import logo from '../../../public/assets/Group 1.png'
import Image from 'next/image'
const header = () => {
  return (
<div className="flex !justify-between w-full items-center px-16 py-2 bg-white shadow-md">
<div><Image src={logo}     alt="logo"
        width={100} height={80}
        className="rounded-lg object-cover"/></div>

  <div>
    <ul className='flex !justify-between w-64'>
<li>Home</li>
<li>About us</li>
<li>Brand</li>
<li>Blogs</li>
</ul>
 </div>
 <div><button className='btn'>Contact us</button></div>
 </div>

  )

}
export default header;
