import React, {Component} from 'react';

class Abc3 extends Component {
  handleClick() {
    console.log('this method is not very effective');
  }

  render() {
    return (
      <div>
        <h1>============another method without bind but not very effective======</h1>
        <button onClick={(e) => this.handleClick(e)}>
          button2
        </button>
      </div>
    );
  }
}

export default Abc3;