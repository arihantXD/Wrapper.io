import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import { useContext, useEffect } from "react";
import { myContext } from "../App";

const HomeLayout = () => {
  const { user, setUser } = useContext(myContext);

  useEffect(() => {
    setUser(() => JSON.parse(localStorage.getItem("localUser")));
  }, []);
  return (
    <>
      <Outlet />
    </>
  );
};
export default HomeLayout;
