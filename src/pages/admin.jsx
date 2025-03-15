import React, { useState } from 'react'
import { useRouter } from 'next/router'
const admin = () => {
const [username, setusername] = useState("")
const [password, setpassword] = useState("")
const jwt=require("jsonwebtoken")
const router=useRouter()
const submithandler=async (e)=>{

  e.preventDefault();
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
    <div style={{ textAlign: "center", padding: "50px" }}>
    <h1>Admin Login</h1>
    {/* {error && <p style={{ color: "red" }}>{error}</p>} */}
    <form  onSubmit={submithandler} style={{ display: "inline-block" }}>
        <input 
            type="text" placeholder="Username" required
          
            style={{ display: "block", margin: "10px 0", padding: "8px" }}
        value={username}
        onChange={(e)=>setusername(e.target.value)}
        />
        <input 
            type="password" placeholder="Password" required
          value={password} onChange={(e)=>setpassword(e.target.value)}
            style={{ display: "block", margin: "10px 0", padding: "8px" }}
        />
        <button type="submit" style={{ padding: "10px", cursor: "pointer" }}>Login</button>
    </form>
</div>
  )
}

export default admin
