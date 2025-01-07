import { Blogs } from '@/data/data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { MdArrowOutward } from 'react-icons/md';
import PurpleBtn from './PurpleBtn';
import PinkBtn from './PinkBtn';
import BlueBtn from './BlueBtn';

const RecommendBlog = () => {
  return (
    <div className='mt-10 md:mt-0'>
      <h3 className="text-base md:text-lg lg:text-xl xl:text-2xl font-semibold font-[inter]">Recent blog posts</h3>
          <div className="flex flex-col gap-5 ">
            {Blogs.map((blog) => {
              const {id,image,title,content,date,blueButton,pinkButton,purpleButton,href,} = blog;
              return (
                <div key={id} className="flex flex-col gap-5 mt-5 hover:scale-105 transition-all">
                  <Link href={href}>
                  <Image src={image} alt="Image" height={426} width={778} />
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
                  </Link>
                </div>
              );
            })}
          </div>
    </div>
  )
}

export default RecommendBlog
