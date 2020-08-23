import React from "react";
import {
  UserPage,
  LoginPage,
  AdminPage,
  AdminList,
  AdminPlaces,
} from "./domains";
import { Header } from "./components";
import Routes, {history} from './routers';

const App = () => {
  return (
   <>
  <Routes />
   </>
  );
};

export default App;
