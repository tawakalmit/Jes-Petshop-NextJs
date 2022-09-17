import Navbar from "../../components/navbar"
import Image from "next/image";
import Custombutton from "../../components/custombutton"
import { useRouter } from "next/dist/client/router"
import Jesheader from "../../components/jesheader";

export default function Homepage() {

    const router = useRouter();

  return (
    <>
    <Jesheader
    judul="Jes Petshop"
    />
    <Navbar menu_kiri={<Image src="/logo_copy.png" width={90} height={50} className="cursor-pointer" onClick={() => router.push('/')} />} />
    <div className="bg-[url('/bg.png')] h-screen pt-10 w-full">
        <div className="w-10/12 mx-auto text-white">
        <div className="w-fit mx-auto">
        <Image src="/pet_copy.png" width={800} height={320}/>
        </div>
        <h1 className="text-center md:text-2xl">Selamat Datang di</h1>
        <h1 className="font-bold text-[#3498db] text-center text-2xl md:text-5xl">JES PetShop</h1>
        <p className="text-center">Penuhi kebutuhan hewan peliharaan anda bersama kami di petshop terlengkap dan terpercaya di Cipanas</p>
        </div>
        <div className="w-6/12 mx-auto flex justify-between mt-4 md:w-3/12">
            <Custombutton label="Adopsi" onClick={(e) => router.push("/adopsi") } />
            <Custombutton label="Produk" onClick={(e) => router.push("/produk") } />
        </div>
    </div>
    </>
  )
}
