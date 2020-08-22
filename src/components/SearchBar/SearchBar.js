import React from "react";

const SearchBar = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="row">
              <div className="col-lg-4 col-md-4 col-sm-12 p-0">
                <select
                  className="form-control search-select"
                  id="districtList"
                >
                  <option>Select District</option>
                  <option>Thiruvananthapuram</option>
                  <option>Kollam</option>
                  <option>Pathanamthitta</option>
                  <option>Idukki</option>
                  <option>Aalappuzha</option>
                  <option>Kottayam</option>
                  <option>Ernakulam</option>
                  <option>Thrissur</option>
                  <option>Palakkad</option>
                  <option>Malappuram</option>
                  <option>Wayanad</option>
                  <option>Kozhikode</option>
                  <option>Kannur</option>
                  <option>Kasaragod</option>
                </select>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12 p-0">
                <input
                  type="text"
                  className="form-control search-select bg-brighter"
                  placeholder="Enter Drop City"
                />
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12 p-0">
                <button type="button" className="btn btn-primary search-btn">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchBar;
