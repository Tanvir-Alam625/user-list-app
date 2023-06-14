import { getEmployeeData } from "../service/api";

export const findUser = async (employeeType, divisionId, districtId) => {
  const { readEmployeeData } = await getEmployeeData();

  let users;
  users = readEmployeeData.filter((user) => user.employeeType === employeeType);
  if (divisionId) {
    users = readEmployeeData.filter((user) => user.divisionId === divisionId);
  }
  if (districtId) {
    users = readEmployeeData.filter((user) => user.districeID === districtId);
  }
  return users;
};
