import { Container, Paper, Typography } from "@mui/material";
import { style } from "../styles/Styles";
import { Issue } from "../types"

export const IssueComponent = (props: {key:number, issue:Issue}) => {
  return (
    <Container>
      <Paper sx={style.issuePaper}
      >
        <>
        <Typography>
        Title:
         <a href={props.issue.web_url} > 
         {props.issue.title}</a>
        </Typography>
        <Typography> Author: {props.issue.author.name}</Typography>
        <Typography>Assignee: {props.issue.assignee !== null ? props.issue.assignee.name : "None"}</Typography>
        <Typography> Description: {props.issue.description !== null ? props.issue.description : ""}</Typography>
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
