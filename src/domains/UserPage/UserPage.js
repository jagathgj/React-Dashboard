import React from "react";
import { Header, SearchBar, SearchResult } from "../../components";

const UserPage = () => {
  return (
    <>
      <div className="row flex-column">
        <Header></Header>
        <div className="search-section m-3 p-3 bg-white rounded shadow-sm">
          <SearchBar></SearchBar>
        </div>
        <div className="result-section m-3 p-3 bg-white rounded shadow-sm">
            <SearchResult></SearchResult>
        </div>
      </div>
    </>
  );
};

export default UserPage;
