import { nanoid } from "nanoid";
import React, { useState, useEffect } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";


const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: nanoid(),
      task: "yogi dancer",
      isCompleted: false,
    },
  ]);
  
    useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (storedTasks) setTasks(storedTasks);
  }, []);

    useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <>
      <TodoForm tasks={tasks} setTasks={setTasks} />
      <TodoList tasks={tasks} setTasks={setTasks} />
    </>
  );
};

export default App;
