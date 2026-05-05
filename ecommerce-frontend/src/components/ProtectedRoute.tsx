import React from "react";
import { Navigate } from "react-router";
import { Outlet } from "react-router";

export default function ProtectedRoute() {
    // useSELECT or redux user 
  return <Navigate to="/login" />;
  return <Outlet />;
  return <div className="text-5xl ">ProtectedRoute</div>;
}
