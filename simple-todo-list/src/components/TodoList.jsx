import React from "react";

const TodoList = ({ tasks, setTasks }) => {
  const deleteHandler = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  const toggleCompletion = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
    );
    setTasks(updatedTasks);
  };

  const renderTasks = tasks.map((task) => (
    <div key={task.id}>
      <input
        type="checkbox"
        onChange={() => toggleCompletion(task.id)}
        checked={task.isCompleted}
      />
      {task.task}
      <button onClick={() => deleteHandler(task.id)}>delete</button>
    </div>
  ));

  return <div className="tasks">{renderTasks}</div>;
};

export default TodoList;
