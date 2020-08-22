import React from "react";

const DataList = () => {
  return (
    <>
      <div className="d-flex flex-column m-3 p-3 bg-white rounded shadow-sm">
        <div className="w-100 text-center mb-2 font-weight-bold">
          22-Aug-2020
        </div>
        <div className="table-responsive">
          <table className="table table-sm table-centered mb-0">
            <thead>
              <tr>
                <th scope="col">No.</th>
                <th scope="col">District</th>
                <th scope="col">cases</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Thiruvananthapuram</td>
                <td>545</td>
                <td>
                  <button className="btn btn-danger">Delete</button>
                </td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Kottayam</td>
                <td>100</td>
                <td>
                  <button className="btn btn-danger">Delete</button>
                </td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Ernakulam</td>
                <td>400</td>
                <td>
                  <button className="btn btn-danger">Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default DataList;
