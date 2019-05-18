import React, {Component} from 'react';

class Def2 extends Component {
    constructor(props) {
      super(props);
      this.state = {        
        'name1': '',
        'msg': 'pls',
        'city': 'abd'        
      };      
      this.handleName = this.handleName.bind(this);    
      this.handleMsg = this.handleMsg.bind(this);
      this.handleCity = this.handleCity.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleName(event) {
      this.setState({'name1': event.target.value});
    }
  
    handleMsg(event) {
      this.setState({'msg': event.target.value});
    }

    handleCity(event) {
      this.setState({'city': event.target.value});
    }
    handleSubmit(event) {    
      alert('A name was submitted: ' + this.state.name1);
      alert('A msg was submitted: ' + this.state.msg);
      alert('A city was submitted: ' + this.state.city);
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <h1>===================new form</h1>
          <label>
            Name:
            <input type="text" name="name1" onChange={this.handleName} />
          </label>
          <label>
            Essay:
            <textarea  name="msg" onChange={this.handleMsg} />
          </label>
          <select name="city" onChange={this.handleCity}>
            <option value="abd">Ahmedabad</option>
            <option value="baroda">Baroda</option>
          </select>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }

  export default Def2;