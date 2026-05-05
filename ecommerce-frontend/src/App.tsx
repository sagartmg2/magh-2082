import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./pages/Home";
import Login from "./pages/Login";
import RootLayout from "./components/layout/RootLayout";
import SignUp from "./pages/Signup";
import { ToastContainer } from "react-toastify";
import { useContext, useState } from "react";
import Products from "./pages/Products";
import Orders from "./pages/Orders";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  // useContext // for small application  // causes extra-renders ;
  // statement management: redux  zutstand;
  // proprs-drilling;

  const [user, setUser] = useState(null);
  const [counter, setCounter] = useState(null);

  const router = createBrowserRouter([
    {
      path: "",
      // Component: RootLayout,
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

  return (
    <>
      <ToastContainer />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
