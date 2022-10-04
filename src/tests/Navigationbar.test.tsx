import * as React from 'react'
import Navigationbar, { Page } from '../components/Navigationbar'

const ReactTestRenderer = require('react-test-renderer');

const checkAndSetPage = jest.fn();

it('renders correctly', () => {
  const tree = ReactTestRenderer.create(<Navigationbar page={Page.Home} checkAndSetPage={checkAndSetPage}/>).toJSON()
  expect(tree).toMatchSnapshot()
})