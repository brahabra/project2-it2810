import {  useState } from "react";
import "../styles/CommitsPage.css";
import { SelectBranchComponent } from "../components/SelectBranchComponent";
import { CommitList } from "../components/CommitList";

export default function CommitsPage() {
  const [selectedBranch, setBranchName] = useState<string>("main");
  const [isLoadedBranch, setLoadedBranch] = useState(false)


  return (
    <div>
      <div className="header">
        <h2>Commits</h2>
      </div>
      <SelectBranchComponent
        setLoadedBranch={setLoadedBranch}
        selectedBranch={selectedBranch}
        setBranchName={setBranchName}/>
      {isLoadedBranch ? <CommitList selectedBranch={selectedBranch}/> : <p>Loading ...</p>}
    </div>
  );
}
