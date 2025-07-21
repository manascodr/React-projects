import { nanoid } from "nanoid";
import React, { useState } from "react";

const Form = (props) => {
  const details = props.details
  const setdetails = props.setdetails

  const [name, setname] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    const newdetail = {
      id: nanoid(),
      name,
    };
    setdetails([...details,newdetail])
    setname("");
  };
console.log(details);

  return (
    <>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          onChange={(e) => setname(e.target.value)}
          value={name}
        />
        <button>Submit</button>
      </form>
    </>
  );
};

export default Form;
