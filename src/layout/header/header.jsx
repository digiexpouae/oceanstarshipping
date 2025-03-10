import React, { useState } from 'react'
import logo from '../../../public/assets/Group 1.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Link from 'next/link';
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import Image from 'next/image'

const header = () => {

  const [open, setopen] = useState(false)
  const nav=[{name:'Home',link:"/"},{name:'About us',link:"/about"},{name:'Brands',link:'/brands'},{name:'Blogs',link:"/blogs"} ]
  return (
<div className="flex !justify-between w-full items-center md:px-18 h-[78px] px-10  bg-white">
<Link href='/'><Image src={logo}   alt="logo"
        width={100} height={80}
        className=" object-cover"/></Link>
        <div className='md:hidden relative'>
        <a className='shadow h-[45px] w-[45px] flex items-center justify-center rounded-full cursor-pointer bg-white
         ' onClick={()=>{(setopen(!open))}}><FontAwesomeIcon icon={faBars} className="text-xl" />
        </a>
      {/* mobile nav */}
        <div className={`fixed h-full w-3/4 duration-300 ease-in-out flex flex-col pt-14 px-10 items-center leading-16  bg-[#F6F6F6] right-[-40px] top-0 bottom-0 z-50   ${open ? "block" : "translate-x-96"}`}>
        <a className='absolute h-[35px] w-[35px] bg-white left-[20px] top-[10px] flex justify-center items-center text-xl bold' onClick={()=>{(setopen(false))}}> <FontAwesomeIcon icon={faXmark} /></a>
        <div className=' w-full '><Link href='/'><Image src={logo}     alt="logo"
        width={100} height={80}
        className="rounded-lg object-cover"/></Link></div>
        <div className='w-full'>
        <ul className=' !justify-between w-96 ' >
{nav.map((elem, index)=>{
   return  <li  key={index} className='text-primary transition-all duration-300 delay-200 hover:text-primary hover:font-bold cursor-pointer'><Link href={elem.link}>{elem.name}</Link></li>

})    
}
</ul>
</div>
<div className='w-full items-center'><button className='btn'><Link href='/contact'>Contact us</Link></button></div>

        </div>
        </div>
  <div className='hidden md:flex'>
    {/* link should be added  */}
    <ul className=' hidden md:flex !justify-between w-96' >
      
    {nav.map((elem,index)=>{
   return  <li  key={index} className='text-black transition-all duration-300 delay-200 hover:text-primary hover:font-bold cursor-pointer'><Link href={elem.link}>{elem.name}</Link></li>

})    
}   
</ul>
 </div>
 <div className='hidden md:flex'><button className='btn'><Link href='/contact'>Contact us</Link></button></div>
 </div>

  )

}
export default header;
