import React from "react";
import EditNote from "./EditNote";

const NoteList = ({ notes, setnotes }) => {
  const deleteHandler = (id) => {
    const updatednotes = notes.filter((note) => note.id !== id);
    setnotes(updatednotes);
  };

  const rendernotes = notes.map((note) => {
    return (
      <div key={note.id} className="note">
        <div className="btns">
          <EditNote notes={notes} setnotes={setnotes} />
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
    </>
  );
};

export default NoteList;
