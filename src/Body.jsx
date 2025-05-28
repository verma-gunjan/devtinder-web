import React from "react";
import NavBar from "./components/navbar";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
function Body(){
  return(
    <>
      <NavBar />
      {/* any children route of body will render in outlet */}
      <Outlet />
      <Footer />
    </>
  );
};

export default Body;