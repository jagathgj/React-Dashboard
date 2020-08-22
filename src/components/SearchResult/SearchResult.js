import React from "react";

const SearchResult = () => {
  return (
    <>
      <div className="table-responsive">
        <table className="table table-sm table-centered mb-0">
          <thead>
            <tr>
              <th scope="col">No.</th>
              <th scope="col">Place</th>
              <th scope="col">Gender</th>
              <th scope="col">Age</th>
              <th scope="col">Reported Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Neyyattinkara</td>
              <td>Female</td>
              <td>45</td>
              <td>20-Aug-2020</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Kakkanad</td>
              <td>Female</td>
              <td>45</td>
              <td>20-Aug-2020</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Tirur</td>
              <td>Female</td>
              <td>45</td>
              <td>20-Aug-2020</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default SearchResult;
