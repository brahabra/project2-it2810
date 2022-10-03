import { useState } from 'react';
import "../styles/Home.css";
import { Input, Button } from "@mui/material";
import { LocalStorageClass } from "../WebStorageClass";

export default function Home() {
  const storage = new LocalStorageClass();
  const [projectID, setProjectID] = useState<string>(selectProjectID());
  const [projectToken, setProjectToken] = useState<string>(selectProjectToken());
  const [toggle, setToggle] = useState(false);

  const onChangeProjectID = (event: React.ChangeEvent<HTMLInputElement>) => {
    setProjectID(event.target.value);
  };
  const onChangeProjectToken = (event: React.ChangeEvent<HTMLInputElement>) => {
    setProjectToken(event.target.value);
  };
  
  const onSubmit = () => {
    if (projectID !== null && projectToken !== "") {
      setToggle(!toggle)
      storage.setPropValue("projectID", projectID);
      storage.setPropValue("projectToken", projectToken);
    }
  };



  function selectProjectID() {
    const data:string | null = storage.getPropValue("projectID");
    return (data == null) ? "17381" : data;
  }

  function selectProjectToken() {
    const data:string | null = storage.getPropValue("projectToken");
    return (data == null) ? "glpat-CRs4epaLyzKdvdpGzE_3" : data;
  }

  return (
    <div className="container">
      <br />
      <br />
      <Input
        type="number"
        placeholder="ProjectID"
        onChange={onChangeProjectID}
        value={parseInt(projectID)}
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
      {toggle ? <p>Data submitted</p>: null}
    </div>
  );
}