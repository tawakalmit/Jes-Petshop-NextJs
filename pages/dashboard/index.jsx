import Adminnav from "../../components/adminnav"
import {FaCat} from "react-icons/fa"
import {TbBox} from "react-icons/tb"
import { useRouter } from "next/router"

export default function Dashboard() {
    const router = useRouter();
  return (
    <>
    <Adminnav page="Administrator" />
    <div className="bg-[url('/bg.png')] h-screen pt-10 w-full flex justify-evenly">

        <div className="w-36 h-36 flex items-center justify-center rounded-3xl bg-[#3498db]" onClick={() => router.push("/addadoption")}>
            <FaCat size={100} color="#ecf0f1" />
        </div>

        <div className="w-36 h-36 flex items-center justify-center rounded-3xl bg-[#3498db]" onClick={() => router.push("/addproduct")}>
            <TbBox size={100} color="#ecf0f1" />
        </div>

    </div>
    </>
  )
}
