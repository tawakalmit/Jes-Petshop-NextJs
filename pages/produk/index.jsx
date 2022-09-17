import Navbar from "../../components/navbar"
import Jesheader from "../../components/jesheader"
import Image from "next/image"
import Produk_card from "../../components/produk_card"
import { useRouter } from "next/dist/client/router"
import { useState } from "react"

export default function Produk() {

  const router = useRouter();

  const [dataProduk] = useState({
    title: "-",
    content: "Produk",
    page: 1,
    datas: [
      {
        id: 1,
        title: "WHISKAS JUNIOR OCEAN FISH 450GR KEMASAN FRESHPACK",
        price: 29000,
        image:
          "/produk/WHISKAS-JUNIOR-OCEAN-FISH-450GR-KEMASAN-FRESHPACK.jpg",
      },
      {
        id: 2,
        title: "Whiskas dry cat food junior ocean fish 1.1kg makanan kucing",
        price: 68000,
        image:
        "/produk/f2009a9a-4140-4e9e-b5a6-b6258cce56ca.jpg",
      },
      {
        id: 3,
        title: "Makanan Kering Kucing WHISKAS ADULT 1+ CHICKEN 1,2 KG / DRY ",
        price: 65000,
        image:
        "/produk/78d16253-e678-441a-aa6a-b5ce61a75ea9.jpg",
      },
      {
        id: 4,
        title: "Makanan Kering Kucing WHISKAS ADULT 1+ TUNA 480gr / DRY CAT ",
        price: 28500,
        image:
        "/produk/0e9a91c7-7d72-4f34-aafb-5e444f1946bd.jpg",
      },
      {
        id: 5,
        title: "Whiskas Makanan Kucing 85 Gram / Sachet / Pouch / Cat Food",
        price: 6200,
        image:
        "/produk/8d1e21f3-a70d-4191-a13c-cf4b17267a84.jpg",
      },
      {
        id: 6,
        title: "Royal Canin Hair & Skin Care Makanan Kucing Dewasa 2kg",
        price: 269200,
        image:
        "/produk/9eee1d66-cd53-4235-8052-a65cd6d7b554.jpg",
      },
    ],
    information: {},
    loading: false,
  })

  return (
    <>
    <Jesheader judul="Jes Petshop | Produk" />
    <Navbar menu_kiri={<Image onClick={(e) => router.push('/')} className="cursor-pointer" src="/logo_copy.png" width={90} height={50} />} page="Produk" />
    <div className="bg-[url('/bg.png')] h-full min-h-screen pt-10 w-full">
        <div className="w-10/12 flex flex-wrap mx-auto justify-around">
        {dataProduk.datas.map((datas) => (
              <Produk_card key={datas.id} title={datas.title} price={datas.price.toLocaleString()} image={datas.image} />
            ))}
        </div>
    </div>
    </>
  )
}
