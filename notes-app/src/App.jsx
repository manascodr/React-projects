import { useState } from "react";
import "./App.css";
import { nanoid } from "nanoid";
import MainRoutes from "./Components/MainRoutes";
import Home from "./Components/Home";
import NoteForm from "./Components/NoteForm";
import NoteList from "./Components/NoteList";


function App() {
  const [notes, setnotes] = useState([
    { id: nanoid(), title: "yogi", content: "lorm ipusmamasdf" },
  ]);

  return (
    <>
      <div className="main">
        <MainRoutes />
        <NoteForm notes={notes} setnotes={setnotes} />
        <NoteList notes={notes} setnotes={setnotes} />
      </div>
    </>
  );
}

export default App;
