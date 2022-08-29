import { MdLogout } from "react-icons/md"

export default function Adminnav({page}) {
  return (
    <div className="bg-[#ecf0f1] w-full h-14 shadow-md flex items-center">
        <div className="flex justify-between w-10/12 mx-auto">
            <div>{page}</div>
            <div><MdLogout size={20} className="cursor-pointer" /></div>
        </div>
    
    </div>
  )
}
