import React from "react";
import ReactDom from "react-dom";
const name = "Shubham";
const img1 = "https://picsum.photos/200/300";
const img2 = "https://picsum.photos/250/300";
const img3 = "https://picsum.photos/300/300";
const link = "https://www.shubhamraj.dev";
ReactDom.render(
  <>
<h1 contentEditable="true">My name is {name}</h1>
<img src={img1} alt="RandomImage"/>
<img src={img2} alt="RandomImage"/>
<a href={link} target="_shubham">
  
<img src={img3} alt="RandomImage"/>
</a>
</>
, document.getElementById("root"));
