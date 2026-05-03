import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router";

export default function RootLayout({ user, setUser }) {
  return (
    <div>
      <Header user={user} setUser={setUser} />
      <Outlet />
      <Footer />
    </div>
  );
}
