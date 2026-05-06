import { useSelector } from "react-redux";
import { Navigate } from "react-router";
import { Outlet } from "react-router";
import type { RootState } from "../redux/store";

export default function ProtectedRoute() {
  const reduxUser = useSelector(
    (globalStore: RootState) => globalStore.user.value,
  );

  if (reduxUser) {
    return <Outlet />;
  }
  
  return <Navigate to="/login" />;
}
