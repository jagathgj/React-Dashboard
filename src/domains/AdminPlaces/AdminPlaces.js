import React from "react";
import { SelectBar } from "../../components";

const AdminPlaces = () => {
  return (
    <>
      <div className="admin-places-section flex-fill m-3 p-3 bg-white rounded shadow-sm d-flex flex-column">
        <SelectBar></SelectBar>
      </div>
    </>
  );
};

export default AdminPlaces;
