import { Dayjs } from "dayjs";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Issue } from "../types";
import DateRangePicker from "./DateRangePicker";
import IssueNameComponent from "./IssueNameComponent";
import SelectStatusIssueComponent from "./SelectStatusIssueComponent";

interface Props {
    issues: Issue[]
    filterList: Issue[]
    setFilterList: (value:Issue[]) => void
}

export const IssueFilterComponent = (props: Props) => {
    const [filterName, setName] = useState('');
    const [filterStatus, setStatus] = useState('');
    const [startValue, setStartValue] = useState<Dayjs | null>(null);
    const [endValue, setEndValue] = useState<Dayjs | null>(null);
    
      useEffect(() => {

        function filterIssueList() {
            const issuesCopy = [...props.issues];
            let filteredIssues: Issue[] = issuesCopy;
            
            if (filterName && filterName !== "default") {
              filteredIssues = filteredIssues.filter(
                (issue) => issue.author.name === filterName
              );
            }
        
            if (filterStatus && filterStatus !== "default"){
              filteredIssues = filteredIssues.filter(
                (issue) => issue.state === filterStatus
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
            props.setFilterList(filteredIssues);
          }

        filterIssueList();
      }, [props.issues, filterStatus, filterName, startValue, endValue]);
      return (
        <Container>
<div className="dateRange">
        <DateRangePicker
          startValue={startValue}
          setStartValue={setStartValue}
          endValue={endValue}
          setEndValue={setEndValue}
        />
      </div>
        <IssueNameComponent 
        filterName={filterName}
        issues={props.issues}
        filterList={props.filterList}
        setFilterList={props.setFilterList}
        setName={setName}
        />
        <SelectStatusIssueComponent 
        filterStatus={filterStatus}
        filterList={props.filterList} 
        issues={props.issues}
        setStatus={setStatus}
        setFilterList={props.setFilterList}
        />
        </Container>
        
      );
}