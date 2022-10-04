import {  useContext, useEffect, useState } from "react";
import "../styles/CommitsPage.css";
import "../styles/Styles";
import { CommitList } from "../components/CommitList";
import { Commit } from "../types";
import { getCommits } from "../api/fetch";
import { ProjectContext } from "../ProjectContext";

export default function CommitsPage() {
  const ctx = useContext(ProjectContext);
  const [isLoading, setLoading] = useState(false);
  const [commits, setCommits] = useState<Commit[]>([]);


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
        <p>Showing the 100 last commits in your repository to main branch</p>
      </div>
      {isLoading ? <CommitList commits={commits} isLoading={isLoading} /> : <p>Loading ...</p>} 
    </div>
  );
}
