import React, {Component} from 'react';

class Abc2 extends Component {
  handleClick = () => {
    console.log('clicked without bind');
  }

  render() {
    return(
      <div>
        <h1>======without bind========</h1>
        <button onClick={this.handleClick}>
          click me
        </button>
      </div>
    );
  }
}

export default Abc2;