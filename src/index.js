import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Test1 from './demo1/Test1';
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

/*
updating the rendered element
*/
function tick() {
  const element5 = (
    <div>
      <h1>hello</h1>
      <h1>It is {new Date().toLocaleTimeString()}</h1>
    </div>
  );
  ReactDOM.render(element5, document.getElementById('root6'));
}

setInterval(tick, 1000);

/*
external component
 */
ReactDOM.render(<Test1 />, document.getElementById('root7'));

/*
user defined component
 */
function Welcome(props) {
    return <h1>Byy {props.name}</h1>
}

const element6 = <Welcome name="sara" />;

ReactDOM.render(element6, document.getElementById('root8'));

/*
composing components
 */
function App1() {
    return (
      <div>
        <Welcome name="a1" />
        <Welcome name="a2" />
        <Welcome name="a3" />
      </div>
    );
}

ReactDOM.render(<App1 />, document.getElementById('root9'));
serviceWorker.unregister();

