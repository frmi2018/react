import {
  FormControl,
  FormControlLabel,
  Checkbox as MuiCheckbox,
} from "@material-ui/core";
import React from "react";

export default function Checkbox(props) {
  const { name, label, value, onChange } = props;

  // TODO : add function to correct error
  // Error : Invalid prop 'checked' of type 'string' supplied to 'forwardref(switchBase)'
  // Status : corrected
  const convertToDefEventPara = (name, value) => ({
    target: { name, value },
  });
  // -----

  return (
    <FormControl>
      <FormControlLabel
        control={
          <MuiCheckbox
            name={name}
            color="primary"
            checked={value}
            onChange={(e) =>
              onChange(convertToDefEventPara(name, e.target.checked))
            }
          />
        }
        label={label}
      />
    </FormControl>
  );
}
