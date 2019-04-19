import React , {Component} from 'react';

class Test4 extends Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
        () => this.tick(),
        1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }
  render() {
    return (
      <div>
        <h1>========no need to refresh test4===============</h1>
        <h1>it is {this.state.date.toLocaleTimeString()}</h1>
      </div>
    );
  }
}

export default Test4;