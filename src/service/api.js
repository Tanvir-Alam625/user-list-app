const baseURI = "http://59.152.62.177:8085/api";

export const getDivision = async () => {
  try {
    const response = await fetch(`${baseURI}/Employee/Division`);
    if (!response.ok) {
      throw new Error("Failed to fetch division data");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error while fetching division data:", error);
    throw error;
  }
};

export const getDistrict = async (id) => {
  try {
    const response = await fetch(`${baseURI}/Employee/District/${id}`);
    if (!response.ok) {
      throw new Error("Failed to fetch district data");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error while fetching district data:", error);
    throw error;
  }
};

export const getEmployeeData = async () => {
  try {
    const response = await fetch(`${baseURI}/Employee/EmployeeData`);
    if (!response.ok) {
      throw new Error("Failed to fetch employee data");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error while fetching employee data:", error);
    throw error;
  }
};

export const getSingleUser = async (id) => {
  try {
    const response = await fetch(
      `${baseURI}/Employee/IndividualEmployeeData/${id}`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch user data");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error while fetching user data:", error);
    throw error;
  }
};
