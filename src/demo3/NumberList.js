import React, {Component} from 'react';

class NumberList extends Component {
  constructor(props) {
    super(props);
    this.numbers4 = props.numbers4;
  }
  render() {
    const listItems = this.numbers4.map( (numbers5) =>
        <li key={numbers5.toString()}>{numbers5}</li>

    );
    return (
      <div>
        <h1>====with component map</h1>
        <ul>{listItems}</ul>
      </div>
    );
  }
}

export default NumberList;