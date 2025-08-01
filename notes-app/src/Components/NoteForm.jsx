import React from "react";
import { useForm } from "react-hook-form";
import { nanoid } from "nanoid";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


const NoteForm = ({ notes, setnotes }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const onSubmit = (data) => {
    const newnote = {
      id: nanoid(),
      title: data.title,
      content: data.content,
    };
    setnotes([...notes, newnote]);
    toast.success("note created")
    reset();
    navigate("/");
  };

  return (
    <>
      <div className="form-cont">
        NoteForm
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register("title")}
            type="text"
            className="title"
            placeholder="Title"
          />
          <textarea
            {...register("content")}
            className="content"
            placeholder="content"
          ></textarea>
          <button className="add-btn">Add Note</button>
        </form>
      </div>
    </>
  );
};

export default NoteForm;
