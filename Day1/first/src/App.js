
import './App.css';

import React from 'react';


function AlertButton() {
  // Define the function that will be called when the button is clicked
  const handleClick = () => {
    alert('Hello React!');
  };

  return (
    <button onClick={handleClick}>
      Click me
    </button>
  );
}

export default AlertButton;

