import React, { useState } from "react";
import DatePicker from "react-datepicker";

const FilterBar = (props) => {
  const [startDate, setStartDate] = useState(new Date());
  const CustomDatePicker = ({ value, onClick }) => (
    <input
      type="text"
      className="form-control search-select bg-brighter"
      placeholder={value}
      onClick={onClick}
    />
  );
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <div className="row">
              <div className="col-lg-4 col-md-4 col-sm-12 p-0">
                <select
                  className="form-control search-select"
                  id="districtList"
                >
                  <option>All Districts</option>
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
              {props.showDate && props.showDate ? (
                <div className="col-lg-4 col-md-4 col-sm-12 p-0">
                  <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    customInput={<CustomDatePicker />}
                  />
                </div>
              ) : (
                ""
              )}
              <div className="col-lg-4 col-md-4 col-sm-12 p-0">
                <button type="button" className="btn btn-primary search-btn">
                  Filter
                </button>
              </div>
              {!props.showDate && !props.showDate ? (
                <div className="col-lg-4 col-md-4 col-sm-12 p-0">
                  <button
                    type="button"
                    className="btn btn-secondary search-btn"
                  >
                    Update
                  </button>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterBar;
