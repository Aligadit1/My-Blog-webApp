import MainHeading from '@/components/MainHeading'
import { projectData } from '@/data/data'
import Link from 'next/link'
import Image from 'next/image'
const page = () => {
  return (
    <div className='max-w-[1440px] mx-auto'>
      <MainHeading MainHeading='Projects' />
      <div className='w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12'>
       {projectData.map((project)=>{
        const {id,image,url,name} = project
        return <div key={id} className=' hover:scale-105 transition-all duration-300 mt-20 flex items-center justify-center'>
            <Link href={url} target='_blank'>
            <Image src={image} alt='Image' height={400} width={300} className='w-full h-full max-w-[300px] max-h-[400px]'/>
            <p className='text-center mt-2 hover:underline'>{name}</p>
            </Link>
        </div>

       })}
      </div>
    </div>
  )
}

export default page
