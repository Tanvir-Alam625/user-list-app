import { getEmployeeData } from "../service/api";

export const findEmployeeUser = async () => {
  const { readEmployeeData } = await getEmployeeData();
  const adminUser = readEmployeeData.filter(
    (data) => data.employeeType === "Employee"
  );
  return adminUser;
};
