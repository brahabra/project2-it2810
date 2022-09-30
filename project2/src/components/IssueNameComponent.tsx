import { SelectChangeEvent, Box, InputLabel, Select, MenuItem, FormControl } from '@mui/material';
import React, { useState } from 'react'
import { style } from '../styles/Styles';
import { Commit, Issue } from '../types';

interface Props {
    filterName: string,
    issues: Issue[],
    filterList: Issue[],
    setFilterList: (value: Issue[]) => void,
    setName: (value:string) => void
}

export default function IssueNameComponent(props: Props) {

    function getIssueAuthors() {
        const authorNames = props.issues.map((issue) => issue.author.name);
        return authorNames.filter(
          (name, index) => authorNames.indexOf(name) === index
        );
      }

    return (
    <Box sx={style.issueSelectName}>
        <FormControl fullWidth>
        <InputLabel>Name</InputLabel>
        <Select 
        value={props.filterName}
         label="Name" onChange={(event: SelectChangeEvent, child) =>
            props.setName(event.target.value)
          }>
            <MenuItem key={-1} value={"default"}>Default</MenuItem>
            {getIssueAuthors().map((name, index) => (
            <MenuItem key={index} value={name}>
                {name}
            </MenuItem>
            ))}
        </Select>
        </FormControl>
    </Box>
    );
}