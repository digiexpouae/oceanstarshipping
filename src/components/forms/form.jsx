import React from 'react'

const form = () => {
  return (
    <div className=' w-full flex flex-col items-center h-[700px]  ' >
             <h3 className=' text-[22px] text-primary md:text-[50px] underline mb-3 md:mb-8 font-heading font-bold text-center uppercase'>Fill Out The Form</h3>
      <form action="" className='flex flex-col gap-5 w-[70%] md:w-[50%] '>
        <input type="text" placeholder='Enter your full name' className='h-[54px] border border-primary outline-none px-5 '/>
        <input type="text" placeholder='Email' className='h-[54px] border border-primary outline-none  px-5' />
    <input type="text"  placeholder='Phone number' className='h-[54px] border border-primary outline-none  px-5'/>
        <textarea name="" id="" placeholder='Message' className=' border border-primary h-[225px] outline-none px-5 py-3'></textarea>

    <button className='btn'>Contact Us</button>
      </form>


    </div>
  )
}

export default form
