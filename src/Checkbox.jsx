import React, { Component } from 'react'

export default class Checkbox extends Component {
  static propTypes = {
    labelOn: React.PropTypes.string,
    labelOff: React.PropTypes.string
  }
  constructor (props) {
    super(props)
    this.state = {
      isChecked: false
    }
    this.onChange = ::this.onChange
  }

  onChange () {
    this.setState({isChecked: !this.state.isChecked})
  }

  render () {
    return (
      <label>
        <input
          type='checkbox'
          checked={this.state.isChecked}
          onChange={this.onChange}
        />
        {this.state.isChecked ? this.props.labelOn : this.props.labelOff}
      </label>
    )
  }
}
