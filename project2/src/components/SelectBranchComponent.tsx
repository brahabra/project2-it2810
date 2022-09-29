import {FormControl, Select, MenuItem, InputLabel, SelectChangeEvent} from '@mui/material'
import { useContext, useEffect, useState } from 'react';
import { getBranches } from '../api/fetch';
import { ProjectContext } from '../ProjectContext';
import { LocalStorageClass } from '../WebStorageClass';
import { Branch } from '../types';

const storage = new LocalStorageClass();

interface Props {
    setLoadedBranch: (value: boolean) => void
    setBranchName: (value:string) => void,
    selectedBranch: string,
}

export const SelectBranchComponent = (props: Props) => {
    const [branches, setBranches] = useState<Branch[]>([]);
    const ctx = useContext(ProjectContext);


    const handleChangeBranch = (event: SelectChangeEvent) => {
      const newBranch = event.target.value;
      if (newBranch != null) {
          props.setBranchName(event.target.value as string);
          storage.setPropValue('branchName', props.selectedBranch)
      }
    }

    useEffect(() => {
        getBranches(ctx.projectID, ctx.token).then(
        (res: Branch[]) => {
            setBranches(res);
            props.setLoadedBranch(true);
        })
    }, [ctx.projectID, ctx.token]);
    

    return (
      <FormControl style={{width: 250}}>
        <InputLabel>Select branch</InputLabel>
        <Select defaultValue={""} onChange={handleChangeBranch}>
          {branches.map((branch: Branch) => (
            <MenuItem key={branch.name} value={branch.name}>
              {branch.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>);
}