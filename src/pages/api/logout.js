import { serialize } from "cookie";

export default function handler(req, res) {
  res.setHeader("Set-Cookie", serialize("authToken", "", { 
    path: "/", 
    maxAge: 0, // Immediately expires the cookie
    httpOnly: true, 
    secure: true, 
    sameSite: "strict"
  }));

  res.status(200).json({ message: "Logged out successfully" });
}