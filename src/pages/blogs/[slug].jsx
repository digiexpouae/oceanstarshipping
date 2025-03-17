import { blog_data } from "@/common/blogs";
import Header from "@/layout/header/header";
import Footer from "@/layout/footer/footer";
import Feature from "@/common/feature";
import Bannertwo from "@/common/bannertwo";
import Herobanner from "@/common/herobanner";
import imagetwo from '../../../public/assets/Rectangle 34 (6).png'
import { client } from "@/sanity/lib/client";

// export async function getStaticPaths() {
//     const paths = blog_data.map((blog) => ({
//       params: { slug: blog.slug }, // Each blog's ID is used to create a dynamic path
//     }));
  
//     return { paths, fallback: false }; // No new paths can be created at runtime
//   }
  
export async function getServerSideProps(context){
const { slug } = context.params
const query=`*[_type == "blog" && slug.current == $slug][0]{
title,"slug":slug.current,content,image,publishedDate}`


try{
  const blog= await client.fetch(query,{ slug })
console.log(blog)
if (!blog) {
  // Redirect to a 404 page if no blog is found
  return {
    notFound: true,
  };
}
  return {
    props:{
      blog,
    }
  }
}
catch (error){
  console.error("Error fetching data from Sanity:", error)
return {
  props:{
    blog:null
  }
}
}

}


// export async function getStaticProps({params}){
//     const dynamic_blog=(blog_data.find((p)=>p.slug == params.slug))
//     console.log(dynamic_blog)
//     return {props: {dynamic_blog}}

// }
const Blog_post = ({blog}) => {
    const {title,image,content,publishedDate}=blog
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <Header />
      <Herobanner image={image}/>
      <div className="w-[80%] flex flex-col gap h-[900px]">
      <h1 className="text-[20px] md:text-[45px] font-heading text-primary font-extrabold ">{title}</h1>
    <div className="flex gap-3 m-4"><button className="btn text-nowrap text-[10px] md:text-[12px]">{release}</button><button className="btn text-nowrap text-[10px] md:text-[12px]">{publishedDate}</button></div>

      <p className="text-[12px] md:text-[20px]">{content}</p>
    <div className="flex w-ful items-center justify-center gap-3  m-4"><button className="btn text-[12px]">Previous</button> <button className="btn  text-[12px]">Next</button></div>
      </div>
        <Bannertwo />
        <Feature />
        <Footer />


    </div>
  )
}

export default Blog_post
