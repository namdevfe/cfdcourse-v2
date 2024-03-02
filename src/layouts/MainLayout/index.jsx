import AuthModal from "@/components/AuthModal";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import PageLoading from "@/components/PageLoading";
import React from "react";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <PageLoading />
      <Header />
      <Navbar />
      <div className="overlay"></div>
      {/* Pages */}
      <Outlet />
      <Footer />
      <AuthModal />
    </>
  );
};

export default MainLayout;
