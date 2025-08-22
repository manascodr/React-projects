import { configureStore } from '@reduxjs/toolkit'
import todosSlice from './reducers/todoSlice';


export const store = configureStore({
  reducer: {
    todosSlice
  },
})

export default store