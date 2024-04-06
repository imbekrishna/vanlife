import React from "react";
import { Outlet } from "react-router-dom";
const Header = React.lazy(() => import("./Header"));
const Footer = React.lazy(() => import("./Footer"));

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      {/* TOOD: Fix horizontal padding on all pages */}
      <div className="flex flex-1 bg-primary h-full justify-center">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};
export default Layout;
