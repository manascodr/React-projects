import React from "react";
import { useNavigate } from "react-router-dom";
import NoteList from "./NoteList";


const Home = ({ notes, setnotes }) => {
  const navigate = useNavigate();

  return (
    <div className="home">
        <div className="btn">
      <button className="add-btn" onClick={() => navigate("/addnote")}>Add Note</button>
        </div>
      <NoteList notes={notes} setnotes={setnotes} />
    </div>
  );
};

export default Home;
