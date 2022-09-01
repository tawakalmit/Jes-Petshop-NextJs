import Jesheader from "../../components/jesheader"
import Adminnav from "../../components/adminnav"
import {BiArrowBack} from "react-icons/bi"
import CustomInput from "../../components/customInput"
import Custombutton from "../../components/custombutton"
import {useRouter} from "next/router"

export default function AddAdoption() {
  const router = useRouter();
  return (
    <div>
        <Jesheader
        judul="Admin | Tambahkan Adopsi"
        />
        <Adminnav 
        page={<BiArrowBack />}
        hal="Tambah Adopsi"
        pageClick={() => router.push('/adoption_dashboard')}
        />
        <div className="bg-[url('/bg.png')] h-screen pt-5 w-full flex">
            <form className="w-full">

                <CustomInput
                label="Nama Hewan"
                type="text"
                />

                <CustomInput
                label="Jenis"
                type="text"
                />

                <CustomInput
                label="Umur"
                type="number"
                />

                <CustomInput
                label="Deskripsi"
                type="text"
                />

                <CustomInput
                label="Foto"
                type="file"
                />

                <Custombutton
                label="Tambah"
                className="w-fit pt-5 mx-auto"
                />

            </form>
        </div>
    </div>
  )
}
