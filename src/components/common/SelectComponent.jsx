import React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const SelectComponent = ({
  children,
  selectValue,
  handleChange,
  placeholder,
}) => {
  return (
    <Box sx={{ minWidth: 170 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{placeholder}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectValue}
          label={placeholder}
          onChange={(e) => handleChange(e.target.value)}
        >
          {children}
        </Select>
      </FormControl>
    </Box>
  );
};

export default SelectComponent;
