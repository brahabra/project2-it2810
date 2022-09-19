import React, { useState } from "react";
import { Typography } from "@mui/material";
import "../styles/Commit.css";


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
}

export const Commit = (props: {key:string, commit:Commit}) => {
  return (
    <div className="commit">
      <Typography>
        <div className="title"><a href={props.commit.web_url}>{props.commit.title}</a></div>
        <div className="comitter">@{props.commit.committer_name} </div>
        <div className="created">{props.commit.created_at.substring(0, 10)}</div>
      </Typography>
    </div>
  );
};
