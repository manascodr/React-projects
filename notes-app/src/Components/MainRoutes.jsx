import React from 'react'
import { Route, Routes } from 'react-router-dom'
import NoteForm from './NoteForm'
import Home from './Home'
import EditNote from './EditNote'

const MainRoutes = ({ notes, setnotes }) => {
  return (
    <Routes>
      <Route path="/" element={<Home notes={notes} setnotes={setnotes} />} />
      <Route path="/addnote" element={<NoteForm notes={notes} setnotes={setnotes} />} />
      <Route path="/editnote:id" element={<EditNote notes={notes} setnotes={setnotes} />} />
    </Routes>
  )
}

export default MainRoutes
