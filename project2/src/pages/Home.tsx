import { useState } from "react";
import "../styles/Home.css";
import { Input, Button } from "@mui/material";
import { LocalStorageClass } from "../WebStorageClass";
import logo from "../gitlab-logo-650.jpg"
import { getCommits } from "../api/fetch";

export default function Home() {
  const storage = new LocalStorageClass();
  const [projectID, setProjectID] = useState<string>(selectProjectID());
  const [projectToken, setProjectToken] = useState<string>(selectProjectToken());
  const [feedbackMessage, setFeedbackMessage] = useState("");

  const onChangeProjectID = (event: React.ChangeEvent<HTMLInputElement>) => {
    setProjectID(event.target.value);
  };
  const onChangeProjectToken = (event: React.ChangeEvent<HTMLInputElement>) => {
    setProjectToken(event.target.value);
  };



  const onSubmit = () => {
    getCommits(projectID, projectToken).then((res) =>{
      if(res){
        if (projectID !== null && projectToken !== "") {
          setFeedbackMessage("Repository sucessfully added!")
          storage.setPropValue("projectID", projectID);
          storage.setPropValue("projectToken", projectToken);
        }
      }
      else{
        setFeedbackMessage("Invalid ID and token. Could not load repository ...");
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
    <div className="homeContainer">
      <img className='homepage-logo' src={logo} alt="GitLab Logo" />
      <Input
        type="text"
        placeholder="ProjectID"
        onChange={onChangeProjectID}
        value={projectID}
      />
      <Input
        type="text"
        placeholder="Project Token"
        onChange={onChangeProjectToken}
        value={projectToken}
      />
      <Button onClick={onSubmit}>Submit</Button>
      <div className="feedbackText"> {feedbackMessage} </div>
    </div>
  );
}
