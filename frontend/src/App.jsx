import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  Help,
  HomeLayout,
  Landing,
  Login,
  Profile,
  Register,
  Product,
} from "./Pages";

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
        path: "product",
        element: <Product />,
      },
    ],
  },
]);

import { createContext, useState } from "react";
export const myContext = createContext();
function App() {
  const [user, setUser] = useState();
  const [emotion, setEmotion] = useState();
  return (
    <myContext.Provider value={{ user, setUser, emotion, setEmotion }}>
      <RouterProvider router={router} />
    </myContext.Provider>
  );
}

export default App;
