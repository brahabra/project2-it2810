import { useState } from "react";
import "../styles/Home.css";
import { Input, Button } from "@mui/material";
import { LocalStorageClass } from "../WebStorageClass";
import { SelectBranchComponent } from "../components/SelectBranchComponent";
import { getCommits } from "../api/fetch";

export default function Home() {
  const storage = new LocalStorageClass();
  const [projectID, setProjectID] = useState<string>(selectProjectID());
  const [projectToken, setProjectToken] = useState<string>(
    selectProjectToken()
  );
  // toggle branch selector
  /*const [toggle, setToggle] = useState(false);
  const [selectedBranch, setBranchName] = useState<string>("");
  const [isLoadedBranch, setLoadedBranch] = useState(false);
  const [isValidInput, setIsValidInput] = useState(false);*/
  const [feedbackMessage, setFeedbackMessage] = useState("");

  const onChangeProjectID = (event: React.ChangeEvent<HTMLInputElement>) => {
    setProjectID(event.target.value);
  };
  const onChangeProjectToken = (event: React.ChangeEvent<HTMLInputElement>) => {
    setProjectToken(event.target.value);
  };



  const onSubmit = () => {
    
    getCommits(projectID, projectToken, "main").then((res) =>{
      if(res.length){
        if (projectID !== null && projectToken !== "") {
          setFeedbackMessage("Repository sucessfully added!")
          storage.setPropValue("projectID", projectID);
          storage.setPropValue("projectToken", projectToken);
        }
      }
      else{
        setFeedbackMessage("Could not load repository ...");
      }
    })
  };

  function selectProjectID() {
    const data: string | null = storage.getPropValue("projectID");
    return data == null ? "" : data;
  }

  function selectProjectToken() {
    const data: string | null = storage.getPropValue("projectToken");
    return data == null ? "" : data;
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
      <br />
      <br />
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
      <div className="feedbackText"> {feedbackMessage} </div>
      {/*     {toggle && <SelectBranchComponent
      setLoadedBranch={setLoadedBranch} 
      selectedBranch={selectedBranch} 
      setBranchName={setBranchName}/>} */}
    </div>
  );
}
