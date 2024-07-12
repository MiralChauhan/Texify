import React, { useState, useSyncExternalStore } from "react";

export default function About() {
  const [myStyle, setMyStyle] = useState({
    color: "black",
    backgroundColor: "white",
  });

  const [btnText, setBtnText] = useState("Enable Dark Mode");

  const toggleStyle = () => {
    if (myStyle.color === "black") {
      setMyStyle({
        color: "white",
        backgroundColor: "black",
        border: "2px solid white",
      });
      setBtnText("Enable Light Mode");
    } else {
      setMyStyle({
        color: "black",
        backgroundColor: "white",
      });
      setBtnText("Enable Dark Mode");
    }
  };

  return (
    <>
      <div className="container my-4" style={myStyle}>
        <h1 className="my-3">
          About <span className="text-primary">Textify</span>
        </h1>

        <div className="card my-2" style={myStyle}>
          <div className="card-header">Feature 1</div>
          <div className="card-body">
            <h5 className="card-title">Uppercase</h5>
            <p className="card-text">
              This button converts your entered text into uppercase.
            </p>
            <a href="#" className="btn btn-primary">
              Convert to Uppercase
            </a>
          </div>
        </div>

        <div className="card my-2" style={myStyle}>
          <div className="card-header">Feature 2</div>
          <div className="card-body">
            <h5 className="card-title">Lowercase</h5>
            <p className="card-text">
              This button converts your entered text into lowercase.
            </p>
            <a href="#" className="btn btn-primary">
              Convert to Lowercase
            </a>
          </div>
        </div>

        <div className="card my-2" style={myStyle}>
          <div className="card-header">Feature 3</div>
          <div className="card-body">
            <h5 className="card-title">Capitalize</h5>
            <p className="card-text">
              This button converts your entered text's first letter into
              uppercase.
            </p>
            <a href="#" className="btn btn-primary">
              Capitalize Text
            </a>
          </div>
        </div>

        <div className="card my-2" style={myStyle}>
          <div className="card-header">Feature 4</div>
          <div className="card-body">
            <h5 className="card-title">Remove Extra Space</h5>
            <p className="card-text">
              This button removes extra space from entered text.
            </p>
            <a href="#" className="btn btn-primary">
              Remove Extra Space
            </a>
          </div>
        </div>

        <div className="card my-2" style={myStyle}>
          <div className="card-header">Feature 5</div>
          <div className="card-body">
            <h5 className="card-title">Download</h5>
            <p className="card-text">
              This button downloads the entered text into text file.
            </p>
            <a href="#" className="btn btn-primary">
              Download Text
            </a>
          </div>
        </div>

        <div className="card my-2" style={myStyle}>
          <div className="card-header">Feature 6</div>
          <div className="card-body">
            <h5 className="card-title">Copy</h5>
            <p className="card-text">This button copies the entered text.</p>
            <a href="#" className="btn btn-primary">
              Copy Text
            </a>
          </div>
        </div>

        <div className="card my-2" style={myStyle}>
          <div className="card-header">Feature 7</div>
          <div className="card-body">
            <h5 className="card-title">Clear</h5>
            <p className="card-text">
              This button clears written text from text area.
            </p>
            <a href="#" className="btn btn-primary">
              Clear Text
            </a>
          </div>
        </div>

        <div className="card my-2" style={myStyle}>
          <div className="card-header">Feature 8</div>
          <div className="card-body">
            <h5 className="card-title">Additional</h5>
            <p className="card-text">
              Textify can count the words and characters that you write in text
              area and also can count the time, in how much time you can read
              the text. It also Previews the written text for easier reading.
            </p>
          </div>
        </div>
        <div className="container">
          <button onClick={toggleStyle} className="btn btn-dark my-2">
            {btnText}
          </button>
        </div>
      </div>
    </>
  );
}
