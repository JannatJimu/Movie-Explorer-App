import React from "react";
import { Outlet } from "react-router";
import Footer from "../component/Footer/Footer";
import Header from "../component/Header/header";

const HomeLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-white">
      <Header />

      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default HomeLayout;