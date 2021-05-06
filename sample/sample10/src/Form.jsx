import React, { useState } from "react";

const Form = () => {
  const [fullName, setFullName] = useState({
      fname: "",
      lname:"",
      email:"",
      phone:""
  });

  const onSubmit = (event) => {
    event.preventDefault();
    // alert('Form Submitted');

  };

  const inputEvent = (event) => {
    // console.log("clicked");
    // console.log(event.target.value);
    // const value=event.target.value;
    // const name=event.target.name;
    const {value,name}=event.target;
    setFullName((preValue)=>{

        return{
            ...preValue,
            [name]:value,
        }
        // if (name==='fname'){
        //     return{
        //         fname: value,
        //         lname:preValue.lname,
        //         email:preValue.email,
        //         phone:preValue.phone,
        //     };
        // } else if(name==='lname') {
        //     return{
        //         fname: preValue.fname,
        //         lname:value,
        //         email:preValue.email,
        //         phone:preValue.phone,
        //     };
        // } else if(name==='email') {
        //     return{
        //         fname: preValue.fname,
        //         lname:preValue.lname,
        //         email:value,
        //         phone:preValue.phone,
        //     };
        // } else if(name==='phone') {
        //     return{
        //         fname: preValue.fname,
        //         lname:preValue.lname,
        //         email:preValue.email,
        //         phone:value,
        //     };
        // }
    });

      };

  return (
    <>
      <div className="main_div">
        <form onClick={onSubmit}>
          <div>
            <h1>Hello ! {fullName.fname}  {fullName.lname} {fullName.email} {fullName.phone}</h1>
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
            <input
              type="email"
              placeholder="Enter your Eamil"
              name='email'
              onChange={inputEvent}
              value={fullName.email}
            ></input>
            <input
              type="number"
              placeholder="Enter your Mobile Number"
              name='phone'
              onChange={inputEvent}
              value={fullName.phone}
            ></input>
            <button type="submit">Click Here 👍</button>
          </div>
        </form>
      </div>
    </>
  );
};
export default Form;
