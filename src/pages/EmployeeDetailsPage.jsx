import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useParams } from "react-router";
import { getDivision, getSingleUser } from "../service/api";
import ModalComponent from "../components/UpdateModal";
import EditNoteOutlinedIcon from "@mui/icons-material/EditNoteOutlined";
const EmployeeDetailsPage = () => {
  const { id } = useParams();
  const [userInfo, setUserInfo] = useState({});
  const [open, setOpen] = useState(false);
  const [divisions, setDivisions] = useState([]);
  const [refresh, setRefresh] = useState(false);
  useEffect(() => {
    const fetchUserInformation = async () => {
      try {
        const { readEmployeeData } = await getSingleUser(id);
        setUserInfo(readEmployeeData[0]);
        const { readDivisionData } = await getDivision();
        setDivisions(readDivisionData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUserInformation();
  }, [id, refresh]);
  const typoStyle = {
    display: "flex",
    alignItems: "center",
    width: "90%",
    justifyContent: "space-between",
    margin: "10px auto",
    borderBottom: "1px solid gray",
    padding: "7px 10px",
  };
  return (
    <>
      <Card sx={{ maxWidth: 800, margin: "0 auto" }}>
        <CardContent>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              margin: "20px 0",
              justifyContent: "space-between",
            }}
          >
            <Typography gutterBottom variant="h5" component="div">
              Information
            </Typography>
            <Button
              variant="contained"
              onClick={() => setOpen(true)}
              size="small"
            >
              Edit
              <EditNoteOutlinedIcon
                style={{ fontSize: "16px", marginLeft: "5px" }}
              />
            </Button>
          </div>
          <div style={{ width: "100%" }}>
            <Typography variant="div" style={typoStyle}>
              <span style={{ fontSize: "20px", fontWeight: 500 }}>
                INFO FIELDS
              </span>
              <span style={{ fontSize: "20px", fontWeight: 500 }}>
                INFO VALUES
              </span>
            </Typography>
            <Typography variant="div" style={typoStyle}>
              <span>EMPLOYEE ID</span> <span>{userInfo.empID}</span>
            </Typography>
            <Typography variant="div" style={typoStyle}>
              <span>FULL NAME</span>{" "}
              <span>
                {userInfo.firstName} {userInfo.lastName}
              </span>
            </Typography>
            <Typography variant="div" style={typoStyle}>
              <span>EMPLOYEE TYPE</span> <span>{userInfo.employeeType}</span>
            </Typography>
            <Typography variant="div" style={typoStyle}>
              <span>DIVISION NAME</span>{" "}
              <span>
                {userInfo.disvision ? userInfo.disvision : "No Value Found"}
              </span>
            </Typography>
            <Typography variant="div" style={typoStyle}>
              <span>DIVISION ID</span> <span>{userInfo.divisionId}</span>
            </Typography>
            <Typography variant="div" style={typoStyle}>
              <span>DISTRICT NAME:</span>{" "}
              <span>
                {userInfo.district ? userInfo.district : "No Value Found"}
              </span>
            </Typography>
            <Typography
              variant="div"
              style={{ ...typoStyle, borderBottom: "none" }}
            >
              <span>DISTRICT ID</span> <span>{userInfo.districeID}</span>
            </Typography>
          </div>
        </CardContent>
      </Card>
      <ModalComponent
        open={open}
        setOpen={setOpen}
        divisions={divisions}
        userInfo={userInfo}
        setRefresh={setRefresh}
        refresh={refresh}
      />
    </>
  );
};

export default EmployeeDetailsPage;
