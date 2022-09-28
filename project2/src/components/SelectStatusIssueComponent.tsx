import { SelectChangeEvent, Box, InputLabel, Select, MenuItem, FormControl } from '@mui/material';
import React, { useState } from 'react'
import { Commit, Issue } from '../types';

interface Props {
    filterStatus: string,
    issues: Issue[],
    filterList: Issue[],
    setFilterList: (value: Issue[]) => void,
    setStatus: (value:string) => void
}

export default function SelectStatusIssueComponent(props: Props) {

    function getIssueStatus() {
        const statusNames = props.issues.map((issue) => issue.state);
        return statusNames.filter(
          (status, index) => statusNames.indexOf(status) === index
        );
    }

    return (
    <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
        <InputLabel>Status</InputLabel>
        <Select 
        value={props.filterStatus}
         label="Status" onChange={(event: SelectChangeEvent, child) =>
            props.setStatus(event.target.value)
          }>
            <MenuItem key={-1} value={"default"}>Default</MenuItem>
            {getIssueStatus().map((status, index) => (
            <MenuItem key={index} value={status}>
                {status}
            </MenuItem>
            ))}
        </Select>
        </FormControl>
    </Box>
    );
}