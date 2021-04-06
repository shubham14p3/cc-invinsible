import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const flname = "Shubham Raj";
ReactDOM.render(
  <>
    <h1>My name is {flname}</h1>
    <p>My lucky number is {5+6}</p>   
    <p>My lucky number is {Math.random()}</p>   
  </>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
