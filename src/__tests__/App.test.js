/* eslint-env jest, jasmine */
import React from 'react'
import renderer from 'react-test-renderer'
import App from '../App'

test('App displays box', () => {
  const component = renderer.create(
    <App />
  )
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
