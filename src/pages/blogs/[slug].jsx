import { blog_data } from "@/common/blogs";
import Header from "@/layout/header/header";
import Footer from "@/layout/footer/footer";
import Feature from "@/common/feature";
import Bannertwo from "@/common/bannertwo";
import Herobanner from "@/common/herobanner";
import imagetwo from '../../../public/assets/Rectangle 34 (6).png'
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
// export async function getStaticPaths() {
//     const paths = blog_data.map((blog) => ({
//       params: { slug: blog.slug }, // Each blog's ID is used to create a dynamic path
//     }));
  
//     return { paths, fallback: false }; // No new paths can be created at runtime
//   }
  
export async function getServerSideProps(context){
const { slug } = context.params
  // Fetch all blogs sorted by publishedDate
  const query = `*[_type == "blog"] | order(publishedDate asc) {
    title, "slug":slug.current, content, "imageUrl": Image.asset._ref, publishedDate
  }`;
  
  try {
    const blogs = await client.fetch(query); // Get all blogs
    // Find the index of the current blog

    const blogIndex = blogs.findIndex((b) => b.slug === slug);
 
    // If blog not found, return 404
    if (blogIndex === -1) {
      return { notFound: true };
    }

    // Get current blog, previous blog, and next blog
    const blog = blogs[blogIndex]; // Current blog (single object)
    const prevBlog = blogs[blogIndex - 1] ?? blogs[blogs.length - 1]; 
    const nextBlog = blogs[blogIndex + 1] ?? blogs[0];
    console.log(blogs[blogIndex + 1])
    return {
      props: {
        blog,       // Single blog object
        prevBlog,   // Previous blog (if exists)
        nextBlog    // Next blog (if exists)
      }
    };
  } catch (error) {
    console.error("Error fetching data from Sanity:", error);
    return {
      props: {
        blog: null,
        prevBlog: null,
        nextBlog: null
      }
    };
  }
}



// export async function getStaticProps({params}){
//     const dynamic_blog=(blog_data.find((p)=>p.slug == params.slug))
//     console.log(dynamic_blog)
//     return {props: {dynamic_blog}}

// }
import { useRouter } from "next/router";
// const Blog_post = ({blog,prevBlog,nextBlog}) => {
//     const router=useRouter()
//     const {title,imageUrl,content,publishedDate,slug}=blog
// console.log(blog)

//     return (
//     <div className="w-full flex flex-col items-center justify-center">
//       <Header />
//       <Herobanner image={urlFor(imageUrl)}/>
//       <div className="w-[80%] flex flex-col gap h-[900px]">
//       <h1 className="text-[20px] md:text-[45px] font-heading text-primary font-extrabold ">{title}</h1>
//     <div className="flex gap-1 md:gap-3 m-4"><button className="btn text-nowrap text-[10px] md:text-[12px]">Press Release</button><button className="btn text-nowrap text-[10px] md:text-[12px]">{publishedDate}</button></div>

//       <p className="text-[12px] md:text-[20px]">{content}</p>
//     <div className="flex w-ful items-center justify-center gap-3  m-4"><button className="btn text-[12px]" onClick={() => router.push(`/blogs/${prevBlog.slug}`)}>Previous</button> <button className="btn  text-[12px]" onClick={() => router.push(`/blogs/${nextBlog.slug}`)}>Next</button></div>
//       </div>
//         <Bannertwo />
//         <Feature />
//         <Footer />


//     </div>
//   )
// }

export default Blog_post
