import React, {Component} from 'react';

class TemperatureInput extends Component {
  constructor(props) {
    super(props);
    this.state = {'temperature': ''};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({'temperature': event.target.value});
  }

  render() {
    const scales = {
      'c': 'celsius',
      'f': 'ferenhit'
    };
    const scale = this.props.scale;
    return (
      <fieldset>
        <legend>==============two inputs Temperature prediction {scales[scale]}</legend>
        <input value={this.state.temperature} onChange={this.handleChange} />       
      </fieldset>
    );
  }
}

export default TemperatureInput;