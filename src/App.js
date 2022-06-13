import React, { useState } from "react";
import "./css/App.css";
// import showEror from "./components/showEror";
// import showText from "./components/showText";

function App() {
  const [text, setText] = useState("");

  const handleChange = (event) => {
    setText(event.target.value);
    console.log("value is:", event.target.value);
  };

  const sendClick = (event) => {
    event.preventDefault();
    localStorage.setItem('text' , JSON.stringify(text));
    // 👇️ value of input field
    console.log("handleClick 👉️", text);
  };

  const readClick = (event) => {
    event.preventDefault();
    const getTextStrg = localStorage.getItem('text');
    console.log("LocalStorage text : " + getTextStrg);
  };

  return (
    <div className="app-body">
      <input
        onChange={handleChange}
        value={text}
        className="text-input"
        type="text"
        placeholder="متن خود را وارد کنید ..."
        required
      ></input>
      <div className="button-grop">
        <button
          className="send-button"
          type="submit"
          id="send-button"
          onClick={sendClick}
        >
          ارسال
        </button>
        <button
          className="read-button"
          type="submit"
          id="read-button"
          onClick={readClick}
          // onClick={readClick}
        >
          خواندن
        </button>
      </div>
    </div>
  );
}

export default App;
