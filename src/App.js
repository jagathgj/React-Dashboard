import React from "react";
import {
  UserPage,
  LoginPage,
  AdminPage,
  AdminList,
  AdminPlaces,
} from "./domains";
import { Header } from "./components";

const App = () => {
  return (
    <div className="main-container container-fluid">
      <div className="row flex-column h-100 flex-nowrap">
        <Header></Header>
        <UserPage></UserPage>

        {/* Admin related pages below*/}

        {/* <LoginPage></LoginPage> */}
        {/* <AdminPage></AdminPage> */}
        {/* <AdminList></AdminList> */}
        {/* <AdminPlaces></AdminPlaces> */}

        {/* Admin related pages above*/}
      </div>
    </div>
  );
};

export default App;
