import { nanoid } from "nanoid";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const AddTransactionForm = ({ transactions, settransactions }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const finalAmount =
      data.tran === "income" ? +data.amount : -Math.abs(data.amount);

    const newTransaction = {
      id: nanoid(),
      type: data.type,
      amount: finalAmount,
    };
    settransactions([...transactions, newTransaction]);
    toast.success('Added')
    reset();
  };
  useEffect(() => {
    console.log(transactions);
  
  }, [transactions])

  return (
    <div>
      Add Transaction
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <label className="label">
          <input type="radio" value="income" {...register("tran")} />
          Income
        </label>

        <label className="label">
          <input type="radio" value="expense" {...register("tran")} />
          Expense
        </label>
        <br />

        <input
          {...register("amount", { valueAsNumber: true })}
          type="number"
          placeholder="amount"
        />
        <br />
        <input {...register("type")} type="text" placeholder="category" />
        <br />
        <button>Add</button>
      </form>
    </div>
  );
};

export default AddTransactionForm;
