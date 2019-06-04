import React, { Component } from 'react';
import { Container, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import './../App.css';
import { connect } from 'react-redux';
import { handleSubmit } from '../actions/action';

class Def5 extends Component {
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

  handleSubmit = async (e) => {
    e.preventDefault();
    if (this.state.name !== '' && this.state.password !== '') {
      this.props.handleSubmit(this.state.name, this.state.password);
    }


  }

  render() {
    return (
      <Container className="App">
        <h2>Sign In using reactstrap</h2>
        <Form className="form" onSubmit={(e) => { this.handleSubmit(e) }}>
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

function mapStateToProps(state) {
  return {
    user: state.handleSubmit
  }
}

function mapDispatchToProps(dispatch) {
  return {
    handleSubmit: (name, password) => {
      dispatch(handleSubmit(name, password));
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Def5);