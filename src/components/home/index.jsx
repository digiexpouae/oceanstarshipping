import React from 'react'
import Herobanner from './herobanner'
import Footer from '@/layout/footer/footer'
import Products from './products'
import Blog from './blog_section'
import Bannerone from './bannerone'
import Slider from '../../common/slider'
import Bannertwo from '../../common/bannertwo'
import Header from '../../layout/header/header'
import Feature from '../../common/feature'
const index = () => {
  return (
  <>
        <Header />
  <div className='flex flex-col justify-between gap-5'>

   <Herobanner />
   <Slider />
   <Products />
   <Bannerone />
   <Blog />
   <Bannertwo />
   <Feature />
   <Footer />
   </div>
  </>
  )
}

export default index
