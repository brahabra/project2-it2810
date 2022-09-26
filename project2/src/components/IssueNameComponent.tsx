import { SelectChangeEvent, Box, InputLabel, Select, MenuItem, FormControl } from '@mui/material';
import React, { useState } from 'react'
import { Commit, Issue } from '../types';

interface Props {
    filterName: string,
    issues: Issue[],
    filterList: Issue[],
    setFilterList: (value: Issue[]) => void,
    setName: (value:string) => void
}

export default function IssueNameComponent(props: Props) {
    const [nameList] = useState<Issue[]>([]);
    for (let i = 0; i < props.issues.length; i++) {
    if (
        !nameList.find((el) => el.author.name === props.issues[i].author.name)
    ) {
        nameList.push(props.issues[i]);
    }
    }

    const handleChangeName = (event: SelectChangeEvent) => {
    props.setFilterList(props.filterList.splice(0));
    const newName = event.target.value;
    if (newName != null) {
        props.setName(event.target.value as string);
        for (let i = 0; i < props.issues.length; i++) {
        if (props.issues[i].author.name === newName) {
            props.filterList.push(props.issues[i]);
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
            {nameList.map((issue) => (
            <MenuItem key={issue.id} value={issue.author.name}>
                {issue.author.name}
            </MenuItem>
            ))}
        </Select>
        </FormControl>
    </Box>
    );
}