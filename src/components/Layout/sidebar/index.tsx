import AddNoteIcon from "@assets/icons/addNote.svg"
import CalendarIcon from "@assets/icons/calendar.svg"
import ArchiveIcon from "@assets/icons/archive.svg"
import TrashIcon from "@assets/icons/trash.svg"

const Sidebar = () => {
    return (
        <aside className="p-6 text-gray-100 font-semibold text-[16px] leading-[18.78px]">
        

            <div className="flex cursor-pointer mt-10 gap-2 hover:text-black-100">
                <img src={AddNoteIcon} alt="" />
                <p>Add Note</p>
            </div>
            <div className="mt-10 flex cursor-pointer gap-2 pb-4 hover:text-black-100">
                <img src={CalendarIcon} alt="" />
                <p>Calendar</p>
            </div>
            <div className=" flex cursor-pointer gap-2 py-4 hover:text-black-100">
                <img src={ArchiveIcon} alt="" />

                <p>Archive</p>
            </div>

            <div className=" flex cursor-pointer gap-2 py-4 hover:text-black-100">
                <img src={TrashIcon} alt="" />
                <p>Trash</p>
            </div>
            <p className="text-[#767676] font-medium text-[8px] leading-[10.4px] absolute bottom-6">
                2024 Estrada International Staffing Solutions. All Rights
                Reserved.
            </p>
        </aside>
    )
}

export default Sidebar
