import { Container } from '@mui/system';
import '../styles/IssuePage.css';
import { IssueList } from '../components/IssueList';


export default function IssuePage() {

    return(
        <Container>
          <div className='header'>
            <h2>Issues</h2>
          </div>
          <IssueList />
        </Container>
    )
}