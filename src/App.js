import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
import Alert from './components/Alert';
import About from './components/About';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
function App() {

  const [mode, setmode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setmode("dark");
      document.body.style.backgroundColor = "#2c3e50";
      document.getElementById("textArea").style.backgroundColor = "grey";
      document.getElementById("textArea").style.color = "white";
      document.body.style.color = "white";
      showAlert(": Dark Mode enabled", "success");
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      document.getElementById("textArea").style.backgroundColor = "white";
      document.getElementById("textArea").style.color = "black";
      document.body.style.color = "black";
      showAlert(": Light Mode enabled", "success");
    }
  }
  return (
    <>
      <BrowserRouter>
        <Navbar mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <Routes>
          <Route exact path='/TextUtils-using-React-JS' element={<TextForm heading="Enter the text to analyze below" showAlert={showAlert} />} />
          <Route exact path='/about' element={<About mode={mode} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
