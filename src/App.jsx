import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import RootLayout from "./layouts/rootLayout";
import Landing from "./pages/landing";
import AuthLayout from "./pages/auth/authLayout";
import LogIn from "./pages/auth/logIn";
import SignUp from "./pages/auth/signUp";
import DashboardLayout from "./pages/dashboard/layouts";

import PitchList from "./pages/pitchList";
import Overview from "./pages/dashboard/pages/overview";
import Pitches from "./pages/dashboard/pages/pitches";
import AddPitches from "./pages/dashboard/pages/addPitches";
import Analytics from "./pages/dashboard/pages/analytics";
import Profile from "./pages/dashboard/pages/profile";
import Settings from "./pages/dashboard/pages/settings";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      // {
      //   path: "about",
      //   element: <About/>,
      // },
      {
        path: "pitch-list",
        element: <PitchList/>,
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
    children: [
      {
        index: true,
        element: <Overview/>
      },
      {
        path : "pitches",
        element : <Pitches/>
      },
      {
        path : "pitches/add",
        element : <AddPitches/>
      },
      {
        path : "analytics",
        element : <Analytics/>
      },
      {
        path : "profile",
        element : <Profile/>
      },
      {
        path : "settings",
        element : <Settings/>
      },
    ]
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
