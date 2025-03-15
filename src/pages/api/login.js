import jwt from "jsonwebtoken";
import { serialize } from "cookie";

export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const { username, password } = req.body;

  if (username === "admin@gmail.com" && password === "123498") {
    const token = jwt.sign(
      { useremail: "admin@gmail.com" },
      process.env.NEXT_PUBLIC_SECRET_KEY, // No `NEXT_PUBLIC_`
      { expiresIn: "1h" }
    );

    res.setHeader("Set-Cookie", serialize("authToken", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        path: "/",
        maxAge: 3600, // 1 hour
      }));
  
      return res.status(200).json({ message: "Login successful ✅" });
    }
  
    return res.status(401).json({ error: "Invalid credentials ❌" });
  }