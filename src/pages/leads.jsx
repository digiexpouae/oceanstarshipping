// import React, { useEffect, useState } from 'react';
// import Header from '@/layout/header/header';
// import Footer from '@/layout/footer/footer';
// import { sanityClient } from './api/form';

// const Leads = () => {
//   const [leads, setLeads] = useState([]);

//   useEffect(() => {
//     sanityClient
//       .fetch('*[_type == "formSubmission"]{name,email,phoneno,message}')
//       .then(setLeads)
//       .catch(console.error);
//   }, []);

//   return (
//     <div>
//       <Header />

// <div className='flex items-center justify-center w-full'>
//       <table border="1"className='w-[80%]' >
//         <thead  >
//           <tr  className='flex justify-between w-full'> 
//             <th className='w-[20%]'>Name</th>
//             <th className='w-[20%]'>Email</th>
//             <th>Phone No</th>
//             <th>Message</th>
//           </tr>
//         </thead>
//         <tbody>
//           {leads.length === 0 ? (
//             <tr>
//               <td colSpan="4">No leads found</td>
//             </tr>
//           ) : (
//             leads.map((lead, index) => (
//               <tr key={index} className='flex justify-between w-full'>
//                 <td className='w-[20%]'>{lead.name}</td>
//                 <td  className='w-[20%]'>{lead.email}</td>
//                 <td  className='w-[20%]'>{lead.phoneno || 'N/A'}</td>
//                 <td  className='w-[20%]'>{lead.message}</td>
//               </tr>
//             ))
//           )}
//         </tbody>
//       </table>
//       </div>
//       <Footer />

//     </div>
//   );
// };

// export default Leads;
import React, { useEffect, useState } from 'react';
import Header from '@/layout/header/header';
import Footer from '@/layout/footer/footer';
import { sanityClient } from './api/form';

const Leads = () => {
  const [leads, setLeads] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch('*[_type == "formSubmission"]{name,email,phonenumber,message}')
      .then(setLeads)
      .catch(console.error);
  }, []);

  return (
    <div>
      <Header />

      <div className="flex items-center justify-center w-full">
        <table className="w-[80%] border border-collapse border-gray-300">
          <thead>
            <tr className="bg-[#161647] text-center text-white">
              <th className="border border-primary-300 ">Name</th>
              <th className="border border-primary-300 px-4 py-2">Email</th>
              <th className="border border-primary-300 px-4 py-2">Phone No</th>
              <th className="border border-primary-300 px-4 py-2">Message</th>
              <th> View Details</th>
            </tr>
          </thead>
          <tbody>
            {leads.length === 0 ? (
              <tr>
                <td colSpan="4" className="text-center py-4">No leads found</td>
              </tr>
            ) : (
              leads.map((lead, index) => (
                <tr key={index} className="text-center">
                  <td className="border border-gray-300 px-4 py-2">{lead.name}</td>
                  <td className="border border-gray-300 px-4 py-2">{lead.email}</td>
                  <td className="border border-gray-300 px-4 py-2">{lead.phonenumber || 'N/A'}</td>
                  <td className="border border-gray-300 px-4 py-2">{lead.message}</td>
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
