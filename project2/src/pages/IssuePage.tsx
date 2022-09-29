import { useEffect, useState } from 'react';
import { getIssues } from '../api/fetch';
import { Issue } from '../types';
import { Container } from '@mui/system';
import { Box, Paper } from '@mui/material';
import { IssueComponent } from '../components/IssueComponent'
import  IssueNameComponent from '../components/IssueNameComponent'
import DateRangePicker from '../components/DateRangePicker';
import { Dayjs } from "dayjs";
import SelectStatusIssueComponent from '../components/SelectStatusIssueComponent';
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