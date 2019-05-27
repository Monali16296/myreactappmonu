import React, { Component } from 'react';
import { Container, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import './../App.css';

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
      event.preventDefault();
      alert('A name was submitted: ' + this.state.name1);
      alert('A msg was submitted: ' + this.state.msg);
      alert('A city was submitted: ' + this.state.city);
      alert('A check was submitted: ' + this.state.isGoing);
      alert('A numberofguest was submitted: ' + this.state.numberOfGuests);
      
      var data = {
          name2: this.state.name1,
          msg: this.state.msg,
          city: this.state.city,
          numberOfGuests: this.state.numberOfGuests
      };

      fetch('/user/new', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
      }).then(function(response) {
        if (response.status >= 400) {
          throw new Error("Bad response from server");
        }
        console.log(response);
        return response.json();  //if not included this line then data won't print
      }).then(function(data) {
        console.log(data);
        if (data.success) {
          console.log('got success');
        }
      }).catch(function(err) {
        console.log(err);
      });
     }
  
    render() {
      return (
        // old form
        // <form onSubmit={this.handleSubmit} method="POST">
        //   <h1>===================new form handled by common function</h1>
        //   <label>
        //     Name:
        //     <input type="text" name="name1" value={this.state.name1} onChange={this.handleAll} />
        //   </label>
        //   <label>
        //     Message:
        //     <textarea name="msg" value={this.state.msg} onChange={this.handleAll} />
        //   </label>
        //   <select name="city" value={this.state.city} onChange={this.handleAll}>
        //     <option value="abd">Ahmedabad</option>
        //     <option value="baroda">Baroda</option>
        //   </select>
        //   <label>
        //     Is Going:
        //     <input type="checkbox" name="isGoing" checked={this.state.isGoing} onChange={this.handleAll} />
        //   </label>
        //   <label>
        //     Number of Guests:
        //     <input type="number" name="numberOfGuests" value={this.state.numberOfGuests} onChange={this.handleAll} />
        //   </label>
        //   <input type="submit" value="Submit" />
        // </form>

        <Container className="App">
          <h2>Sign Up using reactstrap</h2>
          <Form className="form" onSubmit={this.handleSubmit} method="POST">
            <Col>
              <FormGroup>
                <Label>Name</Label>
                <Input
                  type="text"
                  name="name1"
                  value={this.state.name1}
                  onChange={this.handleAll}
                />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label>Message</Label>
                <textarea                
                  className="form-control"
                  name="msg"
                  value={this.state.msg}
                  onChange={this.handleAll}
                />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label>City</Label>
                <select className="form-control" name="city" value={this.state.city} onChange={this.handleAll}>
                  <option value="abd">Ahmedabad</option>
                  <option value="baroda">Baroda</option>
              </select>
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>                     
              <Input              
                type="checkbox"
                name="isGoing"
                value={this.state.isGoing}
                onChange={this.handleAll}
              />Is Going:
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>                      
              <Label>Number of Guests:</Label>        
              <Input              
                type="number"
                name="numberOfGuests"
                value={this.state.numberOfGuests}
                onChange={this.handleAll}
              />
            </FormGroup>
          </Col>
          <Button>Submit</Button>
        </Form>
      </Container>
      );
    }
  }

  export default Def4;