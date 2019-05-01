import React, {Component} from 'react';

class NumberKeyList extends Component {
  constructor(props) {
    super(props);
    this.numbers = props.numbers;
  }

  render() {
    const listItems = this.numbers;
    const aa = listItems.map((number) =>
      <ListItem key={number.toString()}
       value={number} />
    );

    return (
      <div>
        <h1>========correct key usage</h1>
        <ul>
          {aa}
        </ul>
      </div>
    );
  }
}
function ListItem(props) {
    return (
        <li>{props.value}</li>
    );
}
export default NumberKeyList;