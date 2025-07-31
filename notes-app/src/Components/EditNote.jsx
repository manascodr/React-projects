import React from 'react'
import { useParams } from 'react-router-dom'

const EditNote = (notes,setnotes) => {
    const params = useParams()
  return (
    <>
        <button className='edit-btn'>Edit</button>
    </>
  )
}

export default EditNote