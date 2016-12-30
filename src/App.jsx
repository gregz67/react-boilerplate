import React, { Component } from 'react'
import Checkbox from './Checkbox'

require('./app.css')

export default class App extends Component {
  render () {
    return (
      <div>
        <h1>Hello, world.</h1>
        <div className='box'>Don't put me in a box</div>
        <div>
          <Checkbox labelOn='On' labelOff='Off' />
        </div>
      </div>
    )
  }
}
