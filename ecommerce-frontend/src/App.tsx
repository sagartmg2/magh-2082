import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./pages/Home";
import Login from "./pages/Login";
import RootLayout from "./components/layout/RootLayout";
import SignUp from "./pages/Signup";
import { ToastContainer } from "react-toastify";
import { useContext, useEffect, useState } from "react";
import Products from "./pages/Products";
import Orders from "./pages/Orders";
import ProtectedRoute from "./components/ProtectedRoute";
import axios from "axios";
import { login } from "./redux/features/userSlice";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "./redux/store";

function App() {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const reduxUser = useSelector(
    (globalStore: RootState) => globalStore.user.value,
  );
  // useContext // for small application  // causes extra-renders ;
  // statement management: redux  zutstand;
  // proprs-drilling;

  const dispatch = useDispatch();

  useEffect(() => {
    let token = localStorage.getItem("token");
    if (token) {
      axios
        .get("http://localhost:4000/api/auth/me", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          console.log(res);
          dispatch(login(res.data)); // async
          // setIsLoading(false);
        })
        .catch((err) => {
          setIsLoading(false);
        });
    } else {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    if (reduxUser) {
      setIsLoading(false);
    }
  }, [reduxUser]);

  const router = createBrowserRouter([
    {
      path: "",
      element: <RootLayout user={user} setUser={setUser} />,
      children: [
        { path: "/", Component: Home },
        { path: "/products", Component: Products },
        {
          path: "",
          Component: ProtectedRoute,
          children: [{ path: "/orders", Component: Orders }],
        },
        {
          path: "/login",
          //  Component: Login,
          element: <Login setUser={setUser} />,
        },
        { path: "/signup", Component: SignUp },
      ],
    },
  ]);

  console.log("APP -RENDER");
  return (
    <>
      {isLoading ? (
        <div className="h-screen flex justify-center items-center">
          is loading...
        </div>
      ) : (
        <>
          <ToastContainer />
          <RouterProvider router={router} />
        </>
      )}
    </>
  );
}

export default App;
