import React, { useState } from "react";

const Form = () => {
  const [name, setName] = useState();
  const [fullName, setFullName] = useState();
  const [lastName, setLastName] = useState();
  const [lastNameNew, setLastNameNew] = useState();

  const onSubmit = (event) => {
    event.preventDefault();
    setFullName(name);
    setLastNameNew(lastName);
  };

  const inputEvent = (event) => {
    // console.log("clicked");
    setName(event.target.value);
  };

  const inputEventTwo = (event) => {
    // console.log("clicked");
    setLastName(event.target.value);
  };
  return (
    <>
      <div className="main_div">
        <form onClick={onSubmit}>
          <div>
            <h1>Hello ! {fullName}  {lastNameNew}</h1>
            <input
              type="text"
              placeholder="Enter your First Name"
              onChange={inputEvent}
              value={name}
            ></input>

            <input
              type="text"
              placeholder="Enter your Second Name"
              onChange={inputEventTwo}
              value={lastName}
            ></input>
            <button type="submit">Click Here 👍</button>
          </div>
        </form>
      </div>
    </>
  );
};
export default Form;
