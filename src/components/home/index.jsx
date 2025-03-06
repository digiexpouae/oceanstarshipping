import React from 'react'
import Herobanner from './herobanner'
import Footer from '@/layout/footer/footer'
import Products from './products'
import Blogs from '../../common/blogs'
import Bannerone from './bannerone'
import Slider from '../../common/slider'
import Bannertwo from '../../common/bannertwo'
import Header from '../../layout/header/header'
import Feature from '../../common/feature'
const index = () => {
  return (
  <>
  <div className='flex flex-col justify-between'>
      <Header />
   <Herobanner />
   <Slider />
   <Products />
   <Bannerone />
   <Blogs />
   <Bannertwo />
   <Feature />
   <Footer />
   </div>
  </>
  )
}

export default index
