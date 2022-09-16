import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "../styles/Home.css";
import { Commit } from "../components/Commit";
import { getData } from "../api/fetch";
import { Typography } from "@mui/material";

export default function Home() {
  const [commits, setCommits] = useState([]);

  useEffect(() => {
    getData("17381", "glpat-CRs4epaLyzKdvdpGzE_3").then((res) => {
      console.log(res); // JSON data parsed by `data.json()` call
      setCommits(res);
    });
  }, []);

  return (
    <div>
      <div className="commits">
        {commits.map(
          (item: { id: string; title: string; committer_name: string }) => (
            <Commit commit={item} />
          )
        )}
      </div>
    </div>
  );
}
