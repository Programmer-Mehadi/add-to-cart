import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/Navbar";

const Main = () => {
  return (
    <section>
      <Navbar></Navbar>
      <div>
        <Outlet></Outlet>
      </div>
    </section>
  );
};

export default Main;
