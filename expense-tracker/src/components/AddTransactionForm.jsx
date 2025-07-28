import React from 'react'
import { useForm } from "react-hook-form"

const AddTransactionForm = ({transactions,settransactions}) => {


  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) =>{
    console.log(data);
    
  }

  return (
    <div>Add Transaction
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <input {...register('amount')}type="number" placeholder='amount'/>
        <br />
        <input {...register('category')} type="text" placeholder='category'/>  
        <br />
        <button>Add</button>
      </form>
    </div>
  )
}

export default AddTransactionForm