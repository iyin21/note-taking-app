import Notes from "./notes"
import { useState, useMemo } from "react"
import NewNoteIcon from "@assets/icons/newNote.svg"
import { useAppSelector } from "@redux/store/hooks"
import { NoteProp } from "@redux/types"
import { AddNoteModal, Button, ConfirmDeleteModal } from "@components/index"
import { FiSearch } from "react-icons/fi"
import { Popover } from "@mantine/core"
import { FiChevronUp } from "react-icons/fi"

const MyNotesSection = () => {
    const tabs = ["Today", "This Week", "This Month"]
    const [openAddModal, setOpenAddModal] = useState(false)
    const [confirmDeleteModal, setConfirmDeleteModal] = useState(false)
    const [clear, setClear] = useState(false)
    const [activeTab, setActiveTab] = useState(0)
    const [editNote, setEditNote] = useState<NoteProp | null>(null)
    const [query, setQuery] = useState("")
    const [searchParam] = useState(["title", "note"])
    const notes = useAppSelector((state) => state.note.notes)

    const [sort, setSort] = useState("")
    console.log(notes)

    const filteredData = useMemo(() => {
        return notes.filter((item: NoteProp) => {
            return searchParam.some((newItem) =>
                item[newItem as keyof NoteProp]
                    ?.toString()
                    ?.toLowerCase()
                    ?.includes(query.toLowerCase())
            )
        })
    }, [notes, query, searchParam])
    const sortedNotes = useMemo(() => {
        return [...filteredData].sort((a, b) => {
            if (sort === "a-z") return a.title.localeCompare(b.title)
            if (sort === "newlyCreated")
                return (
                    new Date(b.createdAt).getTime() -
                    new Date(a.createdAt).getTime()
                )
            if (sort === "newlyUpdated")
                return (
                    new Date(b.updatedAt).getTime() -
                    new Date(a.updatedAt).getTime()
                )
            if (sort === "z-a") return b.title.localeCompare(a.title)
            return 0
        })
    }, [filteredData, sort])
    return (
        <div className="mt-10">
            <AddNoteModal
                opened={openAddModal}
                setOpened={setOpenAddModal}
                editNote={editNote}
                setEditNote={setEditNote}
            />
            <ConfirmDeleteModal
                openModal={confirmDeleteModal}
                setOpenModal={setConfirmDeleteModal}
                setClear={setClear}
                clear={clear}
            />

            <div className="flex items-center justify-between">
                <h4 className="text-gray-100 font-bold text-[24px] leading-[28.18px]">
                    My Notes
                </h4>
                <div className="hidden md:flex bg-[#F4F4F4] text-[#868686] items-center rounded-[5px] px-4 py-4">
                    <FiSearch size="22px" color="#868686" />
                    <input
                        type="text"
                        placeholder="Search"
                        className="bg-transparent pl-2 outline-none"
                        onChange={(e) => setQuery(e.currentTarget.value)}
                        value={query}
                    />
                </div>
                <div className="hidden md:block">
                    <Popover
                        width={200}
                        position="bottom"
                        withArrow
                        shadow="md"
                    >
                        <Popover.Target aria-haspopup="true">
                            <div className="flex items-center gap-6 bg-gray-200 border-0 rounded-2xl ml-4 px-4 py-4 sm:mt-0 mt-6">
                                <div className="flex items-center ">
                                    <p className=" text-[#333]">
                                        Sort by :{" "}
                                        <span className="text-[#3D3C42] font-semibold">
                                            {sort || "None"}
                                        </span>
                                    </p>
                                    <FiChevronUp />
                                </div>
                            </div>
                        </Popover.Target>
                        <Popover.Dropdown className="rounded-lg ">
                            <select
                                className="border p-2"
                                onChange={(e) => setSort(e.currentTarget.value)}
                                id="sort-notes"
                            >
                                <option value="a-z">A-Z</option>
                                <option value="z-a">Z-A</option>
                                <option value="newlyCreated">
                                    Newly created
                                </option>
                                <option value="newlyUpdated">
                                    Newly updated
                                </option>
                            </select>
                        </Popover.Dropdown>
                    </Popover>
                </div>

                <Button
                    className=""
                    onClick={() => {
                        setClear(true)
                        setConfirmDeleteModal(true)
                    }}
                >
                    Clear Notes
                </Button>
            </div>
            <div className="flex items-center justify-between mt-3 ">
                <div className="hid flex bg-[#F4F4F4] text-[#868686] items-center rounded mt-2 px-4 py-4">
                    <FiSearch size="22px" color="#868686" />
                    <input
                        type="text"
                        placeholder="Search"
                        className="bg-transparent pl-2 outline-none"
                        onChange={(e) => setQuery(e.currentTarget.value)}
                        value={query}
                    />
                </div>
                <div className="md:hidden block">
                    <Popover
                        width={200}
                        position="bottom"
                        withArrow
                        shadow="md"
                    >
                        <Popover.Target>
                            <div className="flex items-center gap-6 bg-gray-200 border-0 rounded-2xl ml-4 px-4 py-4 sm:mt-0 mt-6">
                                <div className="flex items-center ">
                                    <p className="text-[#7E7E7E]">
                                        Sort by :{" "}
                                        <span className="text-[#3D3C42] font-semibold">
                                            category
                                        </span>
                                    </p>
                                    <FiChevronUp />
                                </div>
                            </div>
                        </Popover.Target>
                        <Popover.Dropdown className="rounded-lg ">
                            <select
                                className="border p-2"
                                onChange={(e) => setSort(e.currentTarget.value)}
                            >
                                <option value="a-z">A-Z</option>
                                <option value="newlyCreated">
                                    Newly created
                                </option>
                                <option value="newlyUpdated">
                                    Newly updated
                                </option>
                                <option value="z-a">Z-A</option>
                            </select>
                        </Popover.Dropdown>
                    </Popover>
                </div>
            </div>
            <div className="flex gap-8 mt-4">
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
                {sortedNotes.map((item) => (
                    <Notes
                        title={item.title}
                        note={item.note}
                        createdAt={item.createdAt}
                        updatedAt={item.updatedAt}
                        id={item.id}
                        handleEdit={() => {
                            setEditNote(item)
                            setOpenAddModal(true)
                        }}
                    />
                ))}
                <div className="flex justify-center flex-col bg-[#EBEBEB] p-6 rounded-[17px] ml-6 cursor-pointer hover:text-black-100 hover:scale-110">
                    <div
                        className="flex justify-center"
                        onClick={() => setOpenAddModal(true)}
                    >
                        <img src={NewNoteIcon} alt="" />
                    </div>
                    <p className="text-[#4C4B4B] pt-2 font-bold text-[16.9px]">
                        New Note
                    </p>
                </div>
            </div>
        </div>
    )
}
export default MyNotesSection
