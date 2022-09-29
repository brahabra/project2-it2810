import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { getIssues } from "../api/fetch";
import { Issue } from "../types";
import { IssueComponent } from "./IssueComponent";
import { IssueFilterComponent } from "./IssueFilterComponent";


export const IssueList = () => {
    const [issues, setIssues] = useState<Issue[]>([]);
    const [filterList, setFilterList] = useState<Issue[]>([]);

    useEffect(() => {
        getIssues("17381", "glpat-CRs4epaLyzKdvdpGzE_3").then(
          (res: Issue[]) => {
            setIssues(res);
            //setLoading(false);
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