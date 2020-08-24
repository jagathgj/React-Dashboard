import React, { useState, useEffect } from "react";
import Routes from "./routers";
import axios from "axios";

const App = () => {
  // const url =
  //   "https://covid-kerala.herokuapp.com/v1/confirmedList?search=kottayam";

  // const [data, setData] = useState({});

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const result = await axios(url);
  //     setData(result.data);
  //   };

  //   fetchData();
  // }, []);

  // console.log(data);

  return (
    <Routes />
  );
};

export default App;
