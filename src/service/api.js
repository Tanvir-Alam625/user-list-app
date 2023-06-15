const baseURI = "http://59.152.62.177:8085/api";

// API: for get divisions data
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

// API: for get districts data
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

// API: for get all users
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

// API : for get a user
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

// API: for create a user
export const createEmployee = async (employeeData) => {
  try {
    const response = await fetch(
      `${baseURI}/Employee/SaveEmployeeInformation`,
      {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(employeeData),
      }
    );
    if (!response.ok) {
      throw new Error("Couldn't create Employee ");
    }
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error while fetching Employee data:", error);
    throw error;
  }
};

// API: for update Employee info

export const updateEmployee = async (id, updatedData) => {
  try {
    const response = await fetch(
      `${baseURI}/Employee/UpdateEmployeeInformation/${id}`,
      {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(updatedData),
      }
    );
    if (!response.ok) {
      throw new Error("Couldn't Update Employee ");
    }
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error while fetching Employee data:", error);
    throw error;
  }
};
