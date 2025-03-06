import React from 'react'
import Image from 'next/image'
import img1 from '../../../public/assets/Layer_1.png'
import img2 from '../../../public/assets/Layer_1 (1).png'
import img3 from '../../../public/assets/Layer_1 (2).png'
import img4 from '../../../public/assets/Layer_1 (3).png'
import img5 from '../../../public/assets/Layer_1 (4).png'
import img6 from '../../../public/assets/Layer_1 (5).png'
const service = () => {
    const box=[{image:img1,heading:'Extensive Product Range',text:'We offer a diverse selection of electronic products to meet all your needs'},{image:img2,heading:'Corporate Solutions',text:'We specialize in bulk orders, customized solutions, and dedicated account management for businesses.'},{image:img3,heading:'Competitive Pricing',text:'Our strong supplier relationships enable us to provide cost-effective solutions'},{image:img4,heading:'Reliable Service',text:' Our team is committed to delivering exceptional customer service at every stage.'},{image:img5,heading:'Fast Delivery',text:'We understand the importance of timely delivery and offer efficient logistics to meet your deadlines.'},
        {image:img6,heading:'After-Sales Support',text:'Our dedicated support team is always available to assist with any queries or issues post-purchase.'}
    ]
  return (
    <div className='w-full flex items-center justify-center'>
    <div className='w-[80%] flex flex-col items-center justify-center'>
        <h2 className='uppercase font-extrabold font-heading text-primary w-[80%] md:w-[60%] text-[25px] md:text-[45px] text-center'>Why Choose
        Ocean Star</h2>
        <div className='flex flex-col md:grid md:grid-cols-2  lg:grid-cols-3 w-full'> 
    {box.map((elem,index)=>{
        return <div key={index} className='flex flex-col justify-center items-center h-[200px] md:h-[308px] w-full'>
            <div className='flex items-center justify-center w-full'><Image src={elem.image} height={45} width={45} /></div>
          <div className='h-[98px] w-full text-center'>
            <div className='text-primary text-[25px]'>{elem.heading}</div>
            <span className='text-center'>{elem.text}</span>
            </div>
        </div>
    })

    }
        </div>
    </div>
 </div> )
}

export default service