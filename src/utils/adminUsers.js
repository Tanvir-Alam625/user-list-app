import { getEmployeeData } from "../service/api";

export const findAdminUser = async () => {
  const { readEmployeeData } = await getEmployeeData();
  const adminUser = readEmployeeData.filter(
    (data) => data.employeeType === "Admin"
  );
  return adminUser;
};
