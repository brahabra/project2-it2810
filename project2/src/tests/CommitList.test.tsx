import * as React from 'react'
import { CommitList } from '../components/CommitList';
import { Commit } from '../types';

const ReactTestRenderer = require('react-test-renderer');

it('renders correctly', () => {
  const tree = ReactTestRenderer.create(<CommitList selectedBranch='main'/>).toJSON()
  expect(tree).toMatchSnapshot()
})