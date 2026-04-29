import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./pages/Home";
import Login from "./pages/Login";

function App() {
  const router = createBrowserRouter([
    { path: "/", Component: Home },
    { path: "/login", Component: Login },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
