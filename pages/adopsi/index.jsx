import Navbar from "../../components/navbar"
import Image from "next/image"
import Adopsi_card from "../../components/adopsi_card"
import Jesheader from "../../components/jesheader"
import { useRouter } from "next/dist/client/router"

export default function Adopsi() {

  const router = useRouter();

  return (
    <>
    <Jesheader judul="Jes Petshop | Adopsi" />
    <Navbar menu_kiri={<Image onClick={(e) => router.push('/')} src="/logo_copy.png" width={90} height={50} />} page="Adopsi" />
    <div className="bg-[url('/bg.png')] h-full min-h-screen pt-10 w-full">
        <div className="w-10/12 flex flex-wrap mx-auto justify-around">
            <Adopsi_card />
            <Adopsi_card />
            <Adopsi_card />
            <Adopsi_card />
            <Adopsi_card />
            <Adopsi_card />
        </div>
    </div>
    </>
  )
}
