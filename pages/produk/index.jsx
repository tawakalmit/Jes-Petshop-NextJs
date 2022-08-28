import Navbar from "../../components/navbar"
import Jesheader from "../../components/jesheader"
import Image from "next/image"
import Produk_card from "../../components/produk_card"

export default function Produk() {
  return (
    <>
    <Jesheader judul="Jes Petshop | Produk" />
    <Navbar menu_kiri={<Image src="/logo_copy.png" width={90} height={50} />} page="Produk" />
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
    </div>
    </>
  )
}
