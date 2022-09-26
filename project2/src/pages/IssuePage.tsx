import { useEffect, useState } from 'react';
import { getIssues } from '../api/fetch';
import { Issue } from '../types';
import { Container } from '@mui/system';
import { Box, Paper } from '@mui/material';
import { IssueComponent } from '../components/IssueComponent'
import  IssueNameComponent from '../components/IssueNameComponent'


export default function IssuePage() {
    const [issues, setIssues] = useState<Issue[]>([]);
    const [filterList, setFilterList] = useState<Issue[]>([]);
    const [isLoading, setLoading] = useState(true);
    const [filterName, setName] = useState('');

  const IssueList = () => {
    return (
      <Box sx={{ width: "100%", margin: "auto", backgroundColor: "#DAF7A6" }}>
        {filterName
          ? filterList.map((issue) => (
              <IssueComponent key={issue.id} issue={issue} />
            ))
          : issues.map((issue) => (
              <IssueComponent key={issue.id} issue={issue} />
            ))}
      </Box>
    );
  }

    useEffect(() => {
        getIssues('17381', 'glpat-CRs4epaLyzKdvdpGzE_3').then((res) => {
        for (let i = 0; i < res.length; i++) {
            if (!issues.find((el) => el.id === res[i].id)) {
              issues.push(res[i]);
            }
        }
        console.log(issues)
        setLoading(false);
        });
      }, [issues]);

    return(
        <Container>
                {isLoading ? null : <IssueNameComponent 
        filterName={filterName}
        issues={issues}
        filterList={filterList}
        setFilterList={setFilterList}
        setName={setName}
        />}
          <div className='issues'>
            {isLoading ? <p>Loading data ...</p> : <IssueList/>}
          </div>

        </Container>
    )
}