type Props ={
    name: string
}
const PinkBtn = (Props:Props) => {
  return(
    <div className="bg-[#FDF2FA] dark:bg-white py-[2px] px-2  rounded-full text-[#C11574] font-[inter] font-medium text-sm">{Props.name}</div>
  )
}

export default PinkBtn
