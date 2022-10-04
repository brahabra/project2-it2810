import { Dayjs } from "dayjs";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Box } from "@mui/material";
import { style } from "../styles/Styles";

//Properties for date range picker component
interface Props {
  startValue: Dayjs | null;
  setStartValue: (value: Dayjs | null) => void;
  endValue: Dayjs | null;
  setEndValue: (value: Dayjs | null) => void;
}

//Component for picking date range.
export default function DateRangePicker(props: Props) {
  return (
    <Box sx={style.issueSelectDates}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          label="Start date"
          value={props.startValue}
          onChange={props.setStartValue}
          renderInput={(params) => <TextField {...params} />}
        />
        <DatePicker
          label="End date"
          value={props.endValue}
          onChange={props.setEndValue}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
    </Box>
  );
}
