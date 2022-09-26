import React, { useEffect, useState } from "react";
import "../styles/CommitsPage.css";
import { CommitComponent } from "../components/CommitComponent";
import DateRangePicker from "../components/DateRangePicker";
import { getData } from "../api/fetch";
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
import { Button } from "react-bootstrap";
import { Dayjs } from "dayjs";
import dayjs from "dayjs";

export default function CommitsPage() {
  const [commits, setCommits] = useState<Commit[]>([]);
  const [isLoading, setLoading] = useState(true);
  const [filterName, setName] = useState("");
  const [filterList, setFilterList] = useState<Commit[]>([]);
  const [startValue, setStartValue] = React.useState<Dayjs | null>(null);
  const [endValue, setEndValue] = React.useState<Dayjs | null>(null);

  const DatePicker = () => {
    const [dateList, setList] = useState<Commit[]>([]);
    

    if (filterList.length != 0) {
      for (let i = 0; i < filterList.length; i++) {
        if (
          (startValue?.isBefore(filterList[i].created_at) ||
          (startValue?.isSame(filterList[i].created_at)) &&
            (endValue?.isAfter(filterList[i].created_at)) ||
          endValue?.isSame(filterList[i].created_at))
        ) {
          console.log("Treff på " + filterList[i]);
        }
        else{
          filterList.splice(i);
        }
      }
    }
    else {
      console.log("filterlist tom")
    }
    

    return (
      <DateRangePicker
        startValue={startValue}
        setStartValue={setStartValue}
        endValue={endValue}
        setEndValue={setEndValue}
      />
    );
  };

  const NameRow = () => {
    const [nameList, setList] = useState<Commit[]>([]);
    for (let i = 0; i < commits.length; i++) {
      if (
        !nameList.find((el) => el.committer_name === commits[i].committer_name)
      ) {
        nameList.push(commits[i]);
      }
    }

    const handleChangeName = (event: SelectChangeEvent) => {
      setFilterList(filterList.splice(0));
      const newName = event.target.value;
      if (newName != null) {
        setName(event.target.value as string);
        console.log(filterList);
        for (let i = 0; i < commits.length; i++) {
          if (commits[i].committer_name === newName) {
            filterList.push(commits[i]);
          }
        }
        setFilterList(filterList);
      }
    };

    return (
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel>Name</InputLabel>
          <Select value={filterName} label="Name" onChange={handleChangeName}>
            <MenuItem value={""}>Default</MenuItem>
            {nameList.map((commit) => (
              <MenuItem key={commit.id} value={commit.committer_name}>
                {commit.committer_name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    );
  };

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

    getData("17381", "glpat-CRs4epaLyzKdvdpGzE_3", "main").then((res) => {
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
      <div className ="datePicker">
      <DatePicker />
      </div>
      <div className="commits">
        {isLoading ? null : <NameRow />}
        {isLoading ? <p>Loading data ...</p> : <ComponentList />}
      </div>
    </div>
  );
}
