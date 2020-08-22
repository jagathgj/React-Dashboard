import React from "react";
import { SearchBar, SearchResult } from "../../components";

const UserPage = () => {
  return (
    <>
      <div className="search-section flex-none m-3 p-3 bg-white rounded shadow-sm">
        <SearchBar></SearchBar>
      </div>
      <div className="result-section flex-fill overflow-auto h-100">
        <SearchResult></SearchResult>
      </div>
    </>
  );
};

export default UserPage;
