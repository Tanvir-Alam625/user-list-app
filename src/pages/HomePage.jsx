import { useState } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import UserTab from "../components/UserTab";
import EmployeeTab from "../components/EmployeeTab";
const HomePage = () => {
  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => setValue(newValue);
  return (
    <div>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="User" value="1" />
            <Tab label="Employee" value="2" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <UserTab />
        </TabPanel>
        <TabPanel value="2">
          <EmployeeTab />
        </TabPanel>
      </TabContext>
    </div>
  );
};

export default HomePage;
