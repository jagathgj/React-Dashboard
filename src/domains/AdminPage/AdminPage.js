import React from "react";
import { SelectBar, TextArea } from "../../components";

const AdminPage = () => {
  return (
    <>
      <div className="upload-section flex-fill m-3 p-3 bg-white rounded shadow-sm d-flex flex-column">
        <SelectBar></SelectBar>
        <TextArea></TextArea>
      </div>
    </>
  );
};

export default AdminPage;
