import Image from "next/image"

export default function Cart_card() {

  return (
    <div className="flex h-44 w-10/12 mx-auto bg-[#ecf0f1] rounded-xl items-center justify-evenly mb-5">
        <div>
        <Image src="/1.png" width={150} height={150} className="rounded-xl" />
        </div>
        <div className="p-5">
            <div className="font-semibold text-center">
                <p>Royal Canin Kitten</p>
                <p>Rp 200.000</p>
            </div>
            <div className="w-fit mx-auto mt-3">
                <input type="number" className="w-16 px-4 bg-[#7F8C8D] rounded-xl text-white" defaultValue="0" />
            </div>
        </div>
    </div>
  )
}
