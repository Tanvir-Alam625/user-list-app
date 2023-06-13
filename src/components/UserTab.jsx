import React, { useState } from "react";

import SelectComponent from "./common/SelectComponent";

const selectOptions = [
  { id: 1, name: "Dhaka" },
  { id: 2, name: "khulna" },
  { id: 3, name: "Rajshahi" },
];
const UserTab = () => {
  const [selectDivision, setSelectDivision] = useState("");

  const handleChangeDivision = (value) => {
    setSelectDivision(value);
  };
  return (
    <div>
      <div className="tab-header">
        <SelectComponent
          handleChange={handleChangeDivision}
          selectValue={selectDivision}
          placeholder={"Select Division"}
          selectOptions={selectOptions}
        ></SelectComponent>
      </div>
      <div className="tab-content"></div>
    </div>
  );
};

export default UserTab;
