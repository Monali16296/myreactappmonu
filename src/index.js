import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

ReactDOM.render(
  <h1>Hi Monali</h1>,
  document.getElementById('my-root')
);
serviceWorker.unregister();