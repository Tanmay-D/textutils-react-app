import React, {useState} from 'react';

export default function TextForm(props) {

    const [text, setText] = useState('');

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase!", "success");
    }

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase!", "success");
    }

    const handleAlClick = () => {
        var chars = text.toUpperCase().split("");

        for(var i = 0; i < chars.length; i += 2) {
            chars[i] = chars[i].toLowerCase();
        }

        let newText = chars.join("");
        setText(newText);
        props.showAlert("Converted to alternatecase!", "success");
    }

    const handleClearClick = () => {
        let newText = '';
        setText(newText);
        props.showAlert("Text cleared!", "success");
    }

    const handlOnChange = (event) => {
        setText(event.target.value);
    }

  return (
    <>
    <div>
        <div className = "mb-3" style = {{color: props.mode === 'dark' ? 'white' : 'black'}}>
            <h1 className = "mb-4">{props.heading}</h1>
            <textarea className = "form-control" value = {text} onChange = {handlOnChange} 
            style = {{backgroundColor: props.mode === 'dark' ? '#201d3d' : 'white', 
                      color: props.mode === 'dark' ? 'white' : 'black'}} id = "myBox" rows = "8"></textarea>
        </div>
        <button disabled = {text.length === 0} className = "btn btn-primary mx-1 my-2" onClick = {handleUpClick} >Convert to Uppercase</button>
        <button disabled = {text.length === 0} className = "btn btn-primary mx-1 my-2" onClick = {handleLoClick} >Convert to Lowercase</button>
        <button disabled = {text.length === 0} className = "btn btn-primary mx-1 my-2" onClick = {handleAlClick} >Convert to Alternatecase</button>
        <button disabled = {text.length === 0} className = "btn btn-primary mx-1 my-2" onClick = {handleClearClick} >Clear</button>
    </div>
    <div className = "container my-3" style = {{color: props.mode === 'dark' ? 'white' : 'black'}}>
        <h2>Your Text Summary</h2>
        <p>{text.split(/\s+/).filter((element) => {return element.length !== 0}).length} words and {text.length} characters</p>
        <p>{0.008 * (text.split(/\s+/).filter((element) => {return element.length !== 0}).length)} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text: "Nothing to preview!"}</p>
    </div>
    </>
  )
}
