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

  const showAlert = (message, type) => {
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() => {
        setAlert(null);
      }, 1500);
  }

  const toggleMode = () => {
    if(mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#08033b';
      showAlert("Dark mode has been enabled", "success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = '#ffffff';
      showAlert("Light mode has been enabled", "success");
    }
  };


  return (
    <>
    <HashRouter>
      <Navbar title = "TextUtils" mode = {mode} toggleMode = {toggleMode} />
      <Alert alert = {alert} showAlert = {showAlert} />
      <div className = "container my-3">
        <Routes>
          <Route path="/about" element={<About mode = {mode}/>}></Route>
          <Route path="/" element={<TextForm showAlert = {showAlert} 
          heading = " Try TextUtils - Word Counter, Character Counter" mode = {mode} />}></Route>
        </Routes> 
      </div>
    </HashRouter>
    </>
  );
}

export default App;
