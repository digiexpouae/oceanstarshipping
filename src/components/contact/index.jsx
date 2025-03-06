import React from 'react'
import Header from '@/layout/header/header'
import Banner from '@/common/herobanner'
import Feature from '@/common/feature'
import Footer from '@/layout/footer/footer'
import hero_img from '../../../public/assets/contact.png'
import Form from '../forms/form'
const index = () => {
  return (
    
<>
<Header />
<Banner image={hero_img} tag={<>Contact <br /> 
Us Today</>}/>
<Form />
<Feature />
<Footer />
</>
  )
}

export default index
