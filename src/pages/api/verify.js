import React from 'react'
import { parse } from 'cookie'
import jwt from "jsonwebtoken"
const verify=async(req,res)=>{
const cookies =parse(req.headers.cookie ||"")
const token =cookies.authToken
if(!token){
    return res.status(401).json({ message: "Unauthorized: No Token" });
}
try{
    const decoded=jwt.verify(token,process.env.NEXT_PUBLIC_SECRET_KEY)
    return res.status(200).json({ valid: true, user: decoded });
} catch (error) {
  return res.status(401).json({ message: "Unauthorized: Invalid Token" });

}
}
export default verify