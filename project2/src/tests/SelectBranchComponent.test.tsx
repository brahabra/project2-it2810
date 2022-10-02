import * as React from 'react'
import { SelectBranchComponent } from '../components/SelectBranchComponent';
import userEvent from '@testing-library/user-event';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';

const ReactTestRenderer = require('react-test-renderer');

afterEach(cleanup)
const setLoadedBranch = jest.fn();
const setBranchName = jest.fn();

it('renders correctly', () => {
  const tree = ReactTestRenderer.create(<SelectBranchComponent setLoadedBranch={setLoadedBranch} setBranchName={setBranchName} selectedBranch={"main"} />).toJSON()
  expect(tree).toMatchSnapshot()
})
/*
it('should call handleChangeBranch when a new branch is selected', () => {
  render(<SelectBranchComponent setLoadedBranch={setLoadedBranch} setBranchName={setBranchName} selectedBranch={"main"}/>)
  fireEvent.click(screen.getByText("20-style-home-page"));
  
  userEvent.selectOptions(screen.getByRole('Menuitem', {
    name: /main/i
  }))
  expect(screen.getAllByRole('option').length).toBe(4)
  
})

*/