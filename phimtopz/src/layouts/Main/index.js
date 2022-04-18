import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import { Outlet } from "react-router-dom";
// history

const MainLayout = () => {
  const itemsPerPage = 8;

  return (
    <>
      <Header />
      <Navbar />
      <Outlet context={itemsPerPage} />
      <Footer />
    </>
  );
};

export default MainLayout;
