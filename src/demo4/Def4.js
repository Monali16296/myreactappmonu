import React, {Component} from 'react';

class Def4 extends Component {
    constructor(props) {
      super(props);
      this.state = {        
        'name1': '',
        'msg': 'pls enter msg',
        'city': 'abd',
        'isGoing': true,
        'numberOfGuests': 2        
      };      
      this.handleAll = this.handleAll.bind(this);         
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleAll(event) {
      const name = event.target.name;      
      const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
      this.setState({[name]: value});
    }  
  
    handleSubmit(event) {    
      alert('A name was submitted: ' + this.state.name1);
      alert('A msg was submitted: ' + this.state.msg);
      alert('A city was submitted: ' + this.state.city);
      alert('A check was submitted: ' + this.state.isGoing);
      alert('A numberofguest was submitted: ' + this.state.numberOfGuests);
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <h1>===================new form handled by common function</h1>
          <label>
            Name:
            <input type="text" name="name1" value={this.state.name1} onChange={this.handleAll} />
          </label>
          <label>
            Message:
            <textarea name="msg" value={this.state.msg} onChange={this.handleAll} />
          </label>
          <select name="city" value={this.state.city} onChange={this.handleAll}>
            <option value="abd">Ahmedabad</option>
            <option value="baroda">Baroda</option>
          </select>
          <label>
            Is Going:
            <input type="checkbox" name="isGoing" checked={this.state.isGoing} onChange={this.handleAll} />
          </label>
          <label>
            Number of Guests:
            <input type="number" name="numberOfGuests" value={this.state.numberOfGuests} onChange={this.handleAll} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }

  export default Def4;