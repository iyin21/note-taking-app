import { Modal } from "@mantine/core"
import { useState, FormEvent, useEffect } from "react"
import { SlOptions } from "react-icons/sl"
import AddNoteIcon from "@assets/icons/addNote.svg"
import { useAppDispatch } from "@redux/store/hooks"
import { addNote, updateNote } from "@redux/slices/noteSlice"
import { LoadingOverlay } from "@mantine/core"
import { NoteProp } from "@redux/types"
import { showNotification } from "@mantine/notifications"
import { v1 as uuidv1 } from 'uuid';

interface AddNoteModalProps {
    opened: boolean
    setOpened: React.Dispatch<React.SetStateAction<boolean>>
    editNote: NoteProp | null
    setEditNote?: React.Dispatch<React.SetStateAction<NoteProp | null>>
}

const AddNoteModal = ({
    opened,
    setOpened,
    editNote,
    setEditNote,
}: AddNoteModalProps) => {
    const [noteTitle, setNoteTitle] = useState("")
    const [note, setNote] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const dispatch = useAppDispatch()

    useEffect(() => {
        if (editNote) {
            setNoteTitle(editNote.title)
            setNote(editNote.note)
        }
    }, [editNote])
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        setIsLoading(true)
        setTimeout(() => {
            if (editNote) {
                dispatch(
                    updateNote({
                        title: noteTitle,
                        updatedAt: new Date(),
                        note: note,
                        id: editNote.id,
                    })
                )
                setEditNote && setEditNote(null)
            } else {
                dispatch(
                    addNote({
                        title: noteTitle,
                        createdAt: new Date(),
                        updatedAt: new Date(),
                        note: note,
                        id: uuidv1(),
                    })
                )
            }

            setIsLoading(false)
            setNoteTitle("")
            setNote("")
            setOpened(false)
            showNotification({
                title: "Success",
                message: "Note created successfully",
                color: "green",
            })
            
        }, 2000)
    }
    return (
        <Modal
            opened={opened}
            onClose={() => {
                setOpened(false)
            }}
            size="500px"
            centered
            radius={8}
            closeOnClickOutside={false}
            className="font-raleway"
            classNames={{
                body: "p-4 py-10",
            }}
            overlayProps={{
                backgroundOpacity: 0.55,
                blur: 3,
            }}
            aria-labelledby="add-note-title"
    aria-describedby="add-note-description"
        >
            <LoadingOverlay
                visible={isLoading}
                zIndex={1000}
                overlayProps={{ radius: "sm", blur: 2 }}
            />
            <form className="" onSubmit={handleSubmit}>
                <div className="flex justify-between">
                    <button className="flex gap-2 bg-transparent outline-none hover:outline-none">
                        <img src={AddNoteIcon} alt="" />
                        <p className="font-semibold text-[#5F5F5F]">
                            Save Note
                        </p>
                    </button>

                    <SlOptions size="18px" color="#B3B3B3" />
                </div>
                <input
                    type="text"
                    placeholder="Enter Note Title"
                    className="text-[24px] leading-[28.18px] outline-none mt-6 pb-4"
                    required
                    onChange={(e) => setNoteTitle(e.currentTarget.value)}
                    value={noteTitle}
                    id="note-title"
                />
                
                <hr className="py-4" />
                <textarea
                    name="note"
                    id="note-body"
                    placeholder="Type notes here..."
                    rows={10}
                    className="w-full outline-none"
                    onChange={(e) => setNote(e.currentTarget.value)}
                    value={note}
                />
            </form>
        </Modal>
    )
}
export default AddNoteModal
