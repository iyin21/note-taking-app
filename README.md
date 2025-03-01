# Notes App - React + TypeScript + Vite

This project is a simple Notes App built using React, TypeScript, and Vite. It allows users to create, edit, delete, and organize notes efficiently.


## Getting Started
1. Clone the Repository

```shell
git clone https://github.com/iyin21/notes-app.git
cd notes-app
```

2. Install Dependencies
Make sure you have Node.js (v18+) installed. 

```shell
  yarn install
```

3. Run the App Locally
To start the development server, run:

```shell
yarn dev
```
The app will be available at http://localhost:5173/.

## Approach & Features

### Tech Stack

- Frontend: React + TypeScript + Vite
- State Management: Redux Toolkit (@reduxjs/toolkit)
- Styling: Tailwind CSS + Mantine UI
- Icons: React Icons

### Core Features

- Create, edit, delete notes
- Global state management using Redux Toolkit
- Local storage persistence: Notes are stored in Redux Persist (local storage) to retain state after reload.
- Search notes in real-time
- Sort notes (A-Z, Z-A, newly created, newly updated, Z-A)
- Responsive design


### Bonus Features Implemented
- Local storage persistence
Notes are stored in Redux Persist (local storage) to retain state after reload.
- Optimized Sorting & Searching
- Search bar to filter notes by title or content.
- 0ptions to sort notes alphabetically, by creation date, or by last updated date
- A confirmation dialog before deleting a note.

