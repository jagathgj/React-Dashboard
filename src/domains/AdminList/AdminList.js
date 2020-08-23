import React from "react";
import { FilterBar, DataList } from "../../components";

const AdminList = () => {
  return (
    <>
      <div className="filter-section flex-none m-3 p-3 bg-white rounded shadow-sm d-flex flex-column">
        <FilterBar showDate={true}></FilterBar>
      </div>
      <div className="data-list-section flex-fill h-100 overflow-auto">
        <DataList></DataList>
        <DataList></DataList>
        <DataList></DataList>
        <DataList></DataList>
      </div>
    </>
  );
};

export default AdminList;
