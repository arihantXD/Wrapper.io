import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";

const HomeLayout = () => {
  return (
    <>
      <Outlet />
    </>
  );
};
export default HomeLayout;
