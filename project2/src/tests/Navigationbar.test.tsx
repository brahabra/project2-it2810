import * as React from 'react'
import Navigationbar from '../components/Navigationbar'

const ReactTestRenderer = require('react-test-renderer');

it('renders correctly', () => {
  const tree = ReactTestRenderer.create(<Navigationbar/>).toJSON()
  expect(tree).toMatchSnapshot()
})