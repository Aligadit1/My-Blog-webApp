import React from 'react'
import BlueBtn from "@/components/BlueBtn";
import MainHeading from "@/components/MainHeading";
import PinkBtn from "@/components/PinkBtn";
import PurpleBtn from "@/components/PurpleBtn";
import Image from "next/image";
import { MdArrowOutward } from "react-icons/md";
import { Blogs } from '@/data/data';
const BlogPage = () => {
  return (
    <div className="max-w-[1440px] mx-auto">
        <MainHeading MainHeading="THE BLOG" />
        <div className="mt-10 px-5 ">
          <h3 className="text-base md:text-lg lg:text-xl xl:text-2xl font-semibold font-[inter]">Recents blog posts</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            <div className="mt-5 flex flex-col gap-5">
              <Image src="/UX.png" alt="Image" height={228} width={992} />
              <p className="text-[#6941C6] font-[inter] font-semibold text-sm ">Thursday , 2 jan 2025 </p>
              <div className="flex justify-between items-center font-[inter] font-semibold text-lg md:text-xl lg:text-2xl">
              <h4>UX review presentations</h4>
              <MdArrowOutward />
               </div>
               <p className="font-[inter] text-base text-[#667085] dark:text-[#C0c5d0]">How do you create compelling presentations that wow your
                 colleagues and impress your managers?</p>
               <div className="flex gap-2 font-[inter] font-medium text-sm">
                <PurpleBtn name="Design" />
                <BlueBtn name="Research" />
                <PinkBtn name="Presentation"/>
               </div>
            </div>
            <div className="mt-5 flex flex-col gap-5">
              <div className="flex flex-col sm:flex-row gap-5">
                <div>
                <Image src="/Linear.png" alt="Image" height={200} width={620} className="h-full" />  
                </div>
                <div className=" flex flex-col gap-4 ">
              <p className="text-[#6941C6] font-[inter] font-semibold text-sm ">Thursday , 2 jan 2025 </p>
              <h4 className="font-[inter] font-semibold text-sm lg:text-lg">Migrating to Linear 101</h4>
              <p className="font-[inter] text-base text-[#667085] dark:text-[#C0c5d0]">Linear helps streamline software projects,
                 sprints, tasks, and bug tracking. Here is how to get...</p>
              <div className="flex gap-2 font-[inter] font-medium text-sm">
                <BlueBtn name="Design" />
                <PinkBtn name="Research"/>
               </div>
              </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-5 ">
                <div>
              <Image src="/API.png" alt="Image" height={200} width={620} className="h-full" />
              </div>  
                <div className=" flex flex-col gap-4 ">
              <p className="text-[#6941C6] font-[inter] font-semibold text-sm ">Thursday , 2 jan 2025 </p>
              <h4 className="font-[inter] font-semibold text-sm lg:text-lg">Building Your API Stack</h4>
              <p className="font-[inter] text-base text-[#667085] dark:text-[#C0c5d0]">The rise of RESTful APIs has been met by a rise in tools for
                 creating, testing, and manag...</p>
              <div className="flex gap-2 font-[inter] font-medium text-sm">
                <BlueBtn name="Design" />
                <PinkBtn name="Research"/>
               </div>
              </div>
              </div>
            </div>
            <div>
              <Image src="/Grid.png" alt="image" height={228} width={992} className="h-[228px]"/>
            </div>
            <div>
            <p className="text-[#6941C6] font-[inter] font-semibold text-sm ">Thursday , 2 jan 2025 </p>
              <div className="flex justify-between items-center font-[inter] font-semibold text-lg md:text-xl lg:text-2xl">
              <h4>Grid system for better Design User Interface</h4>
              <MdArrowOutward />
               </div>
               <p className="font-[inter] text-base text-[#667085] dark:text-[#C0c5d0]">A grid system
                 is a design tool used to arrange content on a webpage.
                 It is a series of vertical and horizontal lines that create a matrix of intersecting points,
                  which can be used to align and organize page elements. Grid systems are used to create a consistent look and feel across a website,
                 and can help to make the layout more visually appealing and easier to navigate.</p>
               <div className="flex gap-2 font-[inter] font-medium text-sm">
                <PurpleBtn name="Design" />
                <PinkBtn name="Interface"/>
            </div>
          </div>
        </div>
        <div className='mt-10 '>
        <h3 className="text-base md:text-lg lg:text-xl xl:text-2xl font-semibold font-[inter]">All blog posts</h3>
          <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 '>{Blogs.map((blog)=>{
            const {id,image,title,content,date,blueButton,pinkButton,purpleButton} = blog;
            return(
                <div key={id} className="flex flex-col gap-5 mt-5">
                  <Image src={image} alt="Image" height={240} width={384} />
                  <div className="flex flex-col gap-3">
                    <p className="text-[#6941C6] font-[inter] font-semibold text-sm">{date}</p>
                    <div className="flex justify-between  font-[inter] font-semibold text-lg md:text-xl lg:text-2xl">
              <h4>{title}</h4>
              <MdArrowOutward />
               </div>
                    <p className="font-[inter] text-base text-[#667085] dark:text-[#C0c5d0]">{content}</p>
                    <div className="flex gap-2 font-[inter] font-medium text-sm">
                      <PurpleBtn name={purpleButton} />
                      <PinkBtn name={pinkButton} />
                      <BlueBtn name={blueButton} />
                    </div>
                  </div>
                </div>
            )
          })}</div>
          </div>
      </div>
      </div>
 
  )
}

export default BlogPage
