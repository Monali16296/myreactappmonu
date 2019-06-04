import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Test1 from './demo1/Test1';
import Test2 from './demo1/Test2';
import Test3 from './demo1/Test3';
import Test4 from './demo1/Test4';
import Test5 from './demo1/Test5';
import Test6 from './demo1/Test6';
import Abc1 from './demo2/Abc1';
import Abc2 from './demo2/Abc2';
import Abc3 from './demo2/Abc3';
import LoginControl from './demo3/LoginControl';
import LoginControlCondition from './demo3/LoginControlCondition';
import Page from './demo3/Page';
import NumberList from './demo3/NumberList';
import NumberKeyList from './demo3/NumberKeyList';
import Blog from './demo3/Blog';
import BlogNew from './demo3/BlogNew';
import Def1 from './demo4/Def1';
import Def2 from './demo4/Def2';
import Def3 from './demo4/Def3';
import Def4 from './demo4/Def4';
import Def5 from './demo4/Def5';
import { Provider } from 'react-redux';
import configureStore from './store/configure-store';
import Calculator from './demo4/Calculator';
import Calculator1 from './demo4/Calculator1';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorker from './serviceWorker';

import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";

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
const element2 = <h1> total {2 + 2}</h1>;

ReactDOM.render(element2, document.getElementById('root2'));

/*
using javascript function in jsx
*/
const user = {
  'firstName': 'Neha',
  'lastName': 'Hingu'
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
  { className: 'greeting' },
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

/*
extracting components
 */
function formatDate(date) {
  return date.toLocaleDateString();
}

function Avatar(props) {
  return (
    <img
      className="Avatar"
      src={props.user.avatarUrl}
      alt={props.user.name}
    />
  );
}

function UserInfo(props) {
  return (
    <div className="UserInfo">
      <Avatar user={props.user} />
      <div className="UserInfo-name">{props.user.name}</div>
    </div>
  );
}

function Comment(props) {
  return (
    <div className="Comment">
      <UserInfo user={props.author} />
      <div className="comment-text">{props.text}</div>
      <div className="comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}

const comment = {
  date: new Date(),
  text: 'I hope you enjoy learning react',
  author: {
    name: 'Hello kitty',
    avatarUrl: 'https://placekitten.com/g/64/64',
  },
}

ReactDOM.render(
  <Comment
    date={comment.date}
    text={comment.text}
    author={comment.author}
  />,
  document.getElementById('root10')
);

/*
make clock compoent truly reusable
 */
function Clock(props) {
  return (
    <div>
      <h1>Hello</h1>
      <h2>It is {props.date.toLocaleTimeString()}</h2>
    </div>
  );
}

function tickNew() {
  ReactDOM.render(
    <Clock date={new Date()} />,
    document.getElementById('root11')
  );
}
setInterval(tickNew, 1000);

ReactDOM.render(<Test2 name="aaa" />, document.getElementById('root12'));

/*
local state to a class
 */
ReactDOM.render(<Test3 />, document.getElementById('root13'))

/*
lifecycle method to a class
 */
ReactDOM.render(<Test4 />, document.getElementById('root14'));

/*
data flows down
 */
ReactDOM.render(<Test5 />, document.getElementById('root15'));

/*
data flows down same components
 */
function App2() {
  return (
    <div>
      <Test6 />
      <Test6 />
      <Test6 />
    </div>
  );
}

ReactDOM.render(<App2 />, document.getElementById('root16'));

/*
handling events 1st topic
 */
function Fun1() {
  return (
    <div>
      <button onClick={activateLasers}>activate laser</button>
      <a href="#" onClick={activateLink}>click link</a>
    </div>
  );
}
function activateLasers() {
  console.log('11');
}
function activateLink(e) {
  e.preventDefault();
  console.log('link is clicked');
}
ReactDOM.render(<Fun1 />, document.getElementById('root17'));

/*
toggle
 */
ReactDOM.render(<Abc1 />, document.getElementById('root18'));

/*
if don't want to bind handleClick()
 */
ReactDOM.render(<Abc2 />, document.getElementById('root19'));

/*
another method without bind but not effective
 */
ReactDOM.render(<Abc3 />, document.getElementById('root20'));

/*
load components according to condition
 */
function UserGreeting() {
  return <h1>===conditional rendering Welcome back</h1>;
}

function GuestGreeting() {
  return <h1>===conditional rendering Please sign up</h1>
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

ReactDOM.render(<Greeting isLoggedIn={false} />, document.getElementById('root21'));

/*
element variable example
 */
ReactDOM.render(<LoginControl />, document.getElementById('root22'));

/*
inline if with logical && operator
 */
function Mailbox(props) {
  const unreadMessages = props.unreadMessages;
  return (
    <div>
      <h1>========&& expression welcome</h1>
      {unreadMessages.length > 0 &&
        <h1>{unreadMessages.length} unread messages</h1>
      }
    </div>
  );
}

const messages = ['React', 'Re:React', 'Re:Re:React'];

ReactDOM.render(<Mailbox unreadMessages={messages} />, document.getElementById('root23'));

/*
inline if else with conditional operator
 */
function Xyz1(props) {
  const isLoggedIn = props.isLoggedIn;
  return (
    <h1>=======inline if else->the user is {isLoggedIn ? 'loggedin' : 'not logged in'}</h1>
  );
}

ReactDOM.render(<Xyz1 isLoggedIn={false} />, document.getElementById('root24'));

/*
conditional operator 2nd example
 */
ReactDOM.render(<LoginControlCondition />, document.getElementById('root25'));

/*
preventing component from rendering
 */
ReactDOM.render(<Page />, document.getElementById('root26'));

/*
using map function
 */
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((number) => number * 2);
console.log(doubled);

/*
rendering multiple components
 */
const numbers2 = [1, 2, 9, 0, 11];
const xyz2 = numbers2.map((number3) =>
  <li>{number3}</li>
);

ReactDOM.render(
  <div>
    <h1>=======list</h1>
    <ul>{xyz2}</ul>
  </div>,
  document.getElementById('root27')
);

/*
with component map
 */
const numbers4 = [1, 2, 3, 4, 5];
ReactDOM.render(<NumberList numbers4={numbers4} />, document.getElementById('root28'));

/*
correct key usage
 */
const numbers5 = [1, 2, 3, 4, 5];
ReactDOM.render(<NumberKeyList numbers={numbers5} />, document.getElementById('root29'));

/*
keys must only be unique among siblings
 */
const posts = [
  { id: 1, title: 'title 1', content: 'content 1' },
  { id: 2, title: 'title 2', content: 'content 2' }
];

ReactDOM.render(<Blog posts={posts} />, document.getElementById('root30'))

/*
key using prop
 */
ReactDOM.render(<BlogNew posts={posts} />, document.getElementById('root31'));

/*
use of Route
*/
function Demo32() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to='/demo'>Click here</Link>
          </li>
          <li>
            <a href='/demo2'>Click here 2</a>
          </li>
        </ul>
      </div>
      <Route path='/demo' component={Def1} />
      <Route path='/demo2' component={App} />
    </Router>
  );
}
ReactDOM.render(<Demo32 />, document.getElementById('root32'));

/*
basic form demo
*/
ReactDOM.render(<Def2 />, document.getElementById('root33'));

/*
exact form implementation
*/
ReactDOM.render(<Def3 />, document.getElementById('root34'));

/*
advanced form implementation
*/
ReactDOM.render(<Def4 />, document.getElementById('root35'));

/*
input editable
*/
ReactDOM.render(<label>===input editable<input value='hi' /></label>, document.getElementById('root36'));
setTimeout(function () {
  ReactDOM.render(<label>===input editable<input value={null} /></label>, document.getElementById('root36'));
}, 1000);

ReactDOM.render(<Calculator />, document.getElementById('root37'));

/*
two inputs in temp
*/
ReactDOM.render(<Calculator1 />, document.getElementById('root38'));

/*
For session
*/

let initialState = {};
try {
  initialState = JSON.parse(localStorage.getItem('state')) || {};
  console.log(initialState);
  console.log("here");
} catch (e) {
  console.log('localstorage get error', e);
}
const store = configureStore(initialState);
ReactDOM.render(<Provider store={store}>
  <Def5 />
</Provider>,
  document.getElementById('root39'));
serviceWorker.unregister();