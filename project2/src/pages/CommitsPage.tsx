import {  useContext, useEffect, useState } from "react";
import "../styles/CommitsPage.css";
import "../styles/Styles";
import { SelectBranchComponent } from "../components/SelectBranchComponent";
import { CommitList } from "../components/CommitList";
import { Branch, Commit } from "../types";
import { getBranches, getCommits } from "../api/fetch";
import { ProjectContext } from "../ProjectContext";
import { SessionStorageClass } from "../WebStorageClass";

export default function CommitsPage() {
  const ctx = useContext(ProjectContext);
  //const storage = new SessionStorageClass();
  //const [selectedBranch, setBranchName] = useState<string>(((storage.getPropValue('branchName') !== null ) ?  storage.getPropValue('branchName'): 'main')!);
  //const [isLoadedBranch, setLoadedBranch] = useState(false)
  const [isLoading, setLoading] = useState(false);
  const [commits, setCommits] = useState<Commit[]>([]);
  //const [branches, setBranches] = useState<Branch[]>([]);


  
 /* useEffect(() => {
    getBranches(ctx.projectID, ctx.token).then(
    (res: Branch[]) => {
        setBranches(res);
        setLoadedBranch(true);
        console.log('done1')
    })
}, [ctx.projectID, ctx.token]);*/

  useEffect(() => {
    getCommits(ctx.projectID, ctx.token).then(
      (res: Commit[]) => {
        setCommits(res);
        setLoading(true);
      }
    );
  }, [ ctx.projectID, ctx.token]);

  return (
    <div>
      <div className="header">
        <h2>Commits</h2>
        <p>Showing the 100 last commits in your repository</p>
      </div>
      {/*<SelectBranchComponent
        branches={branches}
        setLoadedBranch={setLoadedBranch}
        selectedBranch={selectedBranch}
        setBranchName={setBranchName}/> */}
      {isLoading ? <CommitList /*selectedBranch={selectedBranch}*/ commits={commits} isLoading={isLoading} /> : <p>Loading ...</p>} 
    </div>
  );
}
