import React from 'react'
import { Route, Routes } from 'react-router-dom'
import NoteForm from './NoteForm'
import Home from './Home';



const MainRoutes = () => {
  return (
    <Routes> 
        <Route path="/" element={<Home />}/>
        <Route path="/addnote" element={<NoteForm />}/>
    </Routes>
  )
}

export default MainRoutes