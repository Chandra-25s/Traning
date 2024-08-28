// TextChanger.js
import React, { useState } from 'react';

function TextChanger() {
  const [text, setText] = useState('Click the button to change this text.');
  const handleClick = () => {
    setText('Hello React!');
  };

  return (
    <div>
      <p>{text}</p>
      <button onClick={handleClick}>Change Text</button>
    </div>
  );
}

export default TextChanger;

