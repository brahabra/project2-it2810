import { Container } from '@mui/system';
import '../styles/IssuePage.css';
import { IssueList } from '../components/IssueList';
import { style } from '../styles/Styles';
import { ProjectContext } from '../ProjectContext';
import { useContext } from 'react';


export default function IssuePage() {
  const ctx = useContext(ProjectContext);

    return(
        <Container>
          <div className='header'>
            <h2>Issues</h2>
            <p>Showing the 20 last created issues in project {ctx.projectID}</p>
          </div>
          <IssueList/>
        </Container>
    )
}