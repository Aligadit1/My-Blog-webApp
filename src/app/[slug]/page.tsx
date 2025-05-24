import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
// Query to fetch the blog post by slug
import MainHeading from "@/components/MainHeading";
import RecommendBlog from "@/components/RecommendBlog";
import { PortableText } from "next-sanity";
import Comment from "@/components/Comment";
const DynamicBlog = async ({params}:{params:{slug:string}}) => {
    const query = groq`*[_type == "blog" && slug.current == $slug][0]{
    title,
    content,
    date,
    author,
    "imageUrl": image.asset->url
    }`
    const blog = await client.fetch(query,{slug:params.slug})
    if (!blog) return <div className="flex items-center justify-center">
        <MainHeading MainHeading="Not found"/></div>
  return (
    <div className="flex flex-col md:flex-row gap-10 max-w-[1440px] xl:mx-auto mx-5">
      <div className="md:w-[90%] gap-5 flex flex-col">
       <p className="font-[inter] font-semibold text-[#6941C6] text-xs md:text-sm ">{blog.date}</p> 
       <Image src={blog.imageUrl} alt={blog.title} width={778} height={426} />
       <h1 className="font-bold text-lg md:text-2xl lg:text-3xl">{blog.title}</h1>
       <div className="font-[inter] ">
        <PortableText value={blog.content}/></div>
       <Comment/>
       <p className="font-semibold text-[#6941c6] text-sm md:text-base">Author: {blog.author}</p>
       </div>
      <div className=" md:w-[30%]">
        <RecommendBlog/>
      </div>
      
    </div>
  )
}

export default DynamicBlog
