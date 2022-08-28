import Jesheader from "../../components/jesheader"
import { Image } from "@mantine/core"
import { useRouter } from "next/dist/client/router"
import CustomInput from "../../components/customInput";
import Custombutton from "../../components/custombutton";

export default function Login() {

    const router = useRouter();

  return (
    <>
    <Jesheader judul={"Jes Petshop | Login"}  />
    <div className="w-full h-full bg-[url('/bg.png')] md:h-screen">
        <Image src="/logo_copy.png" width={150} className="pt-20 mx-auto" />
        <h1 className="font-medium text-white text-3xl mt-5 text-center">Login</h1>
        <form>
            <CustomInput 
            label="Username"
            type="text"
            id="input-username"
            />

            <CustomInput 
            label="Password"
            type="password"
            id="input-password"
            />

            <div className="w-9/12 mx-auto mt-3 flex justify-between">
                <p className="text-white">Belum punya akun ?</p>
                <p className="text-[#3498db] cursor-pointer" onClick={(e) => router.push("/register")}>Daftar</p>
            </div>

            <Custombutton 
            className="w-fit mt-10 pb-20 mx-auto"
            label="Login"
            />
        </form>
    </div>
    </>
  )
}
