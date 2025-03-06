import React from 'react'
import Blogs from '@/common/blogs'
import Link from 'next/link'
const blog_section = () => {
  return (
    <div>
            <h3 className=' text-[22px] text-primary md:text-[50px] underline mb-3 md:mb-8 font-heading font-bold text-center'>OUR BLOGS</h3>
      <Blogs />
      <div className='flex items-center justify-center w-full'> <button className='btn'><Link href='/'>View All Blogs</Link></button></div>
    </div>
  )
}

export default blog_section
