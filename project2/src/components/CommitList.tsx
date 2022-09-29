import { Box, Container } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { getCommits } from "../api/fetch";
import { ProjectContext } from "../ProjectContext";
import { Commit } from "../types";
import { CommitComponent } from "./CommitComponent";
import { FilterComponent } from "./FilterComponent";

interface Props {
    selectedBranch: string
}

export const CommitList = (props:Props) => {
    const ctx = useContext(ProjectContext);
    const [commits, setCommits] = useState<Commit[]>([]);
    const [filterList, setFilterList] = useState<Commit[]>([]);
    const [isLoading, setLoading] = useState(false);


    useEffect(() => {
      getCommits(ctx.projectID, ctx.token, props.selectedBranch).then(
        (res: Commit[]) => {
          setCommits(res);
          setLoading(true);
        }
      );
    }, [props.selectedBranch]);

    return (
        <Container>
            {isLoading ? <FilterComponent commits={commits} filterList={filterList} setFilterList={setFilterList}/> : null }
            {isLoading ? 
            <Box sx={{ width: "100%", margin: "auto", backgroundColor: "#DAF7A6" }}>
                {filterList.map((commit) => (
                    <CommitComponent key={commit.id} commit={commit} />
                ))}
            </Box> : <p>Loading Data ...</p> }
        </Container>

    );

    
}