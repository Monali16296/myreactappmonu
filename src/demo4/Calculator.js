import React, {Component} from 'react';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {'temperature': ''};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({'temperature': event.target.value});
  }

  render() {
    const temperature = this.state.temperature;
    return (
      <fieldset>
        <legend>==============Temperature prediction</legend>
        <input value={this.state.temperature} onChange={this.handleChange} />
        <BoilingVerdict celsius={parseFloat(temperature)} />
      </fieldset>
    );
  }
}

function BoilingVerdict(props) {
  if (props.celsius >= 100) 
    return <p>the water would boil</p>;
  else
    return <p>the water would not boil</p>;
}
export default Calculator;