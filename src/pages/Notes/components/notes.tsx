import { SlOptions } from "react-icons/sl"
import { Menu } from "@mantine/core"
import { CiEdit } from "react-icons/ci"
import { RiDeleteBin6Line } from "react-icons/ri"

import dayjs from "dayjs"
import { useState } from "react"
import { ConfirmDeleteModal } from "@components/index"
import { NoteProp } from "@redux/types"

interface INotesProp extends NoteProp {
    handleEdit: () => void
}
const Notes = ({
    title,
    note,
    id,
    createdAt,
    updatedAt,
    handleEdit,
}: INotesProp) => {
    const [confirmDeleteModal, setConfirmDeleteModal] = useState(false)

    return (
        <div className="bg-[#EBEBEB] rounded-[21px] w-min-sm sm:w-72 w-full h-auto min-h-72">
            <ConfirmDeleteModal
                openModal={confirmDeleteModal}
                setOpenModal={setConfirmDeleteModal}
                id={id}
            />
            <div className="border-b border-[#0000002B]  py-4 px-4">
                <div className="flex justify-between ">
                    <p className="text-[#4C4B4B] font-bold text-[16px] leading-[18.78px]">
                        {title}
                    </p>
                    <Menu shadow="md" width={200}>
                        <Menu.Target>
                            <SlOptions size="18px" className="cursor-pointer" />
                        </Menu.Target>

                        <Menu.Dropdown>
                            <Menu.Item
                                leftSection={<CiEdit />}
                                onClick={handleEdit}
                            >
                                Edit
                            </Menu.Item>
                            <Menu.Item
                                leftSection={<RiDeleteBin6Line />}
                                onClick={() => setConfirmDeleteModal(true)}
                            >
                                Delete
                            </Menu.Item>
                        </Menu.Dropdown>
                    </Menu>
                </div>
                <p className="text-[14px] text-[#7A7A7A] leading-[16.44px] mt-2 font-medium">
                    Created:{dayjs(createdAt).format("DD/MM/YYYY")}
                </p>

                <p className="text-[14px] text-[#7A7A7A] leading-[16.44px] mt-2 font-medium">
                    Updated:{dayjs(updatedAt).format("DD/MM/YYYY")}
                </p>
            </div>

            <p className="text-[12px] leading-[20px] font-medium text-[#171717] mt-2 px-4 pb-10">
                {note}
            </p>
        </div>
    )
}
export default Notes
