import { Box } from "@mui/material";
import { useEffect, useState, useContext } from "react";
import { getIssues } from "../api/fetch";
import { ProjectContext } from "../ProjectContext";
import { Issue } from "../types";
import { IssueComponent } from "./IssueComponent";
import { IssueFilterComponent } from "./IssueFilterComponent";


export const IssueList = () => {
    const [issues, setIssues] = useState<Issue[]>([]);
    const [filterList, setFilterList] = useState<Issue[]>([]);
    const ctx = useContext(ProjectContext);

    useEffect(() => {
        getIssues(ctx.projectID, ctx.token).then(
          (res: Issue[]) => {
            setIssues(res);
          }
        );
      }, []);

    return (
        <Box sx={{ width: "100%", margin: "auto", backgroundColor: "#DAF7A6" }}>
          <IssueFilterComponent issues={issues} filterList={filterList} setFilterList={setFilterList} /> 
          {filterList.map((issue: Issue) => (
                <IssueComponent key={issue.id} issue={issue} />
          ))}
        </Box>
      );
}