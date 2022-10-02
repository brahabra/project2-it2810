import * as React from 'react'
import HomePage from '../pages/HomePage'
import {render, cleanup, screen} from "@testing-library/react"
import userEvent from '@testing-library/user-event';
import { wait } from '@testing-library/user-event/dist/utils';

const ReactTestRenderer = require('react-test-renderer');

//afterEach(cleanup)

it('renders correctly', () => {
  const tree = ReactTestRenderer.create(<HomePage />).toJSON()
  expect(tree).toMatchSnapshot()
})
/*
it('button', async () => {
  render(<HomePage/>)
  
  userEvent.click(screen.getByRole('button', {
    name: /submit/i
  }))
  await wait();
})
*/