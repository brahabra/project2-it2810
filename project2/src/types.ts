export type Commit = { 
    id: string,
    short_id: string,
    created_at: string,
    author_email: string, 
    author_name: string,
    authored_date: string, 
    committed_date: string,
    committer_email: string, 
    committer_name: string,
    message: string,
    title: string, 
    web_url: string,
};

type Milestone = {
    id: string
    iid: string
    project_id:	number
    title: string
    description: string
    state: string
    created_at: string
    updated_at: string
    due_date: string
    start_date: string
    expired: boolean
    web_url: string
}

type Assignee = {
    id: string
    username: string
    name: string
    state: string
    avatar_url: string
    web_url: string
}

export type Issue = {
    id: number
    iid: number
    project_id: number
    title: string
    description: string | null
    state: string
    created_at:	string
    updated_at: string
    closed_at: string
    closed_by: string
    labels: Array<String>
    milestone: Milestone
    assignees: Assignee[]	
    author: Assignee	
    assignee: Assignee | null
    due_date: string
    confidential: boolean
    issue_type: string
    web_url: string
}

export type Branch = {
    name: string 
    merged: boolean
    web_url: string
}
