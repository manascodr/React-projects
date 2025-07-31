import React from "react";
import { useForm } from "react-hook-form";
import { nanoid } from 'nanoid';

const NoteForm = ({ notes, setnotes }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit=(data)=>{
    const newnote={
        id:nanoid(),
        title:data.title,
        content:data.content
    }
    setnotes([...notes,newnote])
    reset()
}


  return (
    <>
      <div>NoteForm</div>
      <form action=""  onSubmit={handleSubmit(onSubmit)}>
        <input {...register("title")} type="text" className="title" placeholder="Title"/>
        <textarea {...register("content")} className="content" placeholder="content"></textarea>
        <button>Add Note</button>
      </form>
    </>
  );
};

export default NoteForm;
