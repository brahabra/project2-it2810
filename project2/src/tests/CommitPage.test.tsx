import * as React from 'react'
import CommitsPage from '../pages/CommitsPage'

const ReactTestRenderer = require('react-test-renderer');

it('renders correctly', () => {
  const tree = ReactTestRenderer.create(<CommitsPage/>).toJSON()
  expect(tree).toMatchSnapshot()
})