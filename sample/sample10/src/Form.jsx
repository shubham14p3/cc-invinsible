import React,{useState} from "react";

const Form = () => {

    const [name,setName]= useState();
    const [fullname,setFullName]= useState();
  const inputEvent = (event) => {
    console.log("clicked");
    setName(event.target.value);
  };

  const onSubmit=()=>{
    setFullName(name);
  }

  return (
    <>
      <div>
        <h1>Hello ! {fullname}</h1>
        <input
          type="text"
          placeholder="Enter your Name"
          onChange={inputEvent}
          value={name}
        ></input>
        <button onClick={onSubmit}>Click Here 👍</button>
      </div>
    </>
  );
};
export default Form;
