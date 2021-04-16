import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const name = 'Nitai Charan';
const element = <h1>Hello, {name}</h1>;

function tick() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  // highlight-next-line
  ReactDOM.render(element, document.getElementById('root'));
}

setInterval(tick, 1000);
