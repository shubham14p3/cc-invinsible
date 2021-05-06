import React,{useState} from 'react';
import './App.css';

function App() {
  const [count,setCount]= useState(0); //array destructuring

const IncNum=()=>{
  // console.log(IncNum);
  setCount(count+1);
  console.log("Clicked");
  // console.log(count);
}

const DecNum=()=>{
  // console.log(IncNum);
  setCount(count-1);
  console.log("Clicked");
  // console.log(count);
}

  return (
    <>
    <h1>{count}</h1>
    <button onClick={IncNum}>Click Me</button>
    <button onClick={DecNum}>Click Me</button>
    </>
  );
}

export default App;
