import React from 'react';
import Captcha from './Components/Captcha.js';

const App = () => {
  function handleClick() {}

  return (
    <div class="main">
      <h1>Captcha Doggy challenge</h1>
      <input type="test" id="name" placeholder="Your name"></input>
      <div>
        <Captcha />
      </div>
      <button id="button" onClick={handleClick}>
        Send your answer!
      </button>
    </div>
  );
};

export default App;
