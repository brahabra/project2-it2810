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


export default function IssuePage() {
    const [issues, setIssues] = useState<Issue[]>([]);
    const [filterList, setFilterList] = useState<Issue[]>([]);
    const [isLoading, setLoading] = useState(true);
    const [filterName, setName] = useState('');
    const [filterStatus, setStatus] = useState('');
    const [startValue, setStartValue] = useState<Dayjs | null>(null);
    const [endValue, setEndValue] = useState<Dayjs | null>(null);


  const IssueList = () => {
    return (
      <Box sx={{ width: "100%", margin: "auto", backgroundColor: "#DAF7A6" }}>
        {filterList.map((issue) => (
              <IssueComponent key={issue.id} issue={issue} />
        ))}
      </Box>
    );
  }

  function filterIssueList() {
    const issuesCopy = [...issues];
    let filteredIssues: Issue[] = issuesCopy;
    
    if (filterName && filterName != "default") {
      filteredIssues = filteredIssues.filter(
        (issue) => issue.author.name == filterName
      );
    }

    if (filterStatus && filterStatus != "default"){
      filteredIssues = filteredIssues.filter(
        (issue) => issue.state == filterStatus
        );
    }

    if (startValue) {
      filteredIssues = filteredIssues.filter(
        (issue) =>
          startValue.isBefore(issue.created_at) ||
          startValue.isSame(issue.created_at, "day")
      );
    }

    if (endValue) {
      filteredIssues = filteredIssues.filter(
        (issue) =>
          endValue.isAfter(issue.created_at) ||
          endValue.isSame(issue.created_at, "day")
      );
    }
    setFilterList(filteredIssues);
  }

      useEffect(() => {
        getIssues("17381", "glpat-CRs4epaLyzKdvdpGzE_3").then(
          (res: Issue[]) => {
            setIssues(res);
            setLoading(false);
          }
        );
      }, []);

      useEffect(() => {
        filterIssueList();
      }, [issues, filterStatus, filterName, startValue, endValue]);


    return(
        <Container>
        <div className="dateRange">
        <DateRangePicker
          startValue={startValue}
          setStartValue={setStartValue}
          endValue={endValue}
          setEndValue={setEndValue}
        />
      </div>
                {isLoading ? null : <IssueNameComponent 
        filterName={filterName}
        issues={issues}
        filterList={filterList}
        setFilterList={setFilterList}
        setName={setName}
        />}
        {isLoading? null : <SelectStatusIssueComponent 
        filterStatus={filterStatus}
        filterList={filterList} 
        issues={issues}
        setStatus={setStatus}
        setFilterList={setFilterList}
        />}
          <div className='issues'>
            {isLoading ? <p>Loading data ...</p> : <IssueList/>}
          </div>

        </Container>
    )
}