import Navbar from "../../components/navbar"
import { Image } from "@mantine/core"
import Custombutton from "../../components/custombutton"
import { useRouter } from "next/dist/client/router"

export default function Homepage() {

    const router = useRouter();

  return (
    <>
    <Navbar menu_kiri={<Image src="/logo_copy.png" width={70} />} />
    <div className="bg-[url('/bg.png')] h-screen pt-10 w-full">
        <div className="w-10/12 mx-auto text-white">
        <Image src="/pet_copy.png" />
        <h1 className="text-center">Selamat Datang di</h1>
        <h1 className="font-bold text-[#3498db] text-center text-2xl">JES PetShop</h1>
        <p className="text-center">Penuhi kebutuhan hewan peliharaan anda bersama kami di petshop terlengkap dan terpercaya di Cipanas</p>
        </div>
        <div className="w-6/12 mx-auto flex justify-between mt-4">
            <Custombutton label="Adopsi" onClick={(e) => router.push("/adopsi") } />
            <Custombutton label="Produk" onClick={(e) => router.push("/produk") } />
        </div>
    </div>
    </>
  )
}
