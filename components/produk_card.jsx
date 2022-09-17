import Image from "next/image"
import { MdOutlineAddShoppingCart } from 'react-icons/md'

export default function Produk_card({title, price, image}) {
  return (
    <div className='w-36 h-fit mb-5 cursor-pointer bg-white rounded-2xl  hover:opacity-70'>
        <Image src={image} width={300} height={300} className="rounded-t-2xl" />
        <div className="px-2 pb-2">
            <p className="text-sm text-center">{title}</p>
        </div>
        <div className="flex justify-center items-center p-3 bg-[#3498db] rounded-b-2xl text-white text-sm"><p className="text-sm text-center">IDR {price}</p></div>
    </div>
  )
}
