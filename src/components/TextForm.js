import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log('clicked - ' + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted into Uppercase","Success");
  };
  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted into Lowercase","Success");
  };
  const handleCapitalize = () => {
    let newText = text
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
    setText(newText);
    props.showAlert("Capitalized the first letter of each word","Success");
  };
  const handleExtraSpace = () => {
  let newText = text.split(/[  ]+/);
  setText(newText.join(" "));
  props.showAlert("Extra Space Removed","Success");
  };

  const handleDownloadClick = () => {
    // Blob is Built-in: The Blob object is a standard JavaScript API specifically designed for representing raw binary data or text content. It provides methods and properties tailored for this purpose.
    // A Blob, in JavaScript, is a versatile object that acts like a container for raw, unprocessed data, often used for representing files. It's like a digital bag you can fill with text, images, or other data. Importantly, Blobs allow you to specify the data's type (like text or image) using MIME types, ensuring browsers handle the download correctly. This makes Blobs a robust and standard way to download content or work with binary data within your React applications.
    const blob = new Blob([text], { type: "text/plain" });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "download.txt"; // Change filename as desired
    link.click();
    props.showAlert("Downloaded the text","Success");
  };
  const handleCopy = () => {
    var text = document.getElementById("text");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied the text","Success");
  };
  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text Cleared Successfully","Success");
  };
  const handleOnChange = (event) => {
    // console.log('handleOnChange');
    // this will help you type into text area...otherwise onchange func will be called but won't be able to write anything
    // sets written other values to text state variable
    setText(event.target.value);
  };

  // created state variable and function
  const [text, setText] = useState("Enter text here...");

  return (
    <>
      <div className="container my-3">
        <h2>{props.heading}</h2>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="text"
            value={text}
            // use of onchange event was must because without it we won't be able to write in textarea
            onChange={handleOnChange}
            rows="15"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          Covert to Uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLowClick}>
          Covert to Lowercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleCapitalize}>
          Capitalize Text
        </button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSpace}>
          Remove Extra Space
        </button>
        <button className="btn btn-primary mx-2" onClick={handleDownloadClick}>
          Download Text
        </button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>
          Copy Text
        </button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>
          Clear Text
        </button>
      </div>
      <div className="container my-2">
        <h3>Your Text Summary</h3>
        <p>Word Count: {text.split(" ").length}</p>
        <p>Character Count: {text.length}</p>
        <p>Read: {0.008 * text.split(" ").length} Minutes</p>
        <h4>Preview</h4>
        <p>{text}</p>
      </div>
    </>
  );
}
