import Navbar from "./navbar"
import Sidebar from "./sidebar"
import { useState, ReactNode } from "react"
import { Drawer } from "@mantine/core"
import { AiOutlineClose } from "react-icons/ai"
import { FiSearch } from "react-icons/fi"

interface Props {
    children: ReactNode
}
const Layout = ({ children }: Props) => {
    const [openSideBar, setOpenSideBar] = useState(false)

    return (
        <div className="h-screen relative font-raleway grow">
            <Navbar setOpenSideBar={setOpenSideBar} />

            <div className="relative lg:pl-56 ">
                <div className="hidden lg:block fixed left-0 lg:w-56 overflow-y-auto no-scrollbar h-screen">
                    <Sidebar />
                </div>
                <>
                    <Drawer
                        opened={openSideBar}
                        onClose={() => setOpenSideBar(false)}
                        size="75%"
                        styles={{
                            content: {
                                background: "white",
                            },
                        }}
                        withCloseButton={false}
                    >
                        <div className="px-4 mt-7 ">
                            <div className="flex items-center justify-end mb-6">
                                
                                <AiOutlineClose
                                    className="cursor-pointer"
                                    onClick={() => setOpenSideBar(false)}
                                    color="black"
                                    size="24px"
                                />
                            </div>
                            <div className="flex bg-white-100 text-[#868686] items-center rounded-[5px] px-4">
                                    <FiSearch size="22px" color="#868686" />
                                    <input
                                        type="text"
                                        placeholder="Search"
                                        className="bg-transparent pl-2 outline-none"
                                    />
                                </div>
                            <hr className="text-gray-100 mt-5" />
                        </div>
                        <Sidebar />
                    </Drawer>
                </>
                <main className=" w-full h-full overflow-y-auto pt-4 px-4  lg:px-6 py-6 rounded-tl-[25px] bg-[#FAFAFA] ">
                    {children}
                </main>
            </div>
        </div>
    )
}

export default Layout
