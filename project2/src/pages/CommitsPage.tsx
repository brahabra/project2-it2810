import React, { useEffect, useState } from "react";
import "../styles/CommitsPage.css";
import { Commit } from "../components/Commit";
import { getData } from "../api/fetch";
import Navbar from "../components/Navbar";

export default function Commits() {
  const [commits, setCommits] = useState([]);

  useEffect(() => {
    getData("17381", "glpat-CRs4epaLyzKdvdpGzE_3").then((res) => {
      console.log(res); // JSON data parsed by `data.json()` call
      setCommits(res);
    });
  }, []);

  return (
    <div>
      <Navbar />
      <div className="header">
        <h2>Commits</h2>
      </div>
      <div className="commits">
        {commits.map(
          (item: {
            id: string;
            title: string;
            committer_name: string;
            web_url: string;
            created_at: string;
          }) => (
            <Commit commit={item} />
          )
        )}
      </div>
    </div>
  );
}
