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

/*
can also put any valid javascript expression in curly braces
*/
const element2 = <h1> total {2+2}</h1>;

ReactDOM.render(element2, document.getElementById('root2'));

/*
using javascript function in jsx
*/
const user = {
  'firstName' : 'Neha',
  'lastName' : 'Hingu'
};

function formatName() {
	return user.firstName + ' ' + user.lastName;
}

const element3 = <h1>Ok {formatName()}</h1>;

ReactDOM.render(element3, document.getElementById('root3'));

/*
jsx inside if statement
*/
function nameFun() {
	if (user) {
		return <h1>Ok {formatName()}</h1>;
	}
	return <h1>ok stranger</h1>;
}

ReactDOM.render(nameFun(), document.getElementById('root4'));

/*
can also create element like this
*/
const element4 = React.createElement(
  'h1',
  {className: 'greeting'},
  'Hello World'
);

ReactDOM.render(element4, document.getElementById('root5'));
serviceWorker.unregister();

