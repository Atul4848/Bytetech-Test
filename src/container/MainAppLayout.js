import React from "react";
import { Layout } from "antd";
import Headers from "../Component/Header/Header";
import Footers from "../Component/footer/Footer";
import { Outlet } from "react-router-dom";
import Contact from "../Component/Header/Contact";
//import App from "../routes/index";

const MainAppLayout = ({ element }) => {
  const { Header, Content, Footer, Sider } = Layout;
  return (
    <Layout>
      <Contact />
      <Headers />
      <Outlet />
      <Footers />
    </Layout>
  );
};

export default MainAppLayout;
