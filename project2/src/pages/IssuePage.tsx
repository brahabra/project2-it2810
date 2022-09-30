import { Container } from '@mui/system';
import '../styles/IssuePage.css';
import { IssueList } from '../components/IssueList';
import { style } from '../styles/Styles';


export default function IssuePage() {

    return(
        <Container>
          <div className='header'>
            <h2>Issues</h2>
          </div>
          <IssueList/>
        </Container>
    )
}