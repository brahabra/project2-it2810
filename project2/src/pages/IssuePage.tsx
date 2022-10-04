import { Container } from '@mui/system';
import '../styles/IssuePage.css';
import { IssueList } from '../components/IssueList';
import { useState, useContext, useEffect } from 'react';
import { getIssues } from '../api/fetch';
import { ProjectContext } from '../ProjectContext';
import { Issue } from '../types';


export default function IssuePage() {
  const [isLoading, setLoading] = useState(false)
  const [issues, setIssues] = useState<Issue[]>([]);
  const ctx = useContext(ProjectContext);

  useEffect(() => {
    getIssues(ctx.projectID, ctx.token).then(
      (res: Issue[]) => {
        setIssues(res);
        setLoading(true)
      }
    );
  }, [ctx.projectID, ctx.token]);

  return (
    <Container>
      <div className='header'>
        <h2>Issues</h2>
        <p>Showing the 20 last created issues in project {ctx.projectID}</p>
      </div>
      {isLoading ? <IssueList issues={issues} /> : <p>Loading ... </p>}
    </Container>
  )
}