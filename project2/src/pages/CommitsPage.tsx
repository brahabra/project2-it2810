import React, { useEffect, useState } from "react";
import "../styles/CommitsPage.css";
import { Commit } from "../components/Commit";
import { getData } from "../api/fetch";
import Navbar from "../components/Navbar";

export default function Commits() {
  const [commits, setCommits] = useState<Commit[]>([]);
  const [isLoading, setLoading] = useState(true);

  type Commit = { 
    id: string,
    short_id: string,
    created_at: string,
    author_email: string, 
    author_name: string,
    authored_date: string, 
    committed_date: string,
    committer_email: string, 
    committer_name: string,
    message: string,
    title: string, 
    web_url: string,
  };

  useEffect(() => {
    getData("17381", "glpat-CRs4epaLyzKdvdpGzE_3", 'main').then((res) => {
      for (let i = 0; i < res.length; i++) {
        if(!commits.find(el => el.id === res[i].id)) {
          commits.push(res[i]);
        } 
      }
      setLoading(false);
    });
  }, []);
 
  return (
    <div>
      <Navbar />
      <div className="header">
        <h2>Commits</h2>
      </div>
      <div className="commits">  
      {isLoading ? <p>no data</p> : 
      commits.map(
      (commit) => (
        <Commit key={commit.id} commit={commit} />
      ))}
      </div>
    </div>
  );
}
