import React from "react";
import Footer from "@modules/layout/templates/footer";
import Nav from "@modules/layout/templates/nav";

const Layout = ({ children }) => {
  return (
    <div>
      <Nav />
      <main className="relative">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
