// import React, { useState,useEffect } from 'react'
// import Image from 'next/image'
// import Link from 'next/link'
// import blogimage from '../../public/assets/image (1).png'
// import arrow from '../../public/assets/Vector (6).svg'
// import heroimage from '../../public/assets/Rectangle 34 (2).png'
// import { client } from '../sanity/lib/client'
// import { urlFor } from "@/sanity/lib/image";

// const blogs = ({Homepage,searchvalue}) => {
//   const [show, setShow] = useState(true);
//   const [blog_data, setBlogData] = useState([]);

//   useEffect(() => {
//     client
//       .fetch('*[_type == "blog"] | order(_createdAt desc) {title, "imageUrl": Image.asset._ref, publishedDate, slug}')
//       .then((data) => setBlogData(data))
//       .catch(console.error);
//   }, []);
//   const searchFilter = blog_data.filter((elem) =>
//     elem.title.toLowerCase().includes((searchvalue||"").toLowerCase())
//   );
//   console.log(Homepage)

//   const filteredData = Array.isArray(blog_data) ? (Homepage === true? searchFilter : blog_data.slice(0, 3)) : [];
//   console.log(filteredData)
 
//   return (
//     <>
//     <div className='h-[200]  flex flex-col lg:grid lg:grid-cols-3 place-items-center'>
//     {filteredData.map((elem,index) => (
//       <div key={index}>
//         <div className='flex flex-col bg-primary w-[250px] h-[282px] md:w-[300px] md:h-[390px] text-white mb-4'>
//           <div className='w-[250px] h-[100px] md:w-full md:h-[160px] relative'>
//             <Image src={urlFor(elem.imageUrl)} layout='fill' objectFit='cover' />
//           </div>
//           <div className="h-[182px] md:w-[288px] w-[250px] px-3 py-7">
//             <div className='flex justify-between font-thin text-[12px] md:text-[16px]'>
//               <div className='bg-white/10 px-3 py-1'>Press Release</div>
//               <div className='bg-white/10 px-3 py-1'>{elem.publishedDate}</div>
//             </div>
//             <div className='text-white truncate text-[14px] md:text-[20px] leading-8 md:w-[280px] w-[200px] h-[72px] mt-2'>
//               {elem.title}
//             </div>
//             <div className='flex items-center w-[101px] gap-[10px]'>
//               <button className='text-[14px]'>Read More</button>
//               <div><Link href={`/blogs/${elem.slug.current}`}><Image src={arrow}/></Link></div>
//             </div>
//           </div>
//         </div>
//       </div>
//     ))}
//     </div>
//     </>
//   )
// } 

// export default blogs
