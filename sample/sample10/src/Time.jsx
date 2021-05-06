import React,{useState} from 'react';
import './App.css';

function Time() {

    let newTime = new Date().toLocaleTimeString();
    const [currentTime,setCtime]= useState(newTime); //array destructuring
    const UpdateTime=()=>{
        newTime = new Date().toLocaleTimeString();
        setCtime(newTime);
    }

    setInterval(UpdateTime,1000);
return(

    <>
        <h1>{currentTime}</h1>
        {/* <button onClick={UpdateTime}>Click Me</button> */}
    </>
) 
}

export default Time;
