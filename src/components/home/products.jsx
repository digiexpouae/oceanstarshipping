import React, { useState } from 'react';
import Image from 'next/image';
import headphones from '../../../public/assets/headphone.png';
import mobilephone from '../../../public/assets/pngegg.png';
import tablets from '../../../public/assets/pngegg (1).png';
import LED from '../../../public/assets/Led.png';
import playstation from '../../../public/assets/erasebg-transformed.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

const Products = () => {
  const images = [
    { image: headphones, link: '/', title: 'Headphones', description: 'product description' },
    { image: mobilephone, link: '/', title: 'Mobile phones', description: 'product description' },
    { image: tablets, link: '/', title: 'Tablets', description: 'product description' },
    { image: LED, link: '/', title: 'LED', description: 'product description' },
    { image: playstation, link: '/', title: 'Other Accessories', description: 'product description' }
  ];

  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="h-full">
      <h3 className="text-[22px] text-primary md:text-[50px] underline mb-3 md:mb-8 font-heading font-bold text-center">
        PRODUCTS
      </h3>
      <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 gap-x-[2px] gap-y-15 place-items-center w-full mb-[17px] md:mb-0">
        {images.map((elem, index) => (
          <div
            key={index}
            className="bg-[#F6F6F6] w-[300px] h-[260px] md:h-[300px] xl:w-[370px] lg:h-[300px] flex flex-col justify-end items-center relative
            hover:shadow-lg transition duration-200 ease-in-out cursor-pointer"
          >
            <div className="h-[85%] w-[220px] md:w-[270px] xl:w-[268px] flex flex-col justify-center items-center">
              <Image src={elem.image} alt={elem.title} />
            </div>

            <div
              className="flex justify-between items-center w-full px-4 h-[20%] cursor-pointer"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <div
                
                className="h-[15%] md:text-start w-full py-6 px-[18px] text-primary text-start flex items-center font-bold"
              >
                {elem.title}
              </div>
             <div className='w-4 h-4 block'> <FontAwesomeIcon icon={faCaretDown} color="#161647" className="cursor-pointer border-box w-full h-full !overflow-hidden" /></div>
            </div>

            {openIndex === index && (
              <div className="absolute top-[100%] h-16 left-0 right-0 bottom-0 rounded-br-xl rounded-bl-xl
               bg-[#F6F6F6] shadow-md flex items-center justify-center p-0 z-10">
                {elem.description}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
