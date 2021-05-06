import React,{useState} from 'react';
import './App.css';

function Event() {
    const purple= "#8e44ad";
    const [bg,setBg]=useState(purple );
    const BgChange=()=>{
        // console.log("clicked");
        let newBg='#34495e';
       setBg(newBg);        
    }

return(

    <><div style={{backgroundColor:bg}}>
        <button onClick={BgChange}>Click Me</button>
        </div>
    </>
) 
}

export default Event;
