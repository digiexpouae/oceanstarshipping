import React from 'react'
import Header from '@/layout/header/header'
import Footer from '@/layout/footer/footer'
import Bannertwo from '../../common/bannertwo'
import Feature from '@/common/feature'
import Banner from '../../common/herobanner'
import brnadsbanner from '../../../public/assets/Rectangle 34 (4).png'
import Brand from './brand'
const index = () => {
  return (
    <div>
        <Header />
        <Banner image={brnadsbanner} tag={<>Top Global <br /> Brands</>}/>
        <div className='flex flex-col justify-between gap-20'>

        <Brand />
    <Bannertwo />
        <Feature />
        <Footer />
        </div>
    </div>
  )
}

export default index
