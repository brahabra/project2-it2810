import { cleanup, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import * as React from 'react'
import { FilterComponent } from '../components/CommitFilterComponent';
import { Commit } from '../types';

const ReactTestRenderer = require('react-test-renderer');

const commit1: Commit = {
  id: "123",
  short_id: "123",
  created_at: "2022-09-30",
  author_email: "test@example.com", 
  author_name: "test1",
  authored_date: "2022-09-30", 
  committed_date: "2022-09-30",
  committer_email: "test@example.com", 
  committer_name: "test1",
  message: "test test",
  title: "test commit", 
  web_url: "example.com",
} 

const commit2: Commit = {
  id: "123",
  short_id: "123",
  created_at: "2022-09-30",
  author_email: "test@example.com", 
  author_name: "test2",
  authored_date: "2022-09-30", 
  committed_date: "2022-09-30",
  committer_email: "test@example.com", 
  committer_name: "test2",
  message: "test test",
  title: "test commit", 
  web_url: "example.com",
} 

afterEach(cleanup)

it('renders correctly', () => {
  const setFilterList = jest.fn();
  const tree = ReactTestRenderer.create(<FilterComponent commits={[commit1]} filterList={[]} setFilterList={setFilterList} />).toJSON()
  expect(tree).toMatchSnapshot()
})

it('filters something', () => {
  const setFilterList = jest.fn();
  const {getByLabelText, getByRole} = render(<FilterComponent commits={[commit1, commit2]} filterList={[]} setFilterList={setFilterList} />)
});