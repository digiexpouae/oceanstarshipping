import { blog_data } from "@/common/blogs";
import Header from "@/layout/header/header";
import Footer from "@/layout/footer/footer";
import Feature from "@/common/feature";
import Bannertwo from "@/common/bannertwo";
import Herobanner from "@/common/herobanner";
import imagetwo from '../../../public/assets/Rectangle 34 (6).png'

export async function getStaticPaths() {
    const paths = blog_data.map((blog) => ({
      params: { id: blog.id }, // Each blog's ID is used to create a dynamic path
    }));
  
    return { paths, fallback: false }; // No new paths can be created at runtime
  }
  



export async function getStaticProps({params}){
    const dynamic_blog=(blog_data.find((p)=>p.id == params.id))
    console.log(dynamic_blog)
    return {props: {dynamic_blog}}

}
const Blog_post = ({dynamic_blog}) => {
    const {heading,image,release,date}=dynamic_blog
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <Header />
      <Herobanner image={imagetwo}/>
      <div className="w-[80%] flex flex-col gap h-[900px]">
      <h1 className="text-[20px] md:text-[45px] font-heading text-primary font-extrabold ">{heading}</h1>
    <div className="flex gap-3 m-4"><button className="btn text-nowrap text-[10px] md:text-[12px]">{release}</button><button className="btn text-nowrap text-[10px] md:text-[12px]">{date}</button></div>

      <p className="text-[12px] md:text-[20px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut luctus, magna sed efficitur congue, dui nisi viverra sapien, sit amet commodo mauris lectus a nunc. In placerat quam sed tellus aliquam tempor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec ultrices hendrerit sodales. Nullam non magna nec elit fermentum bibendum eget eu lorem. Maecenas auctor orci et ligula cursus, id facilisis enim dapibus. Duis vel libero mattis, egestas leo sit amet, semper est. Aliquam ut elit et odio eleifend consequat. Nulla lobortis pretium iaculis.

Praesent porta at elit eget cursus. Quisque sollicitudin ex quis purus volutpat, quis tincidunt mauris ultricies. Nullam sodales leo nunc. In pellentesque aliquam erat mattis porta. Praesent tempus tempor enim vitae hendrerit. Etiam turpis quam, blandit eget pretium eu, venenatis id sapien. Aliquam et congue urna, id pulvinar lorem. Maecenas eget quam mauris. In tristique libero quis faucibus fringilla. Nam ac sem imperdiet, dignissim leo laoreet, cursus est.

Nunc urna odio, auctor non ultricies cursus, faucibus ut ex. Aenean sit amet bibendum magna. Pellentesque id sapien ligula. Curabitur venenatis dolor nec blandit fringilla. In vitae erat vel ligula convallis bibendum sed ut nunc. Mauris non nibh vestibulum sem dignissim egestas. Integer ut sapien in justo cursus convallis. Aliquam aliquet nulla ut nisl feugiat aliquet. Vestibulum commodo efficitur augue quis molestie. Nullam semper cursus eros quis efficitur. Morbi vitae interdum lacus, eget facilisis justo. Vestibulum ut blandit sem. Nullam quis mauris vel eros mollis sollicitudin viverra eu mauris.</p>
    <div className="flex w-ful items-center justify-center gap-3  m-4"><button className="btn text-[12px]">Previous</button> <button className="btn  text-[12px]">Next</button></div>
      </div>
        <Bannertwo />
        <Feature />
        <Footer />


    </div>
  )
}

export default Blog_post
