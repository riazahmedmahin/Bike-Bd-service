import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Nav from "./Nav";

const Main = () => {
  return (
    <div className="max-w-[1224px] mx-auto">
      <Nav></Nav>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
