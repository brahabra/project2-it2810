import { useState } from 'react';
import { Container } from '@mui/system';
import '../styles/IssuePage.css';
import { IssueList } from '../components/IssueList';


export default function IssuePage() {

    const [isLoading, setLoading] = useState(true);

    return(
        <Container>
          <div className='header'>
            <h2>Issues</h2>
          </div>
          <IssueList />
        </Container>
    )
}