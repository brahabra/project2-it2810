import { Container, Paper } from "@mui/material";
import { Commit } from "../types";
import { style } from "../styles/Styles";

//component for single commit boxes.
export const CommitComponent = (props: { key: string; commit: Commit }) => {
  return (
    <Container>
      <Paper sx={style.commitComponentPaper}>
        <p>
          <strong>TITLE: </strong>
          <a href={props.commit.web_url}>{props.commit.title}</a>
        </p>
        <p>
          <strong>AUTHOR: </strong>
          {props.commit.committer_name}
        </p>
        <p>
          <strong>COMMITTER EMAIL: </strong>
          {props.commit.committer_email}
        </p>
        <p>
          <strong>DATE CREATED: </strong>
          {props.commit.created_at.substring(0, 10)}
        </p>
      </Paper>
    </Container>
  );
};
