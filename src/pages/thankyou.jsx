import React from 'react'
import Header from '@/layout/header/header'
import Footer from '@/layout/footer/footer'
const thankyou = () => {
  return (
  <>
  <Header />
  <div className='h-[500px] flex  flex-col items-center justify-center'><div className='font-extrabold text-primary text-[50px] md:text-[74px] font-heading uppercase'>Thankyou</div>
  <div><p>Your form has been submitted sucessfully</p>
  
  </div>
  </div>
  <Footer/>
  </>  
  )
}

export default thankyou