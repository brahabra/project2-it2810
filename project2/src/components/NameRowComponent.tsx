import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { Commit } from "../types";
import { SessionStorageClass } from "../WebStorageClass";

interface Props {
  commits: Commit[];
  filterName: string;
  setName: (value: string) => void;
}

export default function NameRowComponent(props: Props) {
  const storage = new SessionStorageClass();
  function getCommitAuthors() {
    const authorNames = props.commits.map((commit) => commit.author_name);
    return authorNames.filter(
      (name, index) => authorNames.indexOf(name) === index
    );
  }

  

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel>Author</InputLabel>
        <Select
          value={props.filterName}
          label="Name"
          onChange={(event: SelectChangeEvent, child) => {
            const name:string = event.target.value;
            props.setName(name);
            storage.setPropValue("selectedName", name);
          }}
        >
          <MenuItem key={-1} value={"default"}>
            Default
          </MenuItem>
          {getCommitAuthors().map((name, index) => (
            <MenuItem key={index} value={name}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
