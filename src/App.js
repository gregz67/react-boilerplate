import React, { Component } from 'react';

var css = require('./app.css');

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>Hello, world.</h1>
        <div className="box">Dont put me in a box</div>
      </div>
    );
  }
}
