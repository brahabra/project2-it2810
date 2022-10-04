import {
  SelectChangeEvent,
  Box,
  InputLabel,
  Select,
  MenuItem,
  FormControl,
} from "@mui/material";
import { style } from "../styles/Styles";
import { Issue } from "../types";
import { SessionStorageClass } from "../WebStorageClass";

//Props interface for props object.
interface Props {
  filterName: string;
  issues: Issue[];
  filterList: Issue[];
  setName: (value: string) => void;
}

//component for selecting for member to view issues for.
export default function IssueNameComponent(props: Props) {
  const storage = new SessionStorageClass();

  function getIssueAuthors() {
    const authorNames = props.issues.map((issue) => issue.author.name);
    return authorNames.filter(
      (name, index) => authorNames.indexOf(name) === index
    );
  }

  return (
    <Box sx={style.issueSelectName}>
      <FormControl fullWidth>
        <InputLabel>Author</InputLabel>
        <Select
          value={props.filterName}
          label="Name"
          onChange={(event: SelectChangeEvent, child) => {
            const name: string = event.target.value;
            props.setName(name);
            storage.setPropValue("selectedName", name);
          }}
        >
          <MenuItem key={-1} value={"default"}>
            Default
          </MenuItem>
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
