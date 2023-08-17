import React from "react";
import Navigation from "../components/Nav/Navigation";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <>
      <Navigation />
      <Outlet />
    </>
  );
};

export default RootLayout;
