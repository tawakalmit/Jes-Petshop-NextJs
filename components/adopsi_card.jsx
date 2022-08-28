import Image from "next/image"

export default function Adopsi_card() {
  return (
    <div className='w-36 h-fit mb-5 cursor-pointer bg-[#3498db] rounded-2xl  hover:opacity-70'>
        <Image src="/9.png" width={300} height={300} className="rounded-t-2xl" />
        <div className="pb-2">
            <p className="text-sm text-white text-center font-semibold">Kucing Lucu</p>
            <p className="text-sm text-white text-center opacity-70">Jenis : Persia</p>
            <p className="text-sm text-white text-center opacity-70">Umur : 5 Bulan</p>
        </div>
    </div>
  )
}
