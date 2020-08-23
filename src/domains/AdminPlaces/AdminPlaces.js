import React from "react";
import { FilterBar, HeaderTable } from "../../components";

const AdminPlaces = () => {
  return (
    <>
      <div className="admin-places-section flex-none m-3 p-3 bg-white rounded shadow-sm d-flex flex-column">
        <FilterBar showDate={false}></FilterBar>
      </div>
      <div className="place-list-section flex-fill h-100 m-3 bg-white rounded shadow-sm">
        <HeaderTable></HeaderTable>
      </div>
    </>
  );
};

export default AdminPlaces;
