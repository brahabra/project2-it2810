import { Box, Container } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { getCommits } from "../api/fetch";
import { ProjectContext } from "../ProjectContext";
import { Commit } from "../types";
import { CommitComponent } from "./CommitComponent";
import { FilterComponent } from "./CommitFilterComponent";
import { Graph } from "./Graph";
import { style } from "../styles/Styles";
import "../styles/CommitsPage.css";

/*interface Props {
    selectedBranch: string
}*/

export const CommitList = () => {
    const ctx = useContext(ProjectContext);
    const [commits, setCommits] = useState<Commit[]>([]);
    const [filterList, setFilterList] = useState<Commit[]>([]);
    const [isLoading, setLoading] = useState(false);


    useEffect(() => {
      getCommits(ctx.projectID, ctx.token /*, props.selectedBranch*/).then(
        (res: Commit[]) => {
          setCommits(res);
          setLoading(true);
        }
      );
    }, [ /*props.selectedBranch,*/ ctx.projectID, ctx.token]);

    return (
        <div className="commitContainer">
          {isLoading ? <Graph commits={commits} /> : null} 
          <Box sx={style.commitListBox}>
          {isLoading ? <FilterComponent commits={commits} filterList={filterList} setFilterList={setFilterList}/> : null }
            {isLoading ? 
            <Box sx={style.commitListContainer}>
                {filterList.map((commit) => (
                    <CommitComponent key={commit.id} commit={commit} />
                ))}
            </Box> : <p>Loading Data ...</p> }
            </Box>
        </div>

    );

    
}