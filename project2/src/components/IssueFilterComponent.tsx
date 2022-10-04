import { Dayjs } from "dayjs";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Issue } from "../types";
import DateRangePicker from "./DateRangePicker";
import IssueNameComponent from "./IssueNameComponent";
import SelectStatusIssueComponent from "./SelectStatusIssueComponent";
import { SessionStorageClass } from '../WebStorageClass';

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

      function hasIssues(name:string | null) {
        if (name === null) {
          return false;
        }
        for (let i of props.issues) {
          if (i.author.name === name) {
            return true;
          } 
        }
        return false;
      }

      const storage = new SessionStorageClass();
      const name = storage.getPropValue("selectedName");
      if (hasIssues(name)) {
        setName(name!);
      } else {
        setName("");
      }
    }, []);
    
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
      }, [ props.issues, filterStatus, filterName, startValue, endValue]);

      return (
        <Container>

        <DateRangePicker
          startValue={startValue}
          setStartValue={setStartValue}
          endValue={endValue}
          setEndValue={setEndValue}
        />

        <IssueNameComponent 
        filterName={filterName}
        issues={props.issues}
        filterList={props.filterList}
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