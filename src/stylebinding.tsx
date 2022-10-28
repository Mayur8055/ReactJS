import React from "react";
import './App';
import myStyles from './sample.module.css';
<br></br>
let fontcolor:any = {color:'black',backgroundColor:'grey',
fontSize :'10px',
padding : '10px',
fontWeight :'bold'
};
let ColorComponents=() =>{ return (
    <>
 <input type='text' value='Have trouble in Logging-in?' style={fontcolor}/>
 
</>
) }

export default ColorComponents