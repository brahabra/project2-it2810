import React, { useState } from "react";
import { Container, Paper, Typography } from "@mui/material";
import "../styles/Commit.css";
import { style } from "../styles/Styles";


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
    <Container>
      <Paper> 
        <Typography>
        Title:
         <a href={props.commit.web_url}>
         {props.commit.title}</a>
        </Typography>
        <Typography> Author: {props.commit.committer_name}</Typography>
        <Typography> Committer Email: {props.commit.committer_email}</Typography>
        <Typography>Date Created: {props.commit.created_at.substring(0, 10)}</Typography>
      </Paper>
    </Container>
  );
};
