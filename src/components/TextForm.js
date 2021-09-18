import React,{useState} from 'react'
import propTypes from 'prop-types'
export default function TextForm(props) {

  const [text,setText]=useState("");
  const handleUpClick= ()=>{
    console.log("upper case is clicked : "+text);
    let  newText =text.toUpperCase();
    setText(newText);
  }
  const handleLowerClick= ()=>{
    console.log("Lower case is clicked : "+text);
    let  newText =text.toLowerCase();
    setText(newText);
  }
  const handleOnChange= (event)=>{
    console.log("onChange");
    setText(event.target.value)
  }

  return (
        
     <>
      <div className="container">  
      
        <div className="mb-3">
          <h2>Your Text</h2>
          <textarea className="form-control" value={text} onChange={handleOnChange} id="myTextBox" cols="10" rows="10"></textarea>
        </div>
        
        <button className="btn.primary mx-1" onClick={handleUpClick}>Convert to uppercase</button>
        <button className="btn-btn.primary mx-1" onClick={handleLowerClick}>Convert to Lowercase</button>
      </div>
      
      <div className="container">
      <h2>Your text sumary</h2>

        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008*text.split(" ").length} minutes to read (average)</p>
      </div>
      <div clasName="container">
      <h2>Preview</h2>
          <p>{text}</p>
      </div>
      </>
    )
}