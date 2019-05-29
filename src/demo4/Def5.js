import React, { Component } from 'react';
import { Container, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import './../App.css';

class Def4 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      'name': '',
      'password': '',
      'loginErr': ''
    };
  }

  handleName = (e) => {
    this.setState({ name: e.target.value });
  }

  handlePassword = (e) => {
    this.setState({ password: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    fetch('/user/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: this.state.name,
        password: this.state.password
      })
    }).then(function (response) {
      if (response.status >= 400) {
        throw new Error("Bad response from server");
      }
      console.log(response);
      return response.json();  //if not included this line then data won't print
    }).then(function (data) {

      if (data.code == 200) {
        console.log(data.user[0]);
        localStorage.setItem('username', data.user[0].name); //for session management
        console.log(localStorage.getItem('username')); //fetching data from session
        localStorage.removeItem('username'); //for removing item from session
        console.log(localStorage);
        console.log('got success');
      } else {
        console.log('11');
        //          this.setState({loginErr: 'Invalid user name or password'});
      }
    }).catch(function (err) {
      console.log(err);
    });

  }

  render() {
    return (
      <Container className="App">
        <h2>Sign In using reactstrap</h2>
        <Form className="form" onSubmit={(e) => { this.handleSubmit(e) }} method="POST">
          {this.state.loginErr ?
            <p> {this.state.loginErr}</p>
            : ''
          }
          <Col>
            <FormGroup>
              <Label>Name</Label>
              <Input
                type="text"
                value={this.state.name}
                onChange={(e) => { this.handleName(e) }}
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label>Password</Label>
              <Input
                type="password"
                className="form-control"
                value={this.state.password}
                onChange={(e) => { this.handlePassword(e) }}
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