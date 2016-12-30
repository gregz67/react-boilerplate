/* eslint-env enzyme,jest */
import React from 'react'
import { shallow } from 'enzyme'
import Checkbox from '../Checkbox'

describe('Checkbox', () => {
  it('changes label on change', () => {
    const component = shallow(
      <Checkbox labelOn='On' labelOff='Off' />
    )
    expect(component.text()).toEqual('Off')
    component.find('input').simulate('change')
    expect(component.text()).toEqual('On')
  })
})
