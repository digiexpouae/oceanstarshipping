import React from 'react'
import Header from '@/layout/header/header'
import Herobanner from './herobanner'
import Footer from '@/layout/footer/footer'
import Products from './products'
import Blogs from './blogs'
import Bannerone from './bannerone'
import Slider from './slider'
import Bannertwo from './bannertwo'
const index = () => {
  return (
  <>
   <Header />
   <Herobanner />
   <Slider />
   <Products />
   <Bannerone />
   <Blogs />
   <Bannertwo />
   <Footer />
  </>
  )
}

export default index
