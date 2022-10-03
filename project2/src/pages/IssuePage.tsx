import { Container } from '@mui/system';
import '../styles/IssuePage.css';
import { IssueList } from '../components/IssueList';
import { style } from '../styles/Styles';


export default function IssuePage() {

    return(
        <Container>
          <div className='header'>
            <h2>Issues</h2>
            <p>Showing the 20 last created issues in your repository to main branch</p>
          </div>
          <IssueList/>
        </Container>
    )
}