import { nanoid } from "nanoid";
import React, { useState } from "react";


const TodoForm = ({ tasks, setTasks }) => {
  const [input, setInput] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    const newtask = {
      id: nanoid(),
      task: input,
      isCompleted: false,
    };
    setTasks([...tasks, newtask]);
    setInput("");
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button>Add</button>
      </form>
    </div>
  );
};

export default TodoForm;
