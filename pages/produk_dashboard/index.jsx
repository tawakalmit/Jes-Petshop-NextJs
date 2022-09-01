import Adminnav from "../../components/adminnav"
import Jesheader from "../../components/jesheader"
import Image from "next/image"
import Produk_card from "../../components/produk_card"
import { useRouter } from "next/dist/client/router"
import { AiFillHome } from "react-icons/ai"
import { FcPlus } from "react-icons/fc"

export default function Produk() {

  const router = useRouter();

  return (
    <>
    <Jesheader judul="Jes Petshop | Produk" />
    <Adminnav hal="Produk" page={<AiFillHome size={25} />} pageClick={() => router.push('/dashboard')} />
    <div className="bg-[url('/bg.png')] h-full min-h-screen pt-10 w-full">
        <div className="w-10/12 flex flex-wrap mx-auto justify-around">
            <Produk_card />
            <Produk_card />
            <Produk_card />
            <Produk_card />
            <Produk_card />
            <Produk_card />
            <Produk_card />
            <Produk_card />
            <Produk_card />
            <Produk_card />
            <Produk_card />
            <Produk_card />
            <Produk_card />
        </div>
        <FcPlus size={60} className="fixed bottom-10 right-10" onClick={() => router.push("/add_produk")} />
    </div>
    </>
  )
}
