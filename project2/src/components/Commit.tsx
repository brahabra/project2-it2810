import React, { useState } from "react";
import { Typography } from "@mui/material";
import "../styles/Commit.css";


type Commit = {
  id: string;
  title: string;
  committer_name: string;
  created_at: string;
  web_url: string;
};

interface CommitProps {
  commit: Commit;
}

export const Commit = (props: CommitProps) => {
  const { commit } = props;
  return (
    <div className="commit">
      <Typography>
        <div className="title"><a href={commit.web_url}>{commit.title}</a></div>
        <div className="comitter">@{commit.committer_name} </div>
        <div className="created">{commit.created_at.substring(0, 10)}</div>
      </Typography>
    </div>
  );
};
