import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";

const Roots = () => {
  return (
    <div className="">
      <div className="max-w-screen-xl mx-auto">
        <Navbar />
        <div>
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Roots;
