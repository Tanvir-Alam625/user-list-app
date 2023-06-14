import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { getDistrict, getDivision } from "../service/api";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  borderRadius: "10px",
  boxShadow: 24,
  p: 4,
};
const ModalComponent = ({ setOpen, open, divisions, employeeType }) => {
  const handleClose = () => setOpen(false);
  const [district, setDistrict] = useState([]);
  const [divisionName, setDivisionName] = useState("");
  const [districtName, setDistrictName] = useState("");
  const districtValue = async (value) => {
    try {
      const { readDistrictData } = await getDistrict(value);
      setDistrict(readDistrictData);
    } catch (error) {
      console.log(error);
    }
  };
  const handleDivisionNameChange = (event) => {
    setDivisionName(event.target.value);
    setDistrictName("");
    districtValue(event.target.value);
  };
  const handleDistrictNameChange = (event) => {
    setDistrictName(event.target.value);
  };

  // const handleEmployeeTypeChange = (event) => {
  //   setEmployeeType(event.target.value);
  // };
  const handleSubmit = () => {};
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            variant="h4"
            color="#37474f"
            sx={{ margin: "20px", textAlign: "center" }}
          >
            Add {employeeType} User
          </Typography>
          <form
            style={{ display: "flex", flexDirection: "column", gap: "15px" }}
            onSubmit={handleSubmit}
          >
            <TextField label="First Name" required />
            <TextField label="Last Name" required />
            <FormControl>
              <InputLabel>Division Name</InputLabel>
              <Select
                value={divisionName}
                onChange={handleDivisionNameChange}
                label="Division Name"
                required
              >
                {divisions &&
                  divisions?.map((division) => (
                    <MenuItem key={division.divID} value={division.divID}>
                      {division.divisionName}
                    </MenuItem>
                  ))}
              </Select>
            </FormControl>
            <FormControl>
              <InputLabel>District Name</InputLabel>
              <Select
                value={districtName}
                onChange={handleDistrictNameChange}
                label="District Name"
                required
              >
                {district &&
                  district?.map((dist) => (
                    <MenuItem key={dist.districtID} value={dist.districtID}>
                      {dist.districtName}
                    </MenuItem>
                  ))}
              </Select>
            </FormControl>
            <FormControl>
              <InputLabel>Employee Type</InputLabel>
              <Select
                disabled
                defaultValue={employeeType}
                label="Employee Type"
                required
              >
                <MenuItem value="Employee">Employee</MenuItem>
                <MenuItem value="Admin">Admin</MenuItem>
              </Select>
            </FormControl>
            <Button type="submit" variant="contained" color="primary">
              Add {employeeType}
            </Button>
          </form>
        </Box>
      </Modal>
    </div>
  );
};

export default ModalComponent;
