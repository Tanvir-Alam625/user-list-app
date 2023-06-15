import { object, string, number } from "yup";

export const createEmployeeSchema = object({
  firstName: string()
    .required("First Name is required")
    .min(3, "First Name too short"),
  lastName: string()
    .required("Last Name is required")
    .min(3, "First Name too short"),
  divisionID: number().required("Division ID is required"),
  districeID: number().required("District ID is required"),
});
export const updateEmployeeSchema = object({
  firstName: string()
    .required("First Name is required")
    .min(3, "First Name too short"),
  lastName: string()
    .required("Last Name is required")
    .min(3, "First Name too short"),
  divisionID: number().required("Division ID is required"),
  districeID: number().required("District ID is required"),
  employeeType: string().required("Employee Type is required"),
});
