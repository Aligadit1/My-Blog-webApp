type Props ={
    name: string
}

const PurpleBtn = (Props:Props) => {
  return (
<div className="bg-[#F9F5FF] dark:bg-white py-[2px] px-2  rounded-full text-[#6941C6] font-[inter] font-medium text-sm">{Props.name}

</div>
  )
}

export default PurpleBtn
