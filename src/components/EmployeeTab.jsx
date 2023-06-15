import React, { useEffect, useState } from "react";

import { getDistrict, getDivision } from "../service/api";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import { columns } from "./TableColumns";
import { DataGrid } from "@mui/x-data-grid";
import ModalComponent from "./CreateModal";
import { findUser } from "../utils/findUsers";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
const employeeType = "Employee";

const EmployeeTab = () => {
  const [selectDivision, setSelectDivision] = useState("");
  const [selectDistrict, setSelectDistrict] = useState("");
  const [divisions, setDivisions] = useState(null);
  const [districts, setDistrict] = useState(null);
  const [open, setOpen] = useState(false);
  const [employeeData, setEmployeeData] = useState([]);
  const [dataLoading, setDataLoading] = useState(true);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    setDataLoading(true);
    const fetchDivision = async () => {
      try {
        const { readDivisionData } = await getDivision();
        setDivisions(readDivisionData);
        const user = await findUser(
          employeeType,
          selectDivision,
          selectDistrict
        );
        setEmployeeData(user);
        setDataLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchDivision();
  }, [selectDivision, selectDistrict, refresh]);

  const handleChangeDivision = async (event) => {
    const value = event.target.value;
    setSelectDivision(value);
    setSelectDistrict("");
    try {
      const { readDistrictData } = await getDistrict(value);
      setDistrict(readDistrictData);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChangeDistrict = (event) => {
    const value = event.target.value;
    setSelectDistrict(value);
  };
  const getRowId = (row) => row.empID;
  return (
    <div>
      <Typography variant="h5" sx={{ margin: "0 0 20px 0" }}>
        Employee List
      </Typography>
      <div className="tab-header">
        <div className="select-container">
          <Box sx={{ minWidth: 170 }}>
            <FormControl fullWidth size="small">
              <InputLabel id="demo-simple-select-label">
                Select Division
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={selectDivision}
                label="Select Division"
                onChange={handleChangeDivision}
              >
                {divisions
                  ? divisions.map((division) => (
                      <MenuItem key={division.divID} value={division.divID}>
                        {division.divisionName}
                      </MenuItem>
                    ))
                  : "Loading..."}
              </Select>
            </FormControl>
          </Box>
          <Box sx={{ minWidth: 170 }}>
            <FormControl fullWidth size="small">
              <InputLabel id="demo-simple-select-label">
                Select District
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={selectDistrict}
                label="Select District"
                onChange={handleChangeDistrict}
              >
                {districts
                  ? districts.map((district) => (
                      <MenuItem
                        key={district.districtID}
                        value={district.districtID}
                      >
                        {district.districtName}
                      </MenuItem>
                    ))
                  : "Loading..."}
              </Select>
            </FormControl>
          </Box>
        </div>
        <Button
          onClick={() => setOpen(true)}
          variant="contained"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Employee <AddCircleOutlineIcon style={{ fontSize: "16px" }} />
        </Button>
      </div>
      <div className="tab-content">
        <div style={{ height: 400, width: "100%" }}>
          <DataGrid
            rows={employeeData && employeeData}
            columns={columns}
            loading={dataLoading}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 5 },
              },
            }}
            getRowId={getRowId}
            pageSizeOptions={[5, 10]}
            checkboxSelection
          />
        </div>
      </div>
      <ModalComponent
        open={open}
        setOpen={setOpen}
        divisions={divisions}
        employeeType={employeeType}
        setRefresh={setRefresh}
        refresh={refresh}
      />
    </div>
  );
};

export default EmployeeTab;
