import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { faPray } from '@fortawesome/free-solid-svg-icons'
const form = () => {
  const [formData, setformData] = useState({name:'',email:'',phonenumber:'',message:'' })
  const [submit, setsubmit] = useState(false)
const handlechange =(e)=>{
setformData({...formData,[e.target.name]:e.target.value})
}
const router =useRouter()
const handlesubmit=async (e)=>{
  e.preventDefault();
  setsubmit(true)
  try{
    const res= await fetch("/api/form",{
      method:"POST",
      headers: { "Content-Type": "application/json" }, // Add headers
      body:JSON.stringify(formData)
    })
    const data = await res.json(); // Convert response to JSON
   // Log actual API response

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
        <input type="text" placeholder='Enter your full name' name='name' value={formData.name} onChange={handlechange} className='h-[54px] border border-primary outline-none px-5 '/>
        <input type="email" placeholder='Email'    onChange={handlechange} value={formData.email} name='email' className='h-[54px] border border-primary outline-none  px-5' />
    <input type="text"  placeholder='Phone number'  onChange={handlechange} value={formData.phonenumber} name='phonenumber' className='h-[54px] border border-primary outline-none  px-5'/>
        <textarea id="" placeholder='Message'   value={formData.message}  onChange={handlechange} name='message' className=' border border-primary h-[225px] outline-none px-5 py-3'></textarea>

    <button className={`btn ${submit}? cursor-pointer:cursor-not-allowed`} disabled={submit} >Contact Us</button>
      </form>


    </div>
  )
}

export default form
