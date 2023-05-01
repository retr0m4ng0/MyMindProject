import React, { useState, useEffect } from "react";
import Header from "./Header";
import ConfessionForm from "./ConfessionForm";
import ConfessionList from "./ConfessionList";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Slide } from 'react-toastify';
import './styles.css';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const body = document.querySelector("body");
    darkMode ? body.classList.add("dark-mode") : body.classList.remove("dark-mode");
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="container">
      <Header title="MyMind" darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <div className="confession-form">
        <ConfessionForm />
      </div>
      <div className="confession-list">
        <ConfessionList />
      </div>
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        transition={Slide}
        theme="dark"
      />
    </div>
  );
};

export default App;