import { Box } from "@mui/material";
import { useState } from "react";
import { style } from "../styles/Styles";
import { Issue } from "../types";
import { IssueComponent } from "./IssueComponent";
import { IssueFilterComponent } from "./IssueFilterComponent";
import "../styles/IssuePage.css";

interface Props {
  issues: Issue[]
}


export const IssueList = (props: Props) => {
  const [filterList, setFilterList] = useState<Issue[]>([]);

  return (
    <Box sx={style.issueListBox}>
      <IssueFilterComponent issues={props.issues} filterList={filterList} setFilterList={setFilterList} />
      <Box sx={style.issuesContainer}>
        {filterList.map((issue: Issue) => (
          <IssueComponent key={issue.id} issue={issue} />
        ))}
      </Box>
    </Box>
  );
}