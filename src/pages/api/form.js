//  import { createClient } from "next-sanity";
// import { projectId , dataset , apiVersion,  token } from "../../sanity/env";
// export const sanityClient = createClient({
//   //  projectId:'6kvdqvro',// Replace with actual Project ID
//   //  dataset:'production', // Example: 'production'
//   // apiVersion:'2025-03-12',
//   projectId,dataset,apiVersion,
//   useCdn: false,
//   token
// });

// export default async function handler(req, res) {
//   if (req.method === "POST") {
//     try {
//       const formData = req.body;
//       const {name,email,phonenumber,message}=formData

//       await sanityClient.create({
//         _type: "formSubmission",
//         ...formData,
//         submittedAt: new Date().toISOString(),
//       });
      

//       const data = await formData;
//       console.log(data)
//       if(data){
//         const nodemailer = require("nodemailer"); 
      
//         const testConfig = {
//         host: "sandbox.smtp.mailtrap.io",
//         auth: {
//           user: "918c11ae60fba8", 
//           pass: "9d0b0d9d2dc6f3",
//         },
//       };
//       const prodConfig = {
//         host: "smtp.com",
//         port: 465, 
//         secure: true, 
//         auth: {
//           user: "", 
//           pass: "", 
//         },
//       };
//       const config = process.env.NODE_ENV === 'production' ? prodConfig : testConfig
//       const transporter = nodemailer.createTransport(config);
      
//       await transporter.sendMail({
//         from:`test@gmail.com`,
//         to:email,
//         subject: `New Contact Form Submission: `,
//         html: `
//           <h2>New Contact Form Submission</h2>
//           <p><strong>Name:</strong> ${name}</p>
//           <p><strong>Email:</strong> ${email}</p>
//           <p><strong>Phone:</strong> ${phonenumber || 'Not provided'}</p>
//           <p><strong>Message:</strong></p>
//           <blockquote>Thankyou for connecting with us.</blockquote>
//           <p><em>Received on: ${new Date().toLocaleString()}</em></p>
//         `,
//         replyTo: email
//       });
//   ``
//      return res.status(200).json({ message: "Form submitted successfully!" });
//     }} catch (error) {
//       console.error("Sanity submission error:", error);
//       return res.status(500).json({ message: "Error submitting form" });
//     }
//   }
//   return res.status(405).json({ message: "Method Not Allowed" });
// }