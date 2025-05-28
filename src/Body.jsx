import React from "react";
import NavBar from "./components/navbar";
import { Outlet } from "react-router-dom";
function Body(){
  return(
    <>
      <NavBar />
      {/* any children route of body will render in outlet */}
      <Outlet />
    </>
  );
};

export default Body;