import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo } from "./store/reducers/todoSlice";


const Todolist = () => {
  const todos = useSelector((state) => state.todosSlice.todos);
  const dispatch = useDispatch()
  
  const renderTodos = todos.map((todo) => { 
    return (
      <div key={todo.id}>
        <span>{todo.text}</span> <button onClick={() => dispatch(removeTodo(todo.id))}>remove</button>  
      </div>
    )
  });

  return <div>{renderTodos}</div>;
};

export default Todolist;
