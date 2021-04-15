import React from "react";
import ReactDom from "react-dom";
import './index.css';
let curDate = new Date();
curDate =curDate.getHours();
let greeting="";
const cssStyle={};

if (curDate>=1 &&curDate<12){
  greeting ="Good Morning";
  cssStyle.color="green";
}else if(curDate>=12 && curDate<19){
}else{
  greeting ="Good Evening";
  cssStyle.color="Yellow";  
}

ReactDom.render(
  <>
<p>Hello now is {curDate} and <span style={cssStyle}>{greeting}</span></p>
</>
, document.getElementById("root"));
