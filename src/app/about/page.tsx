import MainHeading from '@/components/MainHeading'
import Image from 'next/image'
import React from 'react'
import { client } from '@/sanity/lib/client'
const page = async () => {
    const aboutData = await client.fetch(`*[_type == "aboutPage"][0]{
        section1Heading,
        section1Paragraph,
        section2Heading,
        section2Paragraph1,
        section2Paragraph2,
        section2Paragraph3,
        section2Paragraph4,
        section3Heading,
        section3Paragraph1,
        section3Paragraph2
      }`)
  return (
    <div className='w-[90%] max-w-[1440px] mx-auto'>
      <MainHeading MainHeading='Ali Gadit'/>
      <div className='flex items-center justify-center'>
      <Image src="/hero.png" alt='My Picture' height={556} width={1216} className='w-[800px] h-[556px] object-fill my-20 ' />
      </div>
      <div className=' flex flex-col gap-[2rem]'>
        <div className=' flex flex-col gap-[1rem]'>
            <h1 className='font-inter font-semibold text-lg md:text-xl lg:text-2xl'>{aboutData.section1Heading}</h1>
            <p className='text-sm sm:text-base md:text-lg text-[#1a1a2e] dark:text-[#C0C5D0]'>{aboutData.section1Paragraph}</p>
        </div>
        <div className='flex flex-col gap-[1rem]'>
            <h1 className='font-inter font-semibold text-lg md:text-xl lg:text-2xl '>{aboutData.section2Heading}</h1>
            <ul className='list-disc text-sm sm:text-base md:text-lg text-[#1a1a2e] dark:text-[#C0C5D0]  '>
            <li>{aboutData.section2Paragraph1}</li>
            <li>{aboutData.section2Paragraph2}</li>
            <li>{aboutData.section2Paragraph3}</li>
            <li>{aboutData.section2Paragraph4}</li>
            </ul>
        </div>
        <div className='flex flex-col gap-[1rem]'>
        <h1 className='font-inter font-semibold text-lg md:text-xl lg:text-2xl'>{aboutData.section3Heading}</h1>
        <ul className='list-disc text-sm sm:text-base md:text-lg text-[#1a1a2e] dark:text-[#C0C5D0]'>
            <li>{aboutData.section3Paragraph1}</li>
            <li>{aboutData.section3Paragraph2}</li>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default page
