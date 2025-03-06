import React from 'react'
import Footer from '@/layout/footer/footer'
import Bannertwo from '../../common/bannertwo'
import Header from '../../layout/header/header'
import Feature from '@/common/feature'
import Banner from '@/common/herobanner'
import Blogs from '@/common/blogs'
import heroimage from '../../../public/assets/Rectangle 34 (2).png'
const index = () => {
  return (
<>
<Header />
<Banner  image={heroimage}  tag={<>OUR <br /> BLOGS</>}/>
<Blogs Homepage={true} />
<Bannertwo />
<Feature />
<Footer />
</>
  )
}

export default index
