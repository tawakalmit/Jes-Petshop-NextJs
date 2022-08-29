import { GiPlagueDoctorProfile } from "react-icons/gi"


export default function ProfileCard() {
  return (
    <>
    <GiPlagueDoctorProfile size={100} color="#2c3e50" className="mx-auto" />
    <div className="w-10/12 mx-auto flex justify-between mb-3 mt-10">
        <p className="font-semibold text-xl">Username</p>
        <p className="text-lg">Eren</p>
    </div>
    <div className="w-10/12 mx-auto flex justify-between mb-3">
        <p className="font-semibold text-xl">Nomor HP</p>
        <p className="text-lg">0812 XXXX XXXX</p>
    </div>
    <div className="w-10/12 mx-auto flex justify-between mb-3">
        <p className="font-semibold text-xl">Alamat</p>
        <div className="w-6/12"><p className="text-lg text-right">Jl Raya Cimacan No.63 Cipanas-Cianjur</p></div>
    </div>
    </>
  )
}
