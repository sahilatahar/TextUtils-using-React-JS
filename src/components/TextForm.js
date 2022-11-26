import React, { useState } from 'react';


export default function TextForm(props) {

    const [text, updateText] = useState("");

    const toUppercase = () => {
        updateText(text.toUpperCase());
    }
    const toLowercase = () => {
        updateText(text.toLowerCase());
    }
    const onChange = (event) => {
        updateText(event.target.value);
    }
    const copyText = () => {
        navigator.clipboard.writeText(text);
        props.showAlert(": Text Copied!", "success");
    }
    const removeExtraSpaces = () => {
        updateText(text.replace(/\s+/g, ' ').trim());
    }
    const clearTextField = () => {
        updateText('');
    }
    return (

        <div className='container my-5'>
            <div className="mb-3">
                <h1>{props.heading}</h1>
                <textarea className="form-control border-dark" id="textArea" rows="10" value={text} onChange={onChange} placeholder='Enter Text Here'></textarea>
            </div>
            <button className="btn btn-primary mx-1 my-1" disabled={text.length === 0} onClick={toUppercase}> Convert To Uppercase </button>
            <button className="btn btn-primary mx-1 my-1" disabled={text.length === 0} onClick={toLowercase}> Convert To LowerCase </button>
            <button className="btn btn-primary mx-1 my-1" disabled={text.length === 0} onClick={copyText}> Copy text </button>
            <button className="btn btn-primary mx-1 my-1" disabled={text.length === 0} onClick={removeExtraSpaces}> Remove Extra Spaces </button>
            <button className="btn btn-primary mx-1 my-1" disabled={text.length === 0} onClick={clearTextField}> Clear Text </button>
            <h2 className='my-3'>Text Summary</h2>
            <h4 className='my-3'>{text === '' ? "0" : text.replace(/\s+/g, ' ').trim().split(" ").length} words and {text.length} characters</h4>
            <h2 className='my-3'>Preview</h2>
            <h5 className='my-3'>{text.length > 0 ? text.replace(/\s+/g, ' ').trim() : "Write something in textbox to see preview here"}</h5>
        </div>
    );
}
