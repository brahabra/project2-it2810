import { useState } from "react";
import { Container, Paper, Typography, IconButton } from "@mui/material";
import { Issue } from "../types"

export const IssueComponent = (props: {key:number, issue:Issue}) => {
  return (
    <Container>
      <Paper sx={{
            padding: '20px',
            borderRadius: '25px',
            width: 'auto',
            margin: '20px',
          }}
      >
        <>
        <Typography>
        Title: 
         <a href={props.issue.web_url} > 
         {props.issue.title}</a>
        </Typography>
        <Typography> Author: {props.issue.author.name}</Typography>
        <Typography>Assignee: {props.issue.assignee.name}</Typography>
        <Typography> Description: {props.issue.description}</Typography>
        {props.issue.labels.map((label) => {
            <Typography>{label}</Typography>
        })}
        <Typography>Status: {props.issue.state} </Typography>
        <Typography>Date Created: {props.issue.created_at.substring(0, 10)}</Typography>
        </>
      </Paper>
    </Container>
  );
};
