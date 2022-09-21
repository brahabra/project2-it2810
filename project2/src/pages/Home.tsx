import React, { useEffect, useState } from "react";
import "../styles/Home.css";
import { Commit } from "../components/Commit";
import { getBranches, getData } from "../api/fetch";
import Navbar from "../components/Navigationbar";
import { Input, Button, Select, MenuItem, Typography, InputLabel, FormControl} from "@mui/material";

export default function Home() {
  const [projectID, setProjectID] = useState<number>();
  const [projectToken, setProjectToken] = useState<String>("");
  // toggle branch selector
  const [toggle, setToggle] = useState(false);

  const onChangeProjectID = (event: any) => {
    setProjectID(event.target.value);
    console.log(projectID)
  };
  const onChangeProjectToken = (event: any) => {
    setProjectToken(event.target.value);
    console.log(projectToken)
  };
  
  const onSubmit = () => {
    if (projectID != null && projectToken != "") {
      setToggle(!toggle)
    }
  };

  useEffect(() => {
    getBranches("17381", "glpat-CRs4epaLyzKdvdpGzE_3").then((res) => {
      console.log(res);
    })
  }, []);
    


  return (
    <div className="container">
      <br />
      <br />
      <Input
        type="number"
        placeholder="ProjectID"
        onChange={onChangeProjectID}
        value={projectID}
      />
      <br/>
      <br/>
      <Input
        type="text"
        placeholder="Project Token"
        onChange={onChangeProjectToken}
        value={projectToken}
      />
      <br />
      <br />
      <Button onClick={onSubmit}>Submit</Button>
      <br />
      <br />
      {toggle && (
        <FormControl style={{width: 250}}>
        <InputLabel>Select branch</InputLabel>
        <Select>
          <MenuItem>..</MenuItem>
        </Select>
      </FormControl>
      )}
    </div>
  );
}
