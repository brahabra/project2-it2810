import React, { useState } from "react";
import { Typography } from "@mui/material";
import "./Commit.css";

type Commit = {
  id: string;
  title: string;
  committer_name: string;
};

interface CommitProps {
  commit: Commit;
}

export const Commit = (props: CommitProps) => {
  const { commit } = props;
  return (
    <div className="commit">
      <Typography>
        <div className="title">Title: {commit.title}</div>
        <div className="comitter">Committer: {commit.committer_name} </div>
      </Typography>
    </div>
  );
};
