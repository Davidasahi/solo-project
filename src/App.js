import React, { useState } from 'react';
import Captcha from './Components/Captcha.js';

const App = () => {
  const [key, setKey] = useState(0);

  //Shuffle button function click
  function handleClick() {
    setKey((prevKey) => prevKey + 1);
  }

  //return on index.html
  return (
    <div class="main">
      <h1>Captcha Doggy challenge</h1>
      <input type="test" id="name" placeholder="Your name"></input>
      <div>
        <Captcha key={key} />
      </div>
      <button id="button" onClick={handleClick}>
        Shuffle!
      </button>
      <button id="button">Send your answer!</button>
    </div>
  );
};

export default App;
