import Jesheader from "../../components/jesheader"
import Navbar from "../../components/navbar"
import Image from "next/image"
import { GiPlagueDoctorProfile } from "react-icons/gi"
import CustomInput from "../../components/customInput"
import Custombutton from "../../components/custombutton"

export default function EditProfile() {
  return (
    <>
    <Jesheader 
    judul="Jes Petshop | Edit Profile"
    />

    <Navbar 
    menu_kiri={<Image onClick={(e) => router.push('/')} src="/logo_copy.png" width={90} height={50} />} 
    page="Edit Profile"/>

    <form className="bg-[url('/bg.png')] h-screen pt-10 w-full">
    
        <GiPlagueDoctorProfile size={100} color="#2c3e50" className="mx-auto"/>
        
        <CustomInput
        label="Username"
        type="text"
        id="edit-username"
        />

        <CustomInput
        label="Nomor HP"
        type="number"
        id="edit-nomorhp"
        />

        <CustomInput
        label="Alamat"
        type="text"
        id="edit-alamat"
        />

        <CustomInput
        type="file"
        id="edit-photo"
        />

        <Custombutton 
        label="Simpan"
        className="mt-5 mx-auto w-fit"
        />
    </form>
    </>
  )
}
