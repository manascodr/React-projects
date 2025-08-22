import { useForm } from 'react-hook-form'
import { nanoid } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { addTodo } from './store/reducers/todoSlice';
import Todolist from './Todolist';


function App() {
  const { register, handleSubmit } = useForm()
  const dispatch = useDispatch()
  

  const onSubmit = (data) => {
    const newTodo = {
      id: nanoid(),
      text: data.text,
    }
    dispatch(addTodo(newTodo))
  }

  return (
    <>
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("text")} type="text" placeholder="Enter todo"></input>
      <button type="submit">Add Todo</button>
    </form>
    <Todolist />
    </>
  )
}

export default App
