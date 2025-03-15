import React, { useEffect, useState } from 'react';
import Header from '@/layout/header/header';
import Footer from '@/layout/footer/footer';
import { sanityClient } from './api/form';
import Router, { useRouter } from 'next/router';
const Leads = () => {
  const router=useRouter()
  const [leads, setLeads] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const verifyUser = async () => {
      try {
        const response = await fetch("/api/verify");
        if (!response.ok) {
          throw new Error("Invalid token");
        }
        setIsLoading(false); // Token valid, show page
      } catch (error) {
        router.push("/admin"); // Redirect to login
      }
    };

    verifyUser();
  }, [router]);
 
 
 
  useEffect(() => {
    sanityClient
      .fetch('*[_type == "formSubmission"]| order(_createdAt desc) {_id,name,email,phonenumber,message}')
      .then(setLeads)
      .catch(console.error);
  }, []);


  const deleteHandler = async (orderId, e) => {
    e.preventDefault(); // Pass 'e' as a parameter
    try {
      await sanityClient.delete(orderId);
      setLeads((prev) => prev.filter((elem) => elem._id !== orderId));
    } catch (error) {
      console.error("Error:", error); // Fixed the error logging
    }
  };
  if (isLoading) {
    return <p>Loading...</p>; // Show a loader while checking auth
  }
  return (
    <div>
      <Header />

      <div className="flex items-center justify-center w-full">
        <table className="w-[80%] border border-collapse border-gray-300">
          <thead>
            <tr className="bg-[#161647] text-center text-white">
            <th className="border border-primary-300 px-4 py-2">id</th>
              <th className="border border-primary-300 ">Name</th>
              <th className="border border-primary-300 px-4 py-2">Email</th>
              <th className="border border-primary-300 px-4 py-2">Phone No</th>
              <th className="border border-primary-300 px-4 py-2">Message</th>
              <th> Delete</th>
            </tr>
          </thead>
          <tbody>
          {console.log(leads)}

            {leads.length === 0 ? (
              <tr>
                <td colSpan="4" className="text-center py-4">No leads found</td>
              </tr>
            ) : (
              leads.map((lead) => (
                <tr key={lead._id} className="text-center ">
                  <td className="border border-gray-300 px-4 py-2">{lead._id}</td>
                  <td className="border border-gray-300 px-4 py-2">{lead.name}</td>
                  <td className="border border-gray-300 px-4 py-2">{lead.email}</td>
                  <td className="border border-gray-300 px-4 py-2">{lead.phonenumber || 'N/A'}</td>
                  <td className="border border-gray-300 px-4 py-2">{lead.message}</td>
                  <td className=' btn border border-gray-300 px-4 py-2' onClick={(e)=>deleteHandler(lead._id,e)}>Delete</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      <Footer />
    </div>
  );
};

export default Leads;
