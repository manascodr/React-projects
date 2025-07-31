import React from 'react'

const NoteList = ({ notes, setnotes }) => {

    const rendernotes = notes.map((note)=>{
     return  ( <div key={note.id}> 
        <p>{note.title}</p>
        <p>{note.content}</p>
        </div>
        )
    })
  return (
    <>
    <div className="notes">
        {rendernotes}
    </div>
    </>
  )
}

export default NoteList