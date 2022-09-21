import React, { useState } from "react";
import { Container, Paper, Typography, IconButton } from "@mui/material";
import "../styles/Commit.css";
import { Commit } from "../types"

export const CommitComponent = (props: {key:string, commit:Commit}) => {
  return (
    <Container>
      <Paper sx={{
            padding: '20px',
            borderRadius: '25px',
            width: 'auto',
            margin: '20px',
          }}
      >
        <Typography>
        Title: 
         <a href={props.commit.web_url} > 
         {props.commit.title}</a>
        </Typography>
        <Typography> Author: {props.commit.committer_name}</Typography>
        <Typography> Committer Email: {props.commit.committer_email}</Typography>
        <Typography>Date Created: {props.commit.created_at.substring(0, 10)}</Typography>
      </Paper>
    </Container>
  );
};
