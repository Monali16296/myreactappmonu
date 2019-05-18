import React, {Component} from 'react';

class Def2 extends Component {
    constructor(props) {
      super(props);
      this.state = {
        formControls: {
            'name1': '',
            'msg': 'pls',
            'city': 'aa'
        }
      };      
      this.handleChange = this.handleChange.bind(this);    
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      const name = event.target.name;
      const value = event.target.value;

      this.setState ({
        formControls: {          
           [name]: value
        }
      });
    }
  
    handleSubmit(event) {    
      alert('A name was submitted: ' + this.state.formControls.name1);
      alert('A name was submitted: ' + this.state.formControls.msg);
      alert('A name was submitted: ' + this.state.formControls.city);
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <h1>===================basic form</h1>
          <label>
            Name:
            <input type="text" name="name1" value={this.state.formControls.name1} onChange={this.handleChange} />
          </label>
          <label>
            Essay:
            <textarea value={this.state.formControls.msg} name="msg" onChange={this.handleChange} />
          </label>
          <select name="city" value={this.state.formControls.city} onChange={this.handleChange}>
            <option value="aa">abc</option>
            <option value="bb">def</option>
          </select>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }

  export default Def2;