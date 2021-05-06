import React, { useState } from "react";

const Form = () => {
  const [fullName, setFullName] = useState({
      fname: "",
      lname:"",
  });

  const onSubmit = (event) => {
    event.preventDefault();
    alert('Form Submitted');

  };

  const inputEvent = (event) => {
    // console.log("clicked");
    // console.log(event.target.value);
    const value=event.target.value;
    const name=event.target.name;
    setFullName((preValue)=>{
        if (name==='fname'){
            return{
                fname: value,
                lname:preValue.lname,
            };
        } else if(name==='lname') {
            return{
                fname: preValue.fname,
                lname:value,
            };
        }
    });

      };

  return (
    <>
      <div className="main_div">
        <form onClick={onSubmit}>
          <div>
            <h1>Hello ! {fullName.fname}  {fullName.lname}</h1>
            <input
              type="text"
              placeholder="Enter your First Name"
              name='fname'
              onChange={inputEvent}
              value={fullName.fname}
            ></input>

            <input
              type="text"
              placeholder="Enter your Second Name"
              name='lname'
              onChange={inputEvent}
              value={fullName.lname}
            ></input>
            <button type="submit">Click Here 👍</button>
          </div>
        </form>
      </div>
    </>
  );
};
export default Form;
