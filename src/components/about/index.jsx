import React from 'react'
import Footer from '@/layout/footer/footer'
import Bannertwo from '../../common/bannertwo'
import Header from '../../layout/header/header'
import Aboutus from '../about/aboutus'
import Feature from '../../common/feature'
import Slider from '../../common/slider'
import Banner from '../../common/herobanner'
import Values from '../../components/about/values'
import Service from '../../components/about/service'
import Goal from '../../components/about/goals'
import aboutbanner from '../../../public/assets/Rectangle 34.png'
const index = () => {
  return (
    <>
    <Header />

    <Banner image={aboutbanner} tag={<>About <br /> us </>} />
    <div className='flex flex-col gap-15'>
    <Aboutus />
    <Slider />
    <Goal />
    <Values />
    <Service />
    <Bannertwo />
    <Feature />
    <Footer />
    </div>
    </>
  )
}

export default index