import BlueBtn from "@/components/BlueBtn";
import MainHeading from "@/components/MainHeading";
import PinkBtn from "@/components/PinkBtn";
import PurpleBtn from "@/components/PurpleBtn";
import Image from "next/image";
import { MdArrowOutward } from "react-icons/md";
import { Blogs,hero1,hero2,hero3 } from "@/data/data";
import Link from "next/link";
const BlogPage = () => {
  return (
    <div className="max-w-[1440px] mx-auto">
      <MainHeading MainHeading="THE BLOG" />
      <div className="mt-10 px-5 ">
        <h3 className="text-base md:text-lg lg:text-xl xl:text-2xl font-semibold font-[inter]">Recents blog posts </h3>
        {/* main container for controlling grid system for responsiveness */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">

          {/* Hero section is divided into 3 parts to ensure layout while ensuring responsiveness  */}
          {/* Hero 1 */}
          <div className="mt-5 flex flex-col gap-5 hover:scale-105 transition-all">
            <Link href={hero1.href}>
            <Image src={hero1.img} alt="Image" height={228} width={992} />
            <p className="text-[#6941C6] font-[inter] font-semibold text-sm ">{hero1.date}</p>
            <div className="flex justify-between items-center font-[inter] font-semibold text-lg md:text-xl lg:text-2xl">
              <h4>{hero1.title}</h4>
              <MdArrowOutward />
            </div>
            <p className="font-[inter] text-base text-[#667085] dark:text-[#C0c5d0]">{hero1.content}</p>
            <div className="flex gap-2 font-[inter] font-medium text-sm">
              <PurpleBtn name={hero1.purpleBtn} />
              <BlueBtn name={hero1.blueBtn}/>
              <PinkBtn name={hero1.pinkBtn} />
            </div>
            </Link>
          </div>

          {/* Hero 2 contains to divs  */}
          <div className="mt-5 flex flex-col gap-5">
          {hero2.map((hero)=>{
            return(
              <div key={hero.id}>
              <Link href={hero.href}>
            <div className="flex flex-col sm:flex-row gap-5 hover:scale-105 transition-all">
              <div>
                <Image
                  src={hero.img}
                  alt="Image"
                  height={200}
                  width={620}
                  className="h-full"
                />
              </div>
              <div className=" flex flex-col gap-4 ">
                <p className="text-[#6941C6] font-[inter] font-semibold text-sm ">{hero.date}</p>
                <h4 className="font-[inter] font-semibold text-sm lg:text-lg">{hero.title}</h4>
                <p className="font-[inter] text-base text-[#667085] dark:text-[#C0c5d0]">{hero.content}</p>
                <div className="flex gap-2 font-[inter] font-medium text-sm">
                  <BlueBtn name={hero.blueBtn} />
                  <PinkBtn name={hero.pinkBtn} />
                </div>
              </div>
            </div>
            </Link>
            </div>
            )
            })}
          </div>

          {/* Hero 3 is also in two parts due to the layout while ensuring display:grid this one blog is divided in to 2 div   */}
          <div className="hover:scale-105 transition-all">
            <Link href={hero3.href}>
            <Image
              src={hero3.img} alt="image" height={228} width={992} className="h-[228px]"/>
              </Link>
          </div>
          <div className="hover:scale-105 transition-all">
          <Link href={hero3.href}>
            <p className="text-[#6941C6] font-[inter] font-semibold text-sm ">{hero3.date}</p>
            <div className="flex justify-between items-center font-[inter] font-semibold text-lg md:text-xl lg:text-2xl">
              <h4>{hero3.title}</h4>
              <MdArrowOutward />
            </div>
            <p className="font-[inter] text-base text-[#667085] dark:text-[#C0c5d0]">{hero3.content}</p>
            <div className="flex gap-2 font-[inter] font-medium text-sm">
              <PurpleBtn name={hero3.purpleBtn}/>
              <PinkBtn name={hero3.pinkBtn} />
            </div>
            </Link>
          </div>
        </div>

        {/* All blog posts are displayed here with using map function on one card to display all the data from data folder */}
        <div className="mt-10 ">
          <h3 className="text-base md:text-lg lg:text-xl xl:text-2xl font-semibold font-[inter]">All blog posts</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 ">
            {Blogs.map((blog) => {
              const {id,image,title,content,date,blueButton,pinkButton,purpleButton,href,} = blog;
              return (
                <div key={id} className="flex flex-col gap-5 mt-5 hover:scale-105 transition-all">
                  <Link href={href}>
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
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
