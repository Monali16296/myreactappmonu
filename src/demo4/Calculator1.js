import React, {Component} from 'react';
import TemperatureInput from './TemperatureInput';

class Calculator1 extends Component {
  render() {
    return (
      <div>
        <TemperatureInput scale="c" />
        <TemperatureInput scale="f" />
      </div>
    );
  }
}

export default Calculator1;