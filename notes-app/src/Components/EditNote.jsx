// EditNote.js
import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useForm } from 'react-hook-form'

const EditNote = ({ notes, setnotes }) => {
  const { id } = useParams()
  const navigate = useNavigate()

  const noteToEdit = notes.find((note) => note.id === id)

  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      title: noteToEdit?.title || '',
      content: noteToEdit?.content || '',
    }
  })

  const onSubmit = (data) => {
    const updatedNotes = notes.map((note) =>
      note.id === id ? { ...note, title: data.title, content: data.content } : note
    )
    setnotes(updatedNotes)
    navigate('/') // Redirect to homepage
  }

  if (!noteToEdit) return <p>Note not found</p>

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Edit Note</h2>
      <input {...register('title')} placeholder="Title" />
      <textarea {...register('content')} placeholder="Content" />
      <button type="submit">Update Note</button>
    </form>
  )
}

export default EditNote
