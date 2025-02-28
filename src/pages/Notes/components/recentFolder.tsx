import ProductReview from "./productReview"
import { useState } from "react"

const RecentFolder = () => {
    const tabs = ["Today", "This Week", "This Month"]
    const [activeTab, setActiveTab] = useState(0)
    return (
        <div>
            <h4 className="text-gray-100 mb-8 font-bold text-[22px] sm:text-[24px] leading-[28.18px]">Recent Folder</h4>
            <div className="flex gap-8 ">
                {tabs.map((item, index) => (
                    <p
                        onClick={() => setActiveTab(index)}
                        className={`${activeTab === index ? "text-black-100" : "text-[#5F5F5F]"} font-semibold text-[16px] leading-[18.78px] cursor-pointer hover:text-black-100`}
                    >
                        {item?.split(" ")[0]}{" "}
                        {item.split(" ")[1] && (
                            <span
                                className={`${activeTab === index ? "border-b border-1 border-[#000000]" : ""}`}
                            >
                                {item.split(" ")[1]}
                            </span>
                        )}{" "}
                    </p>
                ))}

               
            </div>

            <div className="flex flex-wrap pt-6 gap-4 items-center">
                <ProductReview
                    backgroundColor="bg-[#FFE2E8]"
                    iconColor="#D5768A"
                />
                <ProductReview
                    backgroundColor="bg-[#EBE8FF]"
                    iconColor="#A9A2D8"
                />
                <ProductReview
                    backgroundColor="bg-[#FFFEE2]"
                    iconColor="#B0AC57"
                />
                <div className="flex justify-center flex-col bg-[#EBEBEB] rounded-[17.75px] p-6 h-3/4 ml-6 cursor-pointer hover:text-black-100 hover:scale-110">
                    <div className="flex justify-center">
                    <svg
                        width="27"
                        height="30"
                        viewBox="0 0 27 30"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M20.5094 29.4028C21.9324 29.4029 23.3015 28.7895 24.3368 27.6882C25.3721 26.5869 25.9952 25.0809 26.0787 23.4783L26.088 23.109V14.7173H18.6499L18.3226 14.7068C16.9585 14.6165 15.6712 13.9644 14.705 12.8743C13.7387 11.7841 13.1607 10.3318 13.0807 8.79279L13.0714 8.42356V0.0318584H5.63326C4.21033 0.0317688 2.84116 0.645136 1.80587 1.74646C0.770591 2.84778 0.147464 4.35381 0.0639853 5.9564L0.0546875 6.32563V23.109C0.0546082 24.7144 0.598273 26.2591 1.57445 27.4271C2.55062 28.5951 3.88551 29.2981 5.30598 29.3923L5.63326 29.4028H20.5094ZM25.9021 12.6173C25.7579 12.1184 25.5321 11.6544 25.2364 11.2495L24.9983 10.9558L16.4055 1.26124C15.9889 0.791309 15.4832 0.443054 14.9327 0.239555L14.9309 8.42356L14.9402 8.73825C15.0067 9.73722 15.3879 10.6764 16.0147 11.3859C16.6416 12.0954 17.4727 12.5285 18.358 12.6068L18.6499 12.6194L25.9021 12.6173Z"
                            fill="black"
                        />
                    </svg>
                    </div>
                    

                    <p className="font-bold text-[16.9px] leading-[19.85px] mt-4 cursor-pointer">Add Folder</p>
                </div>
            </div>
        </div>
    )
}

export default RecentFolder
