import { FiSearch } from "react-icons/fi"
import Avatar from "@assets/icons/avatar.svg"
import MenuIcon from "@assets/icons/menu.svg"
import Logo from "@assets/icons/logo.svg"

const Navbar = ({
    setOpenSideBar,
}: {
    setOpenSideBar: (val: boolean) => void
}) => {
    return (
        <nav className="sticky top-0  w-full z-30 bg-white-100">
            <div className="flex justify-between py-8 px-6 ">
                <img src={Logo} alt="Logo" className="" />
                <h2 className="text-gray-100 font-bold text-[20px] md:text-[28px] lg:text-[32px] leading-[37.57px] md:block hidden">
                    My Notes
                </h2>
                <div className="hidden md:flex bg-[#F4F4F4] text-[#868686] items-center rounded-[5px] px-4">
                    <FiSearch size="22px" color="#868686" />
                    <input
                        type="text"
                        placeholder="Search"
                        className="bg-transparent pl-2 outline-none font-semibold"
                    />
                </div>

                <div className="sm:flex gap-4 items-center  hidden">
                    <p className="font-semibold text-[18px] leading-[18.23px] text-gray-100">
                        Akinremi Adebayo
                    </p>
                    <img
                        src={Avatar}
                        alt="Profile picture"
                        className="rounded-full"
                    />
                    <img src={MenuIcon} alt="Menu" className="pl-4 cursor-pointer" />
                </div>
                <img src={MenuIcon} alt="Menu" className="pl-4 sm:hidden block cursor-pointer" onClick={() => setOpenSideBar(true)} />
            </div>
            <div className="flex justify-between px-4 mb-2">
                <h2 className="text-gray-100 font-bold text-[26px] sm:text-[28px] lg:text-[32px] leading-[37.57px] md:hidden block">
                    My Notes
                </h2>
                
                <div className="flex gap-4 items-center sm:hidden block">
                    <p className="font-semibold text-[18px] leading-[18.23px] text-gray-100">
                        Akinremi Adebayo
                    </p>
                    <img
                        src={Avatar}
                        alt="Profile picture"
                        className="rounded-full"
                    />
                   
                </div>
            </div>

        </nav>
    )
}

export default Navbar
