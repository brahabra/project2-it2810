import { useEffect, useState } from "react";
import "../styles/CommitsPage.css";
import { CommitComponent } from "../components/CommitComponent";
import { Graph } from "../components/Graph";
import DateRangePicker from "../components/DateRangePicker";
import { getCommits } from "../api/fetch";
import { Commit } from "../types";
import { Box } from "@mui/material";
import { Dayjs } from "dayjs";
import NameRowComponent from "../components/NameRowComponent";

export default function CommitsPage() {
  const [commits, setCommits] = useState<Commit[]>([]);
  const [isLoading, setLoading] = useState(true);
  const [filterName, setName] = useState("");
  const [filterList, setFilterList] = useState<Commit[]>([]);
  const [startValue, setStartValue] = useState<Dayjs | null>(null);
  const [endValue, setEndValue] = useState<Dayjs | null>(null);

  const ComponentList = () => {
    return (
      <Box sx={{ width: "100%", margin: "auto", backgroundColor: "#DAF7A6" }}>
        {filterList.map((commit) => (
          <CommitComponent key={commit.id} commit={commit} />
        ))}
      </Box>
    );
  };

  function filterCommitList() {
    const commitsCopy = [...commits];
    let filteredCommits: Commit[] = commitsCopy;
    if (filterName && filterName != "default") {
      filteredCommits = filteredCommits.filter(
        (commit) => commit.author_name == filterName
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
    setFilterList(filteredCommits);
  }

  useEffect(() => {
    getCommits("17381", "glpat-CRs4epaLyzKdvdpGzE_3", "main").then(
      (res: Commit[]) => {
        setCommits(res);
        setLoading(false);
      }
    );
  }, []);

  useEffect(() => {
    filterCommitList();
  }, [commits, filterName, startValue, endValue]);

  return (
    <div>
      <div className="header">
        <h2>Commits</h2>
      </div>
      <div className="dateRange">
        <DateRangePicker
          startValue={startValue}
          setStartValue={setStartValue}
          endValue={endValue}
          setEndValue={setEndValue}
        />
      </div>
      {isLoading ? null : (
        <NameRowComponent
          filterName={filterName}
          commits={commits}
          setName={setName}
        />
      )}
      <div className="commits">
        {isLoading ? <p>Loading data ...</p> : <ComponentList />}
      </div>
    </div>
  );
}
