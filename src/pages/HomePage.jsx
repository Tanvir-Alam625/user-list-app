import React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
const HomePage = () => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="User" value="1" />
            <Tab label="Employee" value="2" />
          </TabList>
        </Box>
        <TabPanel value="1">User</TabPanel>
        <TabPanel value="2">Em</TabPanel>
      </TabContext>
    </div>
  );
};

export default HomePage;
