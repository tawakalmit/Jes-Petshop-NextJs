import Jesheader from "../../components/jesheader"
import Image from "next/image"
import CustomInput from "../../components/customInput"
import { useRouter } from "next/dist/client/router"
import Custombutton from "../../components/custombutton"

export default function Register() {
    
    const router = useRouter();

  return (
    <>
    <Jesheader judul={"Jes Petshop | Register"} />
    <div className="w-full h-fit bg-[url('/bg.png')]">
        <div className="w-fit mx-auto pt-20">
        <Image src="/logo_copy.png" width={150} height={80}/>
        </div>
        <h1 className="font-medium text-white text-3xl mt-5 text-center">Register</h1>
        <form className="mt-7">

            <CustomInput 
            label="Username"
            type="text"
            id="input-username"
            />

            <CustomInput 
            label="Nomor Handphone"
            type="tel"
            id="input-phone"
            />

            <CustomInput 
            label="Alamat"
            type="text"
            id="input-alamat"
            />

            <CustomInput 
            label="Password"
            type="password"
            id="input-password"
            />
            <div className="w-9/12 mx-auto mt-3 flex justify-between">
                <p className="text-white">Sudah Daftar ?</p>
                <p className="text-[#3498db]" onClick={(e) => router.push("/login")}>Masuk</p>
            </div>

            <Custombutton 
            className="w-fit mt-10 pb-20 mx-auto"
            label="Submit"
            />
        </form>
    </div>
    </>
  )
}
