import React from "react";
import {NavLink} from 'react-router-dom';

const HeaderTable = () => {
  return (
    <div className="d-flex flex-column h-100">
      <div className="py-2 mx-4 d-flex justify-content-between align-items-center flex-none">
        <span className="white-text mx-3 font-weight-bold">District name</span>

        <div>
          <button type="button" className="btn btn-warning px-2">
            <span className="table-btn">Translate</span>
          </button>
          <button type="button" className="btn btn-info px-2 ml-2">
            <span className="table-btn">Link</span>
          </button>
        </div>
      </div>

      <div className="mx-4 flex-fill position-relative">
        <div className="table-wrapper table-responsive position-absolute h-100 w-100">
          <table className="table table-hover mb-0">
            <thead>
              <tr>
                <th>
                  <input
                    className="form-checkbox-input"
                    type="checkbox"
                    id="checkbox"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="checkbox"
                    className="mr-2 label-table"
                  ></label>
                </th>
                <th className="th-lg">
                  <a>
                    Place Name in Malayalam
                    <i className="fas fa-sort ml-1"></i>
                  </a>
                </th>
                <th className="th-lg">
                  <a href="">
                    Place Name in English
                    <i className="fas fa-sort ml-1"></i>
                  </a>
                </th>
                <th className="th-lg">
                  <a href="">
                    Map
                    <i className="fas fa-sort ml-1"></i>
                  </a>
                </th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <th scope="row">
                  <input
                    className="form-checkbox-input"
                    type="checkbox"
                    id="checkbox1"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="checkbox1"
                    className="label-table"
                  ></label>
                </th>
                <td>Malayalam name</td>
                <td>
                  <input type="text" className="form-control" />
                </td>
                <td>
                  <NavLink to="#" onClick={e=>e.prevenDefault()}>View Map</NavLink>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <input
                    className="form-checkbox-input"
                    type="checkbox"
                    id="checkbox2"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="checkbox2"
                    className="label-table"
                  ></label>
                </th>
                <td>Malayalam name</td>
                <td>
                  <input type="text" className="form-control" />
                </td>
                <td>
                  <NavLink to="#" onClick={e=>e.prevenDefault()}>View Map</NavLink>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <input
                    className="form-checkbox-input"
                    type="checkbox"
                    id="checkbox3"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="checkbox3"
                    className="label-table"
                  ></label>
                </th>
                <td>Malayalam name</td>
                <td>
                  <input type="text" className="form-control" />
                </td>
                <td>
                  <NavLink to="#" onClick={e=>e.prevenDefault()}>View Map</NavLink>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <input
                    className="form-checkbox-input"
                    type="checkbox"
                    id="checkbox4"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="checkbox4"
                    className="label-table"
                  ></label>
                </th>
                <td>Malayalam name</td>
                <td>
                  <input type="text" className="form-control" />
                </td>
                <td>
                  <NavLink to="#" onClick={e=>e.prevenDefault()}>View Map</NavLink>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <input
                    className="form-checkbox-input"
                    type="checkbox"
                    id="checkbox5"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="checkbox5"
                    className="label-table"
                  ></label>
                </th>
                <td>Malayalam name</td>
                <td>
                  <input type="text" className="form-control" />
                </td>
                <td>
                  <NavLink to="#" onClick={e=>e.prevenDefault()}>View Map</NavLink>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <input
                    className="form-checkbox-input"
                    type="checkbox"
                    id="checkbox6"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="checkbox6"
                    className="label-table"
                  ></label>
                </th>
                <td>Malayalam name</td>
                <td>
                  <input type="text" className="form-control" />
                </td>
                <td>
                  <NavLink to="#" onClick={e=>e.prevenDefault()}>View Map</NavLink>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <input
                    className="form-checkbox-input"
                    type="checkbox"
                    id="checkbox7"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="checkbox7"
                    className="label-table"
                  ></label>
                </th>
                <td>Malayalam name</td>
                <td>
                  <input type="text" className="form-control" />
                </td>
                <td>
                  <NavLink to="#" onClick={e=>e.prevenDefault()}>View Map</NavLink>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <input
                    className="form-checkbox-input"
                    type="checkbox"
                    id="checkbox8"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="checkbox8"
                    className="label-table"
                  ></label>
                </th>
                <td>Malayalam name</td>
                <td>
                  <input type="text" className="form-control" />
                </td>
                <td>
                  <NavLink to="#" onClick={e=>e.prevenDefault()}>View Map</NavLink>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <input
                    className="form-checkbox-input"
                    type="checkbox"
                    id="checkbox9"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="checkbox9"
                    className="label-table"
                  ></label>
                </th>
                <td>Malayalam name</td>
                <td>
                  <input type="text" className="form-control" />
                </td>
                <td>
                  <NavLink to="#" onClick={e=>e.prevenDefault()}>View Map</NavLink>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default HeaderTable;
