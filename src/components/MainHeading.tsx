import React from 'react'
type Props = {
   MainHeading : string
}
const MainHeading = (Heading:Props) => {
  return (
    <div>
    <hr className="border-black dark:border-white mt-10 border-t-[2px]" />
    <div className="mx-auto">
    <h1 className="text-black dark:text-white text-[60px] sm:text-[72px] md:text-[146px] xl:text-[200px] font-bold font-[inter] leading-[auto] flex items-center justify-center">{Heading.MainHeading}</h1>
    <hr className="border-black dark:border-white border-t-[2px]" />
    </div>
    </div>
  )
}

export default MainHeading
