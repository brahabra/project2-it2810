import React, { useState } from "react";
import {
    Box,
    Container,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    SelectChangeEvent,
} from "@mui/material";
import { Commit } from "../types";

interface Props {
    commits: Commit[],
    filterList: Commit[],
    filterName: string,
    setFilterList: (value: Commit[]) => void,
    setName: (value: string) => void
}

export default function NameRowComponent(props: Props) {

    const [nameList] = useState<Commit[]>([]);
    for (let i = 0; i < props.commits.length; i++) {
    if (
        !nameList.find((el) => el.committer_name === props.commits[i].committer_name)
    ) {
        nameList.push(props.commits[i]);
    }
    }

    const handleChangeName = (event: SelectChangeEvent) => {
    props.setFilterList(props.filterList.splice(0));
    const newName = event.target.value;
    if (newName != null) {
        props.setName(event.target.value as string);
        console.log(props.filterList);
        for (let i = 0; i < props.commits.length; i++) {
        if (props.commits[i].committer_name === newName) {
            props.filterList.push(props.commits[i]);
        }
        }
        props.setFilterList(props.filterList);
    }
    };

    return (
    <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
        <InputLabel>Name</InputLabel>
        <Select value={props.filterName} label="Name" onChange={handleChangeName}>
            <MenuItem value={""}>Default</MenuItem>
            {nameList.map((commit) => (
            <MenuItem key={commit.id} value={commit.committer_name}>
                {commit.committer_name}
            </MenuItem>
            ))}
        </Select>
        </FormControl>
    </Box>
    );
};