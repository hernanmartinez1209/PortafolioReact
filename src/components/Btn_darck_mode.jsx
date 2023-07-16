import React, { useEffect, useState } from 'react'
import stylesDarckMode from "./styles/darckmode.css";
export const Btn_darck_mode = () => {
    const [darkMode, setDarkMode] = useState(false);

    const handleDarkModeToggle = () => {
      setDarkMode(!darkMode);
    };
  
    useEffect(() => {
      if (darkMode) {
        document.body.classList.add('dark-mode');
      } else {
        document.body.classList.remove('dark-mode');
      }
    }, [darkMode]);
  
  return (
    <button
      className={`dark-mode-button ${darkMode ? 'dark-mode' : ''}`}
      onClick={handleDarkModeToggle}
    >
      {darkMode ?'🌑'  :  '🌞'}
    </button>
  )
}
