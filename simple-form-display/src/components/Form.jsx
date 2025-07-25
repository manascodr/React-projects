import { nanoid } from "nanoid";
import React, { useEffect, useState } from "react";

const Form = (props) => {
  const details = props.details
  const setdetails = props.setdetails



  const [name, setname] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    const randomImg = `https://picsum.photos/300/200?random=${Math.floor(Math.random() * 1000)}`;


    const newdetail = {
      id: nanoid(),
      name,
      img:randomImg
    };
    setdetails([...details,newdetail])
    setname("");


  };
    useEffect(() => {
    console.log(details);
  }, [details])

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
