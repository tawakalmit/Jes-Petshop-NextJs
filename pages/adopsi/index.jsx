import Navbar from "../../components/navbar"
import { Image } from "@mantine/core"
import Adopsi_card from "../../components/adopsi_card"

export default function Adopsi() {
  return (
    <>
    <Navbar menu_kiri={<Image src="/logo_copy.png" width={70} />} page="Adopsi" />
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
