import React, { Component } from 'react'
import { render } from 'react-dom'

import { Checkbox } from '../../src'

class Demo extends Component {
  state = { checked: false }

  _handleCheckboxChange = (e, { checked }) => {
    this.setState({ checked: !checked })
  }

  render() {
    return (
      <div>
        <h1>spacenow-ui-react Demo</h1>
        <Checkbox checked={this.state.checked} handleCheckboxChange={this._handleCheckboxChange} label="teste" />
      </div>
    )
  }
}

render(<Demo />, document.querySelector('#demo'))
