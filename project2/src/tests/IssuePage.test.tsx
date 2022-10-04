import * as React from 'react'
import IssuePage from '../pages/IssuePage'

const ReactTestRenderer = require('react-test-renderer');

it('renders correctly', () => {
  const tree = ReactTestRenderer.create(<IssuePage/>).toJSON()
  expect(tree).toMatchSnapshot()
})