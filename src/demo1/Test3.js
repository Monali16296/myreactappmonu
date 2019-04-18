import React, {Component} from 'react';

class Test3 extends Component {

    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    render() {
      return (
        <div>
          <h1>====== test 3 =====</h1>
          <h1>time {this.state.date.toLocaleTimeString()}</h1>
        </div>
      );
    }
}

export default Test3;

