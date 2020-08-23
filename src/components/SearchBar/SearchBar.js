import React, {useState, useRef, useEffect} from "react";

const SearchBar = () => {
  const [isTyping, setTyping] = useState(false);

  const toggleTyping = () => {
    setTyping(!isTyping);
  };

  const handlePlaceClear = () => {
    document.getElementById('dropdownMenuInput').value = '';
    setTyping(!isTyping);
  }

  const inputRef = useRef(null);

  useEffect(() => {
    if (isTyping) {
      inputRef.current.focus();
    }
  }, [isTyping]);

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
              <div className="col-lg-4 col-md-4 col-sm-12 p-0 position-relative dropdown">
                <input
                  type="text"
                  className="form-control dropdown-toggle search-select bg-brighter"
                  placeholder="Enter your place"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  id="dropdownMenuInput"
                  onChange={toggleTyping}
                  onfocus={toggleTyping}
                  ref={inputRef}
                />
                <ul className={isTyping ? "dropdown-menu w-100 show" : "dropdown-menu w-100"} aria-labelledby="dropdownMenuInput">
                  <li className="dropdown-item d-flex align-items-center">
                  <div class="d-flex align-items-center w-100" title="Place1">
                {/* <input
                  class="form-check-input"
                  type="checkbox"
                  id="Place1"
                /><label class="form-check-label" for="Place1"
                  >Place1</label>
                  <label class="form-check-span" for="Place1"></label> */}
                  <span class="form-check-span">Place1</span>
                  </div>
                  </li>
                </ul>
                {isTyping && isTyping ? <button className="autocomplete-clear active" onClick={handlePlaceClear}>
                  <svg
                    fill="#000000"
                    height="24"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="https://www.w3.org/2000/svg"
                  >
                    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                    <path d="M0 0h24v24H0z" fill="none" />
                  </svg>
                </button> : "" }
                
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
