import React from 'react'
import Footer from '@/layout/footer/footer'
import Bannertwo from '../../common/bannertwo'
import Header from '../../layout/header/header'
import Feature from '@/common/feature'
import Banner from '@/common/herobanner'
import Blogs from '@/common/blogs'
import heroimage from '../../../public/assets/Rectangle 34 (2).png'
import Search from './search'
const index = () => {
  return (
<>
<Header />
<Banner  image={heroimage}  tag={<>OUR <br /> BLOGS</>}/>
<div className='flex flex-col justify-between gap-15'>
<Search />
<Blogs Homepage={true} />
<Bannertwo />
<Feature />
<Footer />
</div>
</>
  )
}

export default index
