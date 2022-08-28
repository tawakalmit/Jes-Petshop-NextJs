import Image from "next/image"

export default function Produk_card() {
  return (
    <div className='w-36 h-fit mb-5 cursor-pointer bg-[#3498db] rounded-2xl  hover:opacity-70'>
        <Image src="/1.png" width={300} height={300} className="rounded-t-2xl" />
        <div className="pb-2">
            <p className="text-sm text-white text-center">Royal Canin Kitten</p>
            <p className="text-sm text-white text-center">Rp 200.000</p>
        </div>
    </div>
  )
}
