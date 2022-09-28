import React, { useEffect, useState } from "react";
import "../styles/Home.css";
import { Input, Button, Select, MenuItem, InputLabel, FormControl, SelectChangeEvent} from "@mui/material";
import { CommitComponent } from "../components/CommitComponent";
import { getData, getBranches } from "../api/fetch";
import Navbar from "../components/Navigationbar";

export default function Home() {
  const [projectID, setProjectID] = useState<number>(17381);
  const [projectToken, setProjectToken] = useState<string>("glpat-CRs4epaLyzKdvdpGzE_3");
  // toggle branch selector
  const [toggle, setToggle] = useState(false);
  const [isLoading, setLoading] = useState(true);
  const [selectedBranch, setBranchName] = useState<string>("");
  const [branches, setBranches] = useState<string[]>([]);

  const onChangeProjectID = (event: React.ChangeEvent<HTMLInputElement>) => {
    setProjectID(parseInt(event.currentTarget.value));
    console.log(projectID)
  };
  const onChangeProjectToken = (event: React.ChangeEvent<HTMLInputElement>) => {
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
      for (let i = 0; i < res.length; i++) {
        if(!branches.find((el => el === res[i].name))) {
          branches.push(res[i].name)
          
        } 
      }
      setLoading(false);
    });
  }, [branches]);
  
  const handleChangeBranch = (event: SelectChangeEvent) => {
    const newBranch = event.target.value;
    if (newBranch != null) {
        setBranchName(event.target.value as string);
    }
  }

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
        <Select defaultValue={""} onChange={handleChangeBranch}>
          {branches.map((branch: string) => (
            <MenuItem key={branch} value={branch}>
              {branch}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      )}
    </div>
  );
}