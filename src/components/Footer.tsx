import React from 'react'
import Link from 'next/link'
const Footer = () => {
  return (
    <div className=' mt-5 pt-20 pb-10 flex justify-center items-center flex-col '>
      <div className='flex flex-col sm:flex-row gap-5 justify-center items-center'>
        <div><Link href="https://github.com/Aligadit1">Github</Link></div>
      <div><Link href="https://www.linkedin.com/in/muhammad-ali-gadit-07932b2b9/">Linkedin</Link></div>
      <div><Link href="https://www.instagram.com/gaditali/">Instagram</Link></div>
      </div>
      <div className='mt-3 justify-center text-center'>Copyright © 2024 ResumeBuilder.All Rights Reserved-Made with ♥ ♥ by AliGadit</div>
    </div>
  )
}

export default Footer
