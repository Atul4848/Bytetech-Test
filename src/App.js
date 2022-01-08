import React from "react";
import { Route, Routes } from "react-router-dom";

//import { Spin } from "antd";
//import "./style/main.css";
import "antd/dist/antd.css";
import HomePage from "./routes/HomePage";
import MainAppLayout from "./container/MainAppLayout";

const App = () => {
  return (
    <Routes>
      <Route element={<MainAppLayout />}>
        <Route exact path="/" element={<HomePage />} />
      </Route>
    </Routes>
  );
};

export default App;
