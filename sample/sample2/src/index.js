import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from "./App";
import reportWebVitals from "./reportWebVitals";

const fname = "Shubham";
const lname = "Raj";
ReactDOM.render(
  <>
    <h1>My name is {fname + lname} with + number but no space </h1>
    <h1>My name is {fname} {lname} concatenate method</h1>
    <h1>My name is {fname+" "+lname}</h1>
    <h1>{`My name is ${fname} ${lname} with tempelate literals`}</h1>
    <p>My lucky number is {5+6}</p>   
    <p>My lucky number is {Math.random()}</p>   
  </>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
