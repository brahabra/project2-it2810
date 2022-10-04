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

//Properties for status selector components.
interface Props {
  filterStatus: string;
  issues: Issue[];
  filterList: Issue[];
  setFilterList: (value: Issue[]) => void;
  setStatus: (value: string) => void;
}

//status selector component for issue filtering.
export default function SelectStatusIssueComponent(props: Props) {
  function getIssueStatus() {
    const statusNames = props.issues.map((issue) => issue.state);
    return statusNames.filter(
      (status, index) => statusNames.indexOf(status) === index
    );
  }

  return (
    <Box sx={style.issueSelectStatus}>
      <FormControl fullWidth>
        <InputLabel>Status</InputLabel>
        <Select
          value={props.filterStatus}
          label="Status"
          onChange={(event: SelectChangeEvent, child) =>
            props.setStatus(event.target.value)
          }
        >
          <MenuItem key={-1} value={"default"}>
            Default
          </MenuItem>
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
