import React, { useState } from 'react'
import logo from '../../../public/assets/Group 1.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import Image from 'next/image'
const header = () => {


  const [open, setopen] = useState(false)
  const nav=['Home','About us','Brands','Blogs' ]
  return (
<div className="flex !justify-between w-full items-center md:px-18 md:py-5  px-10 py-4 bg-white shadow-md">
<div><Image src={logo}   alt="logo"
        width={100} height={80}
        className=" object-cover"/></div>
        <div className='md:hidden relative'>
        <a className='shadow h-[45px] w-[45px] flex items-center justify-center rounded-full cursor-pointer bg-white
         ' onClick={()=>{(setopen(!open))}}><FontAwesomeIcon icon={faBars} className="text-xl" />
        </a>
      {/* mobile nav */}
        <div className={`fixed h-full w-3/4 duration-300 ease-in-out flex flex-col pt-14 px-10 items-center leading-16  bg-black right-[-40px] top-0 bottom-0 z-50   ${open ? "block" : "translate-x-96"}`}>
        <a className='absolute h-[35px] w-[35px] bg-white left-[20px] top-[10px] flex justify-center items-center text-xl bold' onClick={()=>{(setopen(false))}}>x</a>
        <div className=' w-full '><Image src={logo}     alt="logo"
        width={100} height={80}
        className="rounded-lg object-cover"/></div>
        <div className='w-full'>
        <ul className=' !justify-between w-96 ' >
    
     <li  className='text-white transition-all duration-300 delay-200 hover:text-primary hover:font-bold cursor-pointer'>Home</li>
     <li  className='text-white transition-all duration-300 delay-200 hover:text-primary hover:font-bold cursor-pointer'>About us</li>
     <li  className='text-white transition-all duration-300 delay-200 hover:text-primary hover:font-bold cursor-pointer'>Brands</li>
     <li  className='text-white transition-all duration-300 delay-200 hover:text-primary hover:font-bold cursor-pointer'>Blogs</li>
</ul>
</div>
<div className='w-full items-center'><button className='btn'>Contact us</button></div>

        </div>
        </div>
  <div className='hidden md:flex'>
    {/* link should be added  */}
    <ul className=' hidden md:flex !justify-between w-96' >
   <li  className='transition-all duration-300 delay-200 hover:text-primary hover:font-bold cursor-pointer'>Home</li>
   <li  className='transition-all duration-300 delay-200 hover:text-primary hover:font-bold cursor-pointer'>About us</li>
   <li  className='transition-all duration-300 delay-200 hover:text-primary hover:font-bold cursor-pointer'>Brands</li>
   <li  className='transition-all duration-300 delay-200 hover:text-primary hover:font-bold cursor-pointer'>Blogs</li>

</ul>
 </div>
 <div className='hidden md:flex'><button className='btn'>Contact us</button></div>
 </div>

  )

}
export default header;
