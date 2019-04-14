import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

/*
without using external component
*/
ReactDOM.render(
  <h1>Hi Monali</h1>,
  document.getElementById('my-root')
);

/*
embedding expressions in jsx
*/
const name = "Mohit";
const element = <h1> Hey {name}</h1>;

ReactDOM.render(element, document.getElementById('root1'));

serviceWorker.unregister();

