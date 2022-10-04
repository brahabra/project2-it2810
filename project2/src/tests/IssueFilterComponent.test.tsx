import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import * as React from 'react'
import { IssueFilterComponent } from '../components/IssueFilterComponent';
import { Issue } from '../types';


const issue1: Issue = {
    id: 123,
    iid: 123,
    project_id: 123,
    title: "issue",
    description: "issue",
    state: "opened",
    created_at:	"2022-09-30",
    updated_at: "2022-09-30",
    closed_at: "2022-09-30",
    closed_by: "2022-09-30",
    labels: ["issue"],
    milestone: {
        id: "123",
        iid: "1",
        project_id:	123,
        title: "title",
        description: "desc",
        state: "state",
        created_at: "2022-09-30",
        updated_at: "2022-09-30",
        due_date: "2022-09-30",
        start_date: "2022-09-30",
        expired: false,
        web_url: "example.com"
    },
    assignees: [],	
    author: {
        id: "123",
        username: "123",
        name: "author1",
        state: "state",
        avatar_url: "example.com",
        web_url: "example.com",
    },
    assignee: null,
    due_date: "2022-09-30",
    confidential: false,
    issue_type: "issue",
    web_url: "example.com",
}

const issue2: Issue = {
    id: 123,
    iid: 123,
    project_id: 123,
    title: "issue",
    description: "issue",
    state: "opened",
    created_at:	"2022-09-30",
    updated_at: "2022-09-30",
    closed_at: "2022-09-30",
    closed_by: "2022-09-30",
    labels: ["issue"],
    milestone: {
        id: "123",
        iid: "1",
        project_id:	123,
        title: "title",
        description: "desc",
        state: "state",
        created_at: "2022-09-30",
        updated_at: "2022-09-30",
        due_date: "2022-09-30",
        start_date: "2022-09-30",
        expired: false,
        web_url: "example.com"
    },
    assignees: [],	
    author: {
        id: "123",
        username: "author2",
        name: "author",
        state: "state",
        avatar_url: "example.com",
        web_url: "example.com",
    },
    assignee: null,
    due_date: "2022-09-30",
    confidential: false,
    issue_type: "issue",
    web_url: "example.com",
}

const ReactTestRenderer = require('react-test-renderer');

it('renders correctly', () => {
    const setFilterList = jest.fn();
  const tree = ReactTestRenderer.create(<IssueFilterComponent issues={[issue1, issue2]} filterList={[]} setFilterList={setFilterList} />).toJSON()
  expect(tree).toMatchSnapshot()
});

