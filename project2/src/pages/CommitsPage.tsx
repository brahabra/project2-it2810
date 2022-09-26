import { useEffect, useState } from "react";
import "../styles/CommitsPage.css";
import { CommitComponent } from "../components/CommitComponent";
import DateRangePicker from "../components/DateRangePicker";
import { getCommits } from "../api/fetch";
import { Commit } from "../types";
import {
  Box,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { Dayjs } from "dayjs";
import dayjs from "dayjs";
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
        {filterName
          ? filterList.map((commit) => (
              <CommitComponent key={commit.id} commit={commit} />
            ))
          : commits.map((commit) => (
              <CommitComponent key={commit.id} commit={commit} />
            ))}
      </Box>
    );
  };

  useEffect(() => {
    var startDay = new Date(2022, 1, 1);
    var day = dayjs(startDay)
    setStartValue(day);
    
    var endDay = new Date(2023, 1, 1);
    var day = dayjs(endDay)
    setEndValue(day);

    getCommits("17381", "glpat-CRs4epaLyzKdvdpGzE_3", "main").then((res) => {
      for (let i = 0; i < res.length; i++) {
        if (!commits.find((el) => el.id === res[i].id)) {
          commits.push(res[i]);
        }
      }
      setLoading(false);
    });
  }, [commits]);

  return (
    <div>
      <div className="header">
        <h2>Commits</h2>
      </div>
      <DateRangePicker
        filterList={filterList}
        startValue={startValue}
        setStartValue={setStartValue}
        endValue={endValue}
        setEndValue={setEndValue}
      />
        {isLoading ? null : <NameRowComponent 
      filterName={filterName}
      commits={commits}
      filterList={filterList}
      setFilterList={setFilterList}
      setName={setName}
      />}
      <div className="commits">
        {isLoading ? <p>Loading data ...</p> : <ComponentList />}
      </div>
    </div>
  );
}
