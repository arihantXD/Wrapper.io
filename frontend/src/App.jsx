import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Help, HomeLayout, Landing, Login, Profile, Register } from "./Pages";

import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    // errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: "home",
        element: <Landing />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "help",
        element: <Help />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
