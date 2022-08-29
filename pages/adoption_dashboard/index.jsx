import Navbar from "../../components/navbar"
import Image from "next/image"
import Adopsi_card from "../../components/adopsi_card"
import Jesheader from "../../components/jesheader"
import { useRouter } from "next/dist/client/router"
import Adminnav from "../../components/adminnav"
import {AiFillHome} from "react-icons/ai"
import {FcPlus} from "react-icons/fc"

export default function Adopsi() {

  const router = useRouter();

  return (
    <>
    <Jesheader judul="Administrator | Adopsi" />
    <Adminnav hal="Adopsi" page={<AiFillHome size={25} />} />
    <div className="bg-[url('/bg.png')] h-full min-h-screen pt-10 w-full">
        <div className="w-10/12 flex flex-wrap mx-auto justify-around">
            <Adopsi_card />
            <Adopsi_card />
            <Adopsi_card />
            <Adopsi_card />
            <Adopsi_card />
            <Adopsi_card />
        </div>
        <FcPlus size={60} className="fixed bottom-10 right-10" onClick={() => router.push("/add_adoption")} />
    </div>
    </>
  )
}
