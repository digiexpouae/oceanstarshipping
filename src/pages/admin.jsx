import React, { useState } from 'react'

const admin = () => {
const [username, setusername] = useState("")
const [password, setpassword] = useState("")
const jwt=require("jsonwebtoken")
const token =jwt.sign({useremail:"admin@gmail.com"},process.env.NEXT_SECRET_KEY,{expiresIn:'1h'})
if(username=='admin@gmail.com' && password =="123498"){
  console.log(token)
}
const submithandler=()=>{
    
}
  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
    <h1>Admin Login</h1>
    {/* {error && <p style={{ color: "red" }}>{error}</p>} */}
    <form  style={{ display: "inline-block" }}>
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
