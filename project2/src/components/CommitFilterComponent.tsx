import { Container } from "@mui/system";
import { Dayjs } from "dayjs";
import { useState, useEffect } from "react";
import { Commit } from "../types";
import DateRangePicker from "./DateRangePicker";
import NameRowComponent from "./NameRowComponent";

interface Props {
    commits: Commit[],
    setFilterList: (value: Commit[]) => void,
    filterList: Commit[]
}

export const FilterComponent = (props: Props) => {
    const [filterName, setName] = useState("");
    const [startValue, setStartValue] = useState<Dayjs | null>(null);
    const [endValue, setEndValue] = useState<Dayjs | null>(null);

    

useEffect(() => {

    function filterCommitList() {
        const commitsCopy = [...props.commits];
        let filteredCommits: Commit[] = commitsCopy;
        if (filterName && filterName !== "default") {
        filteredCommits = filteredCommits.filter(
            (commit) => commit.author_name === filterName
        );
        }

        if (startValue) {
        filteredCommits = filteredCommits.filter(
            (commit) =>
            startValue.isBefore(commit.created_at) ||
            startValue.isSame(commit.created_at, "day")
        );
        }

        if (endValue) {
        filteredCommits = filteredCommits.filter(
            (commit) =>
            endValue.isAfter(commit.created_at) ||
            endValue.isSame(commit.created_at, "day")
        );
        }
        props.setFilterList(filteredCommits);
    }

    filterCommitList();
}, [props.commits, filterName, startValue, endValue]);

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
    
        <NameRowComponent
        filterName={filterName}
        commits={props.commits}
        setName={setName}
        />
        </Container>

    )
}