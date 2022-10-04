import * as React from 'react'
import App from '../App'

const ReactTestRenderer = require('react-test-renderer');

it('renders correctly', () => {
  const tree = ReactTestRenderer.create(<App />).toJSON()
  expect(tree).toMatchSnapshot()
})