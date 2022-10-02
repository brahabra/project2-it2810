import * as React from 'react'
import { FilterComponent } from '../components/CommitFilterComponent';
import { Commit } from '../types';

const ReactTestRenderer = require('react-test-renderer');

const commit: Commit = {
  id: "123",
  short_id: "123",
  created_at: "2022-09-30",
  author_email: "test@example.com", 
  author_name: "test test",
  authored_date: "2022-09-30", 
  committed_date: "2022-09-30",
  committer_email: "test@example.com", 
  committer_name: "test test",
  message: "test test",
  title: "test commit", 
  web_url: "example.com",
} 

it('renders correctly', () => {
  const setFilterList = jest.fn();
  const tree = ReactTestRenderer.create(<FilterComponent commits={[commit]} filterList={[]} setFilterList={setFilterList} />).toJSON()
  expect(tree).toMatchSnapshot()
})