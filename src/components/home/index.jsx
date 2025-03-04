import React from 'react'
import Herobanner from './herobanner'
import Footer from '@/layout/footer/footer'
import Products from './products'
import Blogs from './blogs'
import Bannerone from './bannerone'
import Slider from './slider'
import Bannertwo from './bannertwo'
import Header from '../../layout/header/header'
const index = () => {
  return (
  <>
  <div className='flex flex-col gap-10'>
      <Header />
     

   <Herobanner />
   <Slider />
   <Products />
   <Bannerone />
   <Blogs />
   <Bannertwo />
   <Footer />
   </div>
  </>
  )
}

export default index
