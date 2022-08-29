import Jesheader from "../../components/jesheader"
import Navbar from "../../components/navbar"
import Image from "next/dist/client/image"
import ProfileCard from "../../components/profilecard"
import Custombutton from "../../components/custombutton"
import { useRouter } from "next/router"

export default function Profile() {

    const router = useRouter();

  return (
    <>
    <Jesheader 
    judul={"Jes Petshop | ProfileKu"}  
    />

    <Navbar 
    menu_kiri={<Image onClick={(e) => router.push('/')} src="/logo_copy.png" width={90} height={50} />} 
    page="ProfilKu" 
    />

    <div className="bg-[url('/bg.png')] h-screen pt-10 w-full">

        <ProfileCard />

        <div className="flex w-6/12 mx-auto justify-around">

            <Custombutton 
            label="Edit" 
            onClick={() => router.push("/editprofile") }
            />

            <Custombutton 
            label="Log Out"
            />

        </div>
    </div>
    </>
  )
}
