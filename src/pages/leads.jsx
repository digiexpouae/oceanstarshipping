import React, { useEffect, useState } from 'react'
import Header from '@/layout/header/header'
import Footer from '@/layout/footer/footer'
import { sanityClient } from './api/form'
const leads = () => {
    const [leads, setLeads] = useState([]);
  
    useEffect(() => {
    sanityClient 
      .fetch('*[_type == "formSubmission"]{name,email,message}')
        .then(setLeads)
        .catch(console.error);
    }, []);
  
return (
  <div>
        <Header />
    <div>
      <h1>Admin Dashboard - Leads</h1>
      {leads.length === 0 ? (
        <p>No leads found</p>
      ) : (
        leads.map((lead, index) => (
          <div key={index} style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
            <p><strong>Name:</strong> {lead.name}</p>
            <p><strong>Email:</strong> {lead.email}</p>
            <p><strong>Phone No:</strong> {lead.phoneno}</p>
            <p><strong>Message:</strong> {lead.message}</p>
          </div>
        ))
      )}
    </div>

        <Footer />
 
    </div>
  )
}

export default leads