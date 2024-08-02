import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import RootLayout from "./layouts/rootLayout";
import Landing from "./pages/landing";
import AuthLayout from "./pages/auth/authLayout";
import LogIn from "./pages/auth/logIn";
import SignUp from "./pages/auth/signUp";
import DashboardLayout from "./pages/dashboard/layouts";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <Landing />,
        },
      ],
    },

    
      
        {
          path: "login",
          element: <LogIn />,
        },
        {
          path: "signup",
          element: <SignUp />,
        },
      
    

    {
      path: "/dashboard",
      element: <DashboardLayout />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
