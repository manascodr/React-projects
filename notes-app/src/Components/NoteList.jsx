import React from "react";
import EditNote from "./EditNote";
import { Link, useNavigate } from "react-router-dom";

const NoteList = ({ notes, setnotes }) => {

  const navigate = useNavigate()
  const deleteHandler = (id) => {
    const updatednotes = notes.filter((note) => note.id !== id);
    setnotes(updatednotes);
  };

  const editHandler=()=>{
    navigate(`/editnote/${note.id}`)
  }

  const rendernotes = notes.map((note) => {
    return (
      <div key={note.id} className="note">
        <div className="btns">
          <Link className="edit-btn" to={`/editnote/${note.id}`}>Edit</Link>
          <button className="delete-btn" onClick={() => deleteHandler(note.id)}>
            delete
          </button>
        </div>
        <p className="title">{note.title}</p>
        <p className="content">{note.content}</p>
      </div>
    );
  });
  return (
    <>
      <h1>All Notes</h1>
      <div className="notes-cont">{rendernotes}</div>
      {/* <EditNote notes={notes} setnotes={setnotes} id={note.id} /> */}
    </>
  );
};

export default NoteList;
