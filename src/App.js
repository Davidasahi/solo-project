import React, { useState, useRef } from 'react';
import Captcha from './Components/Captcha.js';

const App = () => {
  const [key, setKey] = useState(0);
  const setRef = useRef(null); // Create a reference to the input element

  //Shuffle button function click
  function handleClick() {
    setKey((prevKey) => prevKey + 1);
  }

  // Reset the input field value to an empty string
  if (setRef.current) {
    setRef.current.value = '';
  }

  //return on index.html
  return (
    <div class="main">
      <h1>Captcha challenge</h1>
      <input type="test" id="name" ref={setRef} placeholder="Your name"></input>
      <div>
        <Captcha key={key} />
      </div>
      <button id="button" onClick={handleClick}>
        Shuffle!
      </button>
      <button id="button">More challenge</button>
    </div>
  );
};

export default App;
