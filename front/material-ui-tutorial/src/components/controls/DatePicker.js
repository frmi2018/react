import DateFnsUtils from "@date-io/date-fns";
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import React from "react";

export default function DatePicker(props) {
  const { name, label, value, onChange } = props;

  // TODO : add function to correct error
  // Error : Invalid prop 'checked' of type 'string' supplied to 'forwardref(switchBase)'
  // Status : corrected
  const convertToDefEventPara = (name, value) => ({
    target: { name, value },
  });
  // -----

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
        disableToolbar
        variant="inline"
        inputVariant="outlined"
        label={label}
        formate="MMM/dd/yyyy"
        name={name}
        value={value}
        onChange={(date) => onChange(convertToDefEventPara(name, date))}
      />
    </MuiPickersUtilsProvider>
  );
}
