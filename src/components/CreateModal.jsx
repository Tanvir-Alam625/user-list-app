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
import { createEmployee, getDistrict } from "../service/api";
import { Form, Formik, useFormik } from "formik";
import { validationSchema } from "../utils/validationSchema";
import { toast } from "react-hot-toast";

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
  const initialValues = {
    firstName: "",
    lastName: "",
    divisionID: "",
    districeID: "",
    employeeType: employeeType,
  };
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      const createUser = await createEmployee(values);
      if (createUser.isSuccess) {
        setOpen(false);
        toast.success(`SuccessFully created ${employeeType}`, {
          position: "top-center",
        });
      } else {
        setOpen(false);
        toast.error(`Couldn't create ${employeeType}`, {
          position: "top-center",
        });
      }
      resetForm();
      setSubmitting(false);
    },
  });
  const districtValue = async (value) => {
    try {
      const { readDistrictData } = await getDistrict(value);
      setDistrict(readDistrictData);
    } catch (error) {
      console.log(error);
    }
  };
  if (formik.values.divisionID) districtValue(formik.values.divisionID);
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
            onSubmit={formik.handleSubmit}
            style={{ display: "flex", flexDirection: "column", gap: "15px" }}
          >
            <TextField
              label="First Name"
              name="firstName"
              error={
                formik?.touched?.firstName && Boolean(formik?.errors?.firstName)
              }
              value={formik?.values?.firstName}
              onChange={formik?.handleChange}
              onBlur={formik?.handleBlur}
            />
            {formik.touched.firstName ? (
              <span style={{ color: "red", fontSize: "12px" }}>
                {formik.errors.firstName}
              </span>
            ) : null}
            <TextField
              label="Last Name"
              name="lastName"
              error={
                formik?.touched?.lastName && Boolean(formik.errors.lastName)
              }
              value={formik?.values?.lastName}
              onChange={formik?.handleChange}
              onBlur={formik?.handleBlur}
            />
            {formik.touched.lastName ? (
              <span style={{ color: "red", fontSize: "12px" }}>
                {formik.errors.lastName}
              </span>
            ) : null}
            <FormControl>
              <InputLabel>Division Name</InputLabel>
              <Select
                name="divisionID"
                error={
                  formik?.touched?.divisionID &&
                  Boolean(formik.errors.divisionID)
                }
                value={formik?.values?.divisionID}
                onChange={formik?.handleChange}
                onBlur={formik?.handleBlur}
                label="Division Name"
              >
                {divisions &&
                  divisions?.map((division) => (
                    <MenuItem key={division.divID} value={division.divID}>
                      {division.divisionName}
                    </MenuItem>
                  ))}
              </Select>
              {formik.touched.divisionID ? (
                <span style={{ color: "red", fontSize: "12px" }}>
                  {formik.errors.divisionID}
                </span>
              ) : null}
            </FormControl>
            <FormControl>
              <InputLabel>District Name</InputLabel>
              <Select
                name="districeID"
                error={
                  formik.touched.districeID && Boolean(formik.errors.districeID)
                }
                value={formik.values.districeID}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                label="District Name"
              >
                {district &&
                  district?.map((dist) => (
                    <MenuItem key={dist.districtID} value={dist.districtID}>
                      {dist.districtName}
                    </MenuItem>
                  ))}
              </Select>
              {formik.touched.districeID ? (
                <span style={{ color: "red", fontSize: "12px" }}>
                  {formik.errors.districeID}
                </span>
              ) : null}
            </FormControl>
            <FormControl>
              <InputLabel>Employee Type</InputLabel>
              <Select
                disabled
                defaultValue={employeeType}
                value={formik.values.employeeType}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                label="Employee Type"
                name="employeeType"
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
