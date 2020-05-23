import React from 'react';
// import { Switch, Route } from 'react-router'
import Dashboard from './components/Dashboard';
import { TextField, Button } from '@material-ui/core'
import './App.css';


class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false
    }
  }
  logIn = (e) => {
    // e.preventDefault();
    let status = this.state.isLoggedIn ? false : true;
    this.setState({isLoggedIn: status})
  }
  render() {
    return this.state.isLoggedIn ? (
      <Dashboard />
    )
    : <div className='form'>
      <p>Logged in? {`${this.state.isLoggedIn}`}</p>
      <TextField />
      <br/>
      <TextField />
      <br/>
      <Button onClick={this.logIn}>Log In</Button>
  </div>
  }
}

export default Main;
