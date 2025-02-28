import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { NoteProp } from "@redux/types"

interface NoteState {
    notes: NoteProp[]
}
const storedNotes = localStorage.getItem("notes")
const initialState: NoteState = {
    notes: storedNotes ? JSON.parse(storedNotes) : [],
}

const noteSlice = createSlice({
    name: "note",
    initialState,
    reducers: {
        addNote: (state, action: PayloadAction<NoteProp>) => {
            state.notes = [...state.notes, action.payload]
            const createdNotes = [...state.notes]
            localStorage.setItem("notes", JSON.stringify(createdNotes))
        },
        updateNote: (state, action: PayloadAction<Partial<NoteProp>>) => {
            const indexOfNote = state.notes.findIndex(
                (item) => item.id === action.payload.id
            )
            if (indexOfNote === -1) {
                return
            }

            state.notes[indexOfNote] = {
                ...state.notes[indexOfNote],
                ...action.payload,
            }
            const updatedNotes = [...state.notes]
            localStorage.setItem("notes", JSON.stringify(updatedNotes))
        },
        deleteNote: (state, action: PayloadAction<string>) => {
            const newNotes = state.notes.filter(
                (newItem) => newItem.id !== action.payload
            )
            state.notes = newNotes
            const updatedNotes = [...state.notes]
            localStorage.setItem("notes", JSON.stringify(updatedNotes))
        },
        clearNotes: (state) => {
            state.notes = []
            
        },
    },
})
export const { addNote, updateNote, deleteNote, clearNotes } = noteSlice.actions
export default noteSlice.reducer
