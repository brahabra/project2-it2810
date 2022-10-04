import { Container, Paper } from "@mui/material";
import { style } from "../styles/Styles";
import { Issue } from "../types";

//Issue component to display a issue.
export const IssueComponent = (props: { key: number; issue: Issue }) => {
  return (
    <Container>
      <Paper sx={style.issuePaper}>
        <>
          <p>
            <strong>TITLE: </strong>
            <a href={props.issue.web_url}>{props.issue.title}</a>
          </p>
          <p>
            <strong>AUTHOR: </strong>
            {props.issue.author.name}
          </p>
          <p>
            <strong>ASSIGNEE: </strong>
            {props.issue.assignee !== null ? props.issue.assignee.name : "None"}
          </p>
          <p>
            <strong>DESCRIPTION: </strong>
            {props.issue.description !== null ? props.issue.description : ""}
          </p>
          {props.issue.labels.map((label) => {
            <p>{label}</p>;
          })}
          <p>
            <strong>STATUS: </strong>
            {props.issue.state}
          </p>
          <p>
            <strong>DATE CREATED: </strong>
            {props.issue.created_at.substring(0, 10)}
          </p>
        </>
      </Paper>
    </Container>
  );
};
