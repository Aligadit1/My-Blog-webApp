import React from 'react'
type Props ={
    name: string
}
const BlueBtn = (Props:Props) => {
  return (
<div className="bg-[#EEF4FF] dark:bg-white py-[2px] px-2  rounded-full text-[#3538CD] font-[inter] font-medium text-sm">{Props.name}</div>
  )
}

export default BlueBtn