import { Modal } from "@mantine/core"
import { Dispatch, SetStateAction } from "react"
import RedTrash from "@assets/icons/redTrash.svg"
import { useAppDispatch } from "@redux/store/hooks"
import { deleteNote, clearNotes } from "@redux/slices/noteSlice"
import { useState } from "react"
import Button from "@components/Button"
import { showNotification } from "@mantine/notifications"

interface Props {
    openModal: boolean
    setOpenModal: Dispatch<SetStateAction<boolean>>
    id?: string
    clear?: boolean
    setClear?: Dispatch<SetStateAction<boolean>>
}

const ConfirmDelete = ({ openModal, setOpenModal, id, clear, setClear }: Props) => {
    const [isDeleting, setIsDeleting] = useState(false)
    const dispatch = useAppDispatch()
    console.log(clear,"fgf");
    const handleDelete = () => {
        setIsDeleting(true)

        setTimeout(() => {
            if (clear === true) {
                dispatch(clearNotes())
                localStorage.removeItem("notes")
            } else {
                dispatch(deleteNote(id||""))
                
            }
            setIsDeleting(false)
            showNotification({
                title: "Success",
                message: "Note deleted successfully",
                color: "green",
            })
            setOpenModal(false)
            setClear&&setClear(false)
        }, 2000)
    }
    return (
        <>
            <Modal
                opened={openModal}
                onClose={() => setOpenModal(false)}
                centered
                withCloseButton={false}
            >
                <div className="text-center" data-testid="confirm_modal">
                    <div className="flex justify-center">
                        <img src={RedTrash} alt="" />
                    </div>
                    <h5 className="font-bold mt-4">Confirm Delete</h5>
                    <p className="mt-2 body-medium">
                        This action cannot be undone.
                    </p>
                    <div className="flex justify-center mt-4 items-center">
                        <p
                            className=" body-medium cursor-pointer hover:font-semibold hover:scale-110"
                            onClick={() => setOpenModal(false)}
                        >
                            Cancel
                        </p>
                        <Button
                            type="button"
                            className=" ml-16 "
                            onClick={handleDelete}
                            disabled={isDeleting}
                            aria-label="Delete button"
                        >
                            {isDeleting ? "Deleting..." : `Delete`}
                        </Button>
                    </div>
                    {/* </div> */}
                </div>
            </Modal>
        </>
    )
}
export default ConfirmDelete
