import { useState } from "react";
import "./App.css";
import { nanoid } from "nanoid";
import MainRoutes from "./Components/MainRoutes";

function App() {
  const [notes, setnotes] = useState([
    { id: nanoid(), title: "Title", content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos, blanditiis fugit praesentium ipsam doloribus, quasi non qui incidunt laborum eum facere aspernatur, quo quidem similique aut. Recusandae laboriosam laudantium earum!" },
  ]);

  return (
    <div className="main">
      <MainRoutes notes={notes} setnotes={setnotes} />
    </div>
  );
}

export default App;
