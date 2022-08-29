import Navbar from "../../components/navbar"
import Jesheader from "../../components/jesheader"
import Image from "next/image"
import Cart_card from "../../components/cart_card"
import { useRouter } from "next/router"
import Totalharga from "../../components/totalharga"

export default function Cart() {

    const router = useRouter();

  return (
    <>
    <Jesheader judul="Jes Petshop | Keranjang" />
    <Navbar menu_kiri={<Image onClick={(e) => router.push('/')} src="/logo_copy.png" width={90} height={50} />} page="Keranjang" />
    <div className="bg-[url('/bg.png')] h-full min-h-screen pt-10 w-full pb-20">
        <Cart_card />
        <Cart_card />
        <Totalharga />
    </div>
    </>
  )
}
