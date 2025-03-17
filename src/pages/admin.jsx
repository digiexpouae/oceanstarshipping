import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { faListCheck } from '@fortawesome/free-solid-svg-icons'
const admin = () => {
const [username, setusername] = useState("")
const [password, setpassword] = useState("")
const [clicked, setclicked] = useState(true)
const jwt=require("jsonwebtoken")
const router=useRouter()
const submithandler=async (e)=>{

  e.preventDefault();
  setclicked(false)
try{
  const response=await fetch('api/login',{
    method:'POST',  
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify({username,password}),
  })
if (response.ok){
   router.push("/leads")
}
}
catch(error){
  console.log("invalid credentials",error)

}
  }
  return (
    <div  className='flex flex-col items-center justify-center h-[100vh] md:h-[700px] w-full' >
    <h1 className='text-extrabold text-[30px] md:text-[45px] text-primary font-heading uppercase select-none'>Admin login</h1>
    {/* {error && <p style={{ color: "red" }}>{error}</p>} */}
    <form  onSubmit={submithandler} className='flex flex-col  items-center justify-center gap-5 w-full'>
        <input 
            type="text" placeholder="Username" required
          
            className='md:w-[405px] w-[70%] py-4 px-2 border rounded border-primary-300 outline-none'
        value={username}
        onChange={(e)=>setusername(e.target.value)}
        />
        <input 
            type="password" placeholder="Password" required
          value={password} onChange={(e)=>setpassword(e.target.value)}
               className='md:w-[405px] py-4 w-[70%] px-2 border rounded border-primary-700  outline-none'
        />
        <button type="submit" className={`bg-primary text-white md:w-[405px] w-[70%] ${clicked?'cursor-pointer':'cursor-notallowed opacity-50'}`} style={{ padding: "10px" }}>Login</button>
    </form>
</div>
  )
}

export default admin
