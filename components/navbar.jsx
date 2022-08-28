import { Image } from "@mantine/core"
import { GiHamburgerMenu } from "react-icons/gi"
import { Menu } from "@headlessui/react"
import { useRouter } from "next/dist/client/router"
import { RiLoginCircleFill } from "react-icons/ri"
import { HiShoppingCart } from "react-icons/hi"
import { FaCat } from "react-icons/fa"
import { GiCardboardBoxClosed } from "react-icons/gi"
import { FcContacts } from "react-icons/fc"

export default function Navbar({menu_kiri, page}) {

    const router = useRouter();

  return (
    <div className="bg-[#ecf0f1] w-full h-14 shadow-md">
        <div className="w-10/12 h-full items-center flex justify-between mx-auto">
        {menu_kiri}
        <div className="w-fit h-fit flex items-center ">
            <h1 className="font-semibold text-[#2c3e50] mr-5 ">{page}</h1>
            <Menu>
            <Menu.Button>
            <GiHamburgerMenu size={30} color="#2c3e50" />
            </Menu.Button>
            <Menu.Items className='p-3 absolute right-9 top-14 w-fit bg-[#ecf0f1] z-50 shadow-md md:relative'>
              <Menu.Item>
                {({ active }) => (
                  <div>
                      <div className='flex justify-start items-center mx-auto mb-2 cursor-pointer' onClick={(e) => router.push("/login")}>
                        <RiLoginCircleFill size={20} color="#2c3e50" />
                        <p className='ml-3'>Login</p>
                      </div>

                      <div className='flex justify-start items-center mx-auto mb-2 cursor-pointer' onClick={(e) => router.push("/keranjang")}>
                        <HiShoppingCart size={20} color="#2c3e50"/>
                        <p className='ml-3'>Keranjang</p>
                      </div>

                      <div className='flex justify-start items-center mx-auto mb-2 cursor-pointer' onClick={(e) => router.push("/adopsi")}>
                        <FaCat size={20} color="#2c3e50"/>
                        <p className='ml-3'>Adopsi</p>
                      </div>

                      <div className='flex justify-start items-center mx-auto mb-2 cursor-pointer' onClick={(e) => router.push("/produk")}>
                        <GiCardboardBoxClosed size={20} color="#2c3e50"/>
                        <p className='ml-3'>Produk</p>
                      </div>

                      <div className='flex justify-start items-center mx-auto mb-2 cursor-pointer' onClick={(e) => router.push("/contact")}>
                        <FcContacts size={20} color="#2c3e50"/>
                        <p className='ml-3 text-xs'>Hubungi Kami</p>
                      </div>

                  </div>
                )}
              </Menu.Item>
            </Menu.Items>
          </Menu>
        </div>
        </div>
    </div>
  )
}
