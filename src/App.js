import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react';
import Alert from './components/Alert';
import {
  Routes,
  Route,
  HashRouter
} from "react-router-dom";

function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const [btnType, setbtnType] = useState('primary');

  const showAlert = (message, type) => {
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() => {
        setAlert(null);
      }, 1500);
  }

  const toggleModeBlue = () => {
    if(mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#08033b';
      showAlert("Blue dark mode has been enabled", "success");
      setbtnType('primary');
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = '#ffffff';
      showAlert("Light mode has been enabled", "success");
      setbtnType('primary');
      
    }
  };

  const toggleModeRed = () => {
    if(mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#93010f';
      showAlert("Red dark mode has been enabled", "success");
      setbtnType('danger');
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = '#ffffff';
      showAlert("Light mode has been enabled", "success");
      setbtnType('primary');
    }
  };

  const toggleModeGreen = () => {
    if(mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#004525';
      showAlert("Green dark mode has been enabled", "success");
      setbtnType('success');
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = '#ffffff';
      showAlert("Light mode has been enabled", "success");
      setbtnType('primary');
    }
  };

  return (
    <>
    {/* <Navbar title = "TextUtils" aboutText = "About TextUtils"/> */}
    {/* <Navbar/> */}
    <HashRouter>
      <Navbar title = "TextUtils" mode = {mode} toggleModeBlue = {toggleModeBlue} toggleModeRed = {toggleModeRed} toggleModeGreen = {toggleModeGreen}/>
      <Alert alert = {alert} showAlert = {showAlert} />
      <div className = "container my-3">
        <Routes>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/" element={<TextForm showAlert = {showAlert} heading = "Enter text to analyze" mode = {mode} btnType = {btnType} />}></Route>
        </Routes> 
      </div>
    </HashRouter>
    </>
  );
}

export default App;
