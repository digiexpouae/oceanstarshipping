import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import arrow from '../../public/assets/Vector (6).svg';
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';

const Blogs = ({ Homepage }) => {
  const [blog_data, setblog_data] = useState([]);

  useEffect(() => {
    client
      .fetch('*[_type == "blog"] | order(_createdAt desc) { _id, title, "imageUrl": Image.asset._ref, publishedDate, slug }')
      .then(setblog_data)
      .catch(console.error);
  }, []);

  const filtereddata = blog_data.length > 0 ? (Homepage ? blog_data : blog_data.slice(0, 3)) : [];

  return (
    <div className="h-[200] flex flex-col lg:grid lg:grid-cols-3 place-items-center">
      {filtereddata.map((elem) => (
        <div key={elem._id}>
          <div className="flex flex-col bg-primary w-[250px] h-[282px] md:w-[300px] md:h-[390px] text-white mb-4">
            <div className="w-[250px] h-[100px] md:w-full md:h-[160px] relative">
              <Image   src={urlFor(elem.imageUrl)} 
  layout="fill" objectFit="cover" alt={elem.title} />
            </div>
            <div className="h-[182px] w-[288px] px-3 py-7">
              <div className="flex justify-between font-thin text-[12px] md:text-[16px]">
                <div className="bg-white/10 px-3 py-1">Press Release</div>
                <div className="bg-white/10 px-3 py-1">{elem.publishedDate}</div>
              </div>
              <div className="text-white truncate text-[14px] md:text-[20px] leading-8 md:w-[300px] h-[72px]">
                {elem.title}
              </div>
              <div className="flex items-center w-[101px] gap-[10px]">
                <button className="text-[14px]">Read More</button>
                <div>
                  <Link href={`/blogs/${elem.slug.current}`}>
                    <Image src={arrow} alt="Arrow" />
                  </Link>
                  {console.log(filtereddata)}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Blogs;
