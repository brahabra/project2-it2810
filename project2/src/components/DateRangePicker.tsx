import * as React from "react";
import { Dayjs } from "dayjs";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Commit } from "../types";


interface Props{
    filterList: Commit[]
    startValue: Dayjs | null,
    setStartValue: (value: Dayjs | null) => void,
    endValue: Dayjs | null,
    setEndValue: (value: Dayjs | null) => void
  }


export default function DateRangePicker(props: Props) {
  if (props.filterList.length !== 0) {
    for (let i = 0; i < props.filterList.length; i++) {
      if (
        (props.startValue?.isBefore(props.filterList[i].created_at) || props.startValue?.isSame(props.filterList[i].created_at))
        && (props.endValue?.isAfter(props.filterList[i].created_at) || props.endValue?.isSame(props.filterList[i].created_at))
      ) {
        console.log("Treff på " + props.filterList[i]);
      }
      else{
        props.filterList.splice(i);
      }
    }
  }
  else {
    console.log("filterlist tom")
  }
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label="Start date"
        value={props.startValue}
        onChange={(newStartValue) => {
          if (newStartValue != null) {
            props.setStartValue(newStartValue);
          }
        }}
        renderInput={(params) => <TextField {...params} />}
      />
      <DatePicker
        label="End date"
        value={props.endValue}
        onChange={(newEndValue) => {
          if (newEndValue != null) {
            props.setEndValue(newEndValue);
          }
        }}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
}
