import * as React from 'react'
import HomePage from '../pages/HomePage'
import {render, cleanup, screen, fireEvent} from "@testing-library/react"
import userEvent from '@testing-library/user-event';
import { wait } from '@testing-library/user-event/dist/utils';
import 'whatwg-fetch'
import "@testing-library/jest-dom/extend-expect"

const ReactTestRenderer = require('react-test-renderer');

afterEach(cleanup)

it('renders correctly', () => {
  const tree = ReactTestRenderer.create(<HomePage />).toJSON()
  expect(tree).toMatchSnapshot()
})

it('can input', () => {
  const {getByRole} = render(<HomePage />)

  userEvent.type(screen.getByPlaceholderText('ProjectID'), '17381')
  expect(screen.getByPlaceholderText('ProjectID')).toHaveValue('17381')

  userEvent.type(screen.getByPlaceholderText('Project Token'), 'sdsdgsd-sdfsdg')
  expect(screen.getByPlaceholderText('Project Token')).toHaveValue('sdsdgsd-sdfsdg')

})

