import React from "react";

const HeaderTable = () => {
  return (
    <div class="d-flex flex-column h-100">
      <div class="py-2 mx-4 d-flex justify-content-between align-items-center flex-none">
        <span class="white-text mx-3 font-weight-bold">District name</span>

        <div>
          <button type="button" class="btn btn-warning px-2">
            <span class="table-btn">Translate</span>
          </button>
          <button type="button" class="btn btn-info px-2 ml-2">
            <span class="table-btn">Link</span>
          </button>
        </div>
      </div>

      <div class="mx-4 flex-fill position-relative">
        <div class="table-wrapper table-responsive position-absolute h-100 w-100">
          <table class="table table-hover mb-0">
            <thead>
              <tr>
                <th>
                  <input
                    class="form-checkbox-input"
                    type="checkbox"
                    id="checkbox"
                  />
                  <label
                    class="form-check-label"
                    for="checkbox"
                    class="mr-2 label-table"
                  ></label>
                </th>
                <th class="th-lg">
                  <a>
                    Place Name in Malayalam
                    <i class="fas fa-sort ml-1"></i>
                  </a>
                </th>
                <th class="th-lg">
                  <a href="">
                    Place Name in English
                    <i class="fas fa-sort ml-1"></i>
                  </a>
                </th>
                <th class="th-lg">
                  <a href="">
                    Map
                    <i class="fas fa-sort ml-1"></i>
                  </a>
                </th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <th scope="row">
                  <input
                    class="form-checkbox-input"
                    type="checkbox"
                    id="checkbox1"
                  />
                  <label
                    class="form-check-label"
                    for="checkbox1"
                    class="label-table"
                  ></label>
                </th>
                <td>Malayalam name</td>
                <td>
                  <input type="text" className="form-control" />
                </td>
                <td>
                  <a href="javascript:void(0);">View Map</a>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <input
                    class="form-checkbox-input"
                    type="checkbox"
                    id="checkbox2"
                  />
                  <label
                    class="form-check-label"
                    for="checkbox2"
                    class="label-table"
                  ></label>
                </th>
                <td>Malayalam name</td>
                <td>
                  <input type="text" className="form-control" />
                </td>
                <td>
                  <a href="javascript:void(0);">View Map</a>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <input
                    class="form-checkbox-input"
                    type="checkbox"
                    id="checkbox3"
                  />
                  <label
                    class="form-check-label"
                    for="checkbox3"
                    class="label-table"
                  ></label>
                </th>
                <td>Malayalam name</td>
                <td>
                  <input type="text" className="form-control" />
                </td>
                <td>
                  <a href="javascript:void(0);">View Map</a>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <input
                    class="form-checkbox-input"
                    type="checkbox"
                    id="checkbox4"
                  />
                  <label
                    class="form-check-label"
                    for="checkbox4"
                    class="label-table"
                  ></label>
                </th>
                <td>Malayalam name</td>
                <td>
                  <input type="text" className="form-control" />
                </td>
                <td>
                  <a href="javascript:void(0);">View Map</a>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <input
                    class="form-checkbox-input"
                    type="checkbox"
                    id="checkbox5"
                  />
                  <label
                    class="form-check-label"
                    for="checkbox5"
                    class="label-table"
                  ></label>
                </th>
                <td>Malayalam name</td>
                <td>
                  <input type="text" className="form-control" />
                </td>
                <td>
                  <a href="javascript:void(0);">View Map</a>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <input
                    class="form-checkbox-input"
                    type="checkbox"
                    id="checkbox6"
                  />
                  <label
                    class="form-check-label"
                    for="checkbox6"
                    class="label-table"
                  ></label>
                </th>
                <td>Malayalam name</td>
                <td>
                  <input type="text" className="form-control" />
                </td>
                <td>
                  <a href="javascript:void(0);">View Map</a>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <input
                    class="form-checkbox-input"
                    type="checkbox"
                    id="checkbox7"
                  />
                  <label
                    class="form-check-label"
                    for="checkbox7"
                    class="label-table"
                  ></label>
                </th>
                <td>Malayalam name</td>
                <td>
                  <input type="text" className="form-control" />
                </td>
                <td>
                  <a href="javascript:void(0);">View Map</a>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <input
                    class="form-checkbox-input"
                    type="checkbox"
                    id="checkbox8"
                  />
                  <label
                    class="form-check-label"
                    for="checkbox8"
                    class="label-table"
                  ></label>
                </th>
                <td>Malayalam name</td>
                <td>
                  <input type="text" className="form-control" />
                </td>
                <td>
                  <a href="javascript:void(0);">View Map</a>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <input
                    class="form-checkbox-input"
                    type="checkbox"
                    id="checkbox9"
                  />
                  <label
                    class="form-check-label"
                    for="checkbox9"
                    class="label-table"
                  ></label>
                </th>
                <td>Malayalam name</td>
                <td>
                  <input type="text" className="form-control" />
                </td>
                <td>
                  <a href="javascript:void(0);">View Map</a>
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
