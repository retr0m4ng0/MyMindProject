import React from "react";

const Header = ({ title, darkMode, toggleDarkMode }) => {
  return (
    <header>
      <h1>{title}</h1>
      <label class="switch toggle-switch">
        <input type="checkbox" checked={darkMode} onChange={toggleDarkMode} />
        <span class="slider"></span>
      </label>
    </header>
  );
};

export default Header;
