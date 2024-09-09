import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/header/Header";
import Container from '@mui/material/Container';

const MainLayout = () => {
  return (
    <div className="container">
      {/* header */}
      <Header />

      <Outlet />
    </div>
  );
};

export default MainLayout;
