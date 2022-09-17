import Navbar from "../../components/navbar"
import Jesheader from "../../components/jesheader"
import Image from "next/image"
import {FcCellPhone} from "react-icons/fc"
import {RiWhatsappFill, RiFacebookBoxFill, RiInstagramFill} from "react-icons/ri"
import {GrMapLocation} from "react-icons/gr"
import Maps from "../../components/maps"
import { useRouter } from "next/router"

export default function Contact() {
    const router = useRouter();
  return (
    <>
    <Jesheader judul={"Jes Petshop | Hubungi Kami"}  />
    <Navbar menu_kiri={<Image onClick={(e) => router.push('/')} src="/logo_copy.png" width={90} height={50} className="cursor-pointer" />} page="Hubungi Kami" />
    <div className="bg-[url('/bg.png')] h-full min-h-screen pt-10 w-full pb-20">
        <div className="w-fit items-center mx-auto flex mb-3">
            <FcCellPhone size={30} />
            <p className="text-xl font-semibold ml-2">08XX XXXX XXXX</p>
        </div>

        <div className="w-fit items-center mx-auto flex mb-3">
            <RiWhatsappFill size={30} color="green" />
            <p className="text-xl font-semibold ml-2">08XX XXXX XXXX</p>
        </div>

        <div className="w-fit items-center mx-auto flex mb-3">
            <RiFacebookBoxFill size={30} color="blue" />
            <p className="text-xl font-semibold ml-2">Jes Petshop</p>
        </div>

        <div className="w-fit items-center mx-auto flex mb-3">
            <RiInstagramFill size={30}/>
            <p className="text-xl font-semibold ml-2">@jespetshop</p>
        </div>

        <Maps />

        <div className="w-fit p-3 items-center mx-auto flex mt-3 mb-3">
            <GrMapLocation size={60}/>
            <p className="font-semibold ml-5 text-center"> Jl. Balakang No.86, Sindanglaya, Kec. Cipanas, Kabupaten Cianjur, Jawa Barat 43253</p>
        </div>
    </div>
    </>
  )
}
