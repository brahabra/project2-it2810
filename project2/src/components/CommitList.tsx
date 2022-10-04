import { Box } from "@mui/material";
import { useState } from "react";
import { Commit } from "../types";
import { CommitComponent } from "./CommitComponent";
import { FilterComponent } from "./CommitFilterComponent";
import { Graph } from "./Graph";
import { style } from "../styles/Styles";
import "../styles/CommitsPage.css";

interface Props {
	commits: Commit[]
	isLoading: boolean
}

export const CommitList = (props: Props) => {
	const [filterList, setFilterList] = useState<Commit[]>([]);

	return (
		<div className="commitContainer">
			{props.isLoading ? <Graph commits={props.commits} /> : null}
			<Box sx={style.commitListBox}>
				{props.isLoading ? <FilterComponent commits={props.commits} filterList={filterList} setFilterList={setFilterList} /> : null}
				{props.isLoading ?
					<Box sx={style.commitListContainer}>
						{filterList.map((commit) => (
							<CommitComponent key={commit.id} commit={commit} />
						))}
					</Box> : <p>Loading Data ...</p>}
			</Box>
		</div>
	);
}