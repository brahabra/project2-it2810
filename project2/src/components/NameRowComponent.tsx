import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { Commit } from "../types";

interface Props {
  commits: Commit[];
  filterName: string;
  setName: (value: string) => void;
}

export default function NameRowComponent(props: Props) {
  function getCommitAuthors() {
    const authorNames = props.commits.map((commit) => commit.author_name);
    return authorNames.filter(
      (name, index) => authorNames.indexOf(name) === index
    );
  }

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel>Name</InputLabel>
        <Select
          value={props.filterName}
          label="Name"
          onChange={(event: SelectChangeEvent, child) =>
            props.setName(event.target.value)
          }
        >
          <MenuItem key={"-1"} value={"default"}>
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
