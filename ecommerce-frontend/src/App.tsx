import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./pages/Home";
import Login from "./pages/Login";
import RootLayout from "./components/layout/RootLayout";
import SignUp from "./pages/Signup";

function App() {
  const router = createBrowserRouter([
    {
      path: "",
      Component: RootLayout,
      children: [
        { path: "/", Component: Home },
        { path: "/login", Component: Login },
        { path: "/signup", Component: SignUp },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
