import React, { useState } from 'react'
import { useRouter } from 'next/router'
const form = () => {
  const [formData, setformData] = useState({name:'',email:'',phonenumber:'',message:'' })
const handlechange =(e)=>{
setformData({...formData,[e.target.name]:e.target.value})
}
const router =useRouter()
const handlesubmit=async (e)=>{
  e.preventDefault();
  try{
    const res= await fetch("/api/form",{
      method:"POST",
      headers: { "Content-Type": "application/json" }, // Add headers
      body:JSON.stringify(formData)
    })
    const data = await res.json(); // Convert response to JSON
    console.log("Response Data:", data); // Log actual API response

   if(res && res.ok){
    // alert('thankyou')
    router.push('/thankyou')
  } 
}
  catch(error){
alert("failed to send message")
  }
}

  return (
    <div className=' w-full flex flex-col items-center h-[700px]  ' >
             <h3 className=' text-[22px] text-primary md:text-[50px] underline mb-3 md:mb-8 font-heading font-bold text-center uppercase'>Fill Out The Form</h3>
      <form action="" className='flex flex-col gap-5 w-[70%] md:w-[50%] ' onSubmit={handlesubmit}>
        <input type="text" placeholder='Enter your full name' name='name' onChange={handlechange} className='h-[54px] border border-primary outline-none px-5 '/>
        <input type="email" placeholder='Email'    onChange={handlechange} name='email' className='h-[54px] border border-primary outline-none  px-5' />
    <input type="number"  placeholder='Phone number'  onChange={handlechange} name='phonenumber' className='h-[54px] border border-primary outline-none  px-5'/>
        <textarea id="" placeholder='Message'     onChange={handlechange} name='message' className=' border border-primary h-[225px] outline-none px-5 py-3'></textarea>

    <button className='btn'>Contact Us</button>
      </form>


    </div>
  )
}

export default form
