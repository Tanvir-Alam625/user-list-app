import { Button } from "@mui/material";

export const columns = [
  { field: "empID", headerName: "ID", width: 70 },
  { field: "firstName", headerName: "FIRST NAME", width: 150 },
  { field: "lastName", headerName: "LAST NAME", width: 150 },
  { field: "employeeType", headerName: "EMPLOYEE TYPE", width: 200 },
  { field: "disvision", headerName: "DIVISION", width: 150 },
  { field: "district", headerName: "DISTRICT", width: 150 },
  {
    field: "actions",
    headerName: "ACTIONS",
    width: 150,
    renderCell: (params) => (
      <Button
        variant="contained"
        href={`/employee/${params.row.empID}`}
        color="primary"
      >
        View Details
      </Button>
    ),
  },
];
