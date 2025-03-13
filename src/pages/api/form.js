 import { createClient } from "@sanity/client";

const sanityClient = createClient({
   projectId:'6kvdqvro' ,// Replace with actual Project ID
   dataset:'production', // Example: 'production'
  apiVersion:"2025-03-12",
    
  useCdn: false,
  token: process.env.SANITY_API_TOKEN, // Store in .env file
});

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const formData = req.body;
      await sanityClient.create({
        _type: "formSubmission",
        ...formData,
        submittedAt: new Date().toISOString(),
      });

      return res.status(200).json({ message: "Form submitted successfully!" });
    } catch (error) {
      console.error("Sanity submission error:", error);
      return res.status(500).json({ message: "Error submitting form" });
    }
  }
  return res.status(405).json({ message: "Method Not Allowed" });
}