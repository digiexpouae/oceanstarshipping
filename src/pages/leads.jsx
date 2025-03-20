import React, { useEffect, useState } from 'react';
import Header from '@/layout/header/header';
import Footer from '@/layout/footer/footer';
// import { sanityClient } from '';
import Router, { useRouter } from 'next/router';
const Leads = () => {
  const router=useRouter()
  const [leads, setLeads] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [modal, setmodal] = useState("")
  const [selected, setselected] = useState("")
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

const viewdetails=(leadId)=>{
const details=leads.find((elem)=>
 elem._id==leadId
)
console.log(details)
setselected(details)
setmodal(true)
}
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

      <div className="flex items-center justify-center w-full select-none">
        <table className=" m-[60px] w-[80%] select-none">
          <thead>
            <tr className="bg-[#161647] text-center text-white">
            <th className="border border-primary-300 px-4 py-2">id</th>
              <th className="border border-primary-300 ">Name</th>
              <th className="border border-primary-300 px-4 py-2">Email</th>
              <th className="border border-primary-300 px-4 py-2">Phone No</th>
              {/* <th className="border border-primary-300 px-4 py-2">Message</th> */}
              <th>View Details</th>
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
              leads.map((lead,index) => (
                <tr key={index} className="text-center ">
                  <td className=" px-4 py-2">{index}</td>
                  <td className=" px-4 py-2">{lead.name}</td>
                  <td className="px-4 py-2">{lead.email}</td>
                  <td className=" px-4 py-2">{lead.phonenumber || 'N/A'}</td>
                  {/* <td className="border border-gray-300 px-4 py-2">{lead.message}</td> */}
 <td className=' text-center px-4 py-2'><div  className=' py-1 bg-primary text-white hover:opacity-75 cursor-pointer'onClick={()=>viewdetails(lead._id)}>View Details</div></td>
<td  className=' text-center px-4 py-2 w-[140px]'><div className=' px-4 py-1 bg-primary text-white hover:opacity-75 cursor-pointer' onClick={(e)=>deleteHandler(lead._id,e)}>Delete</div></td>
                </tr>
              ))
            )}
          </tbody>
        </table>
        {modal && selected && (
        <div className="fixed inset-0  flex justify-center items-center" style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }} >
          <div className="bg-white p-6 rounded-lg shadow-lg w-[40%]">
            <h2 className="text-lg font-bold mb-4">Lead Details</h2>
            <p><strong>Name:</strong> {selected.name}</p>
            <p><strong>Email:</strong> {selected.email || "N/A"}</p>
            <p><strong>Phone:</strong> {selected.phonenumber || "N/A"}</p>
            <p><strong>Message:</strong> {selected.message || "N/A"}</p>



            <button onClick={()=>setmodal(false)}
              className="mt-4 px-4 py-2 bg-primary text-white hover:bg-primary-600 rounded cursor-pointer"
             
            >
              Close
            </button>
          </div>
        </div>
      )}
      </div>

      <Footer />
    </div>
  );
};

export default Leads;

