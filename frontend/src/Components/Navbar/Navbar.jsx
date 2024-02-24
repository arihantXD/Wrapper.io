import React, { useContext, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { myContext } from "../../App";
function Navbar() {
  const location = useLocation();
  const { user } = useContext(myContext);
  const navigate = useNavigate();
  useEffect(() => {}, [user]);
  return (
    <>
      <div
        className="bg-darkThemeSecondary border-b-2 sticky border-primary shadow-primary shadow-md px-4 py-4 grid grid-cols-5 items-center"
        style={{ fontFamily: "Poppins" }}
      >
        <Link
          to="/"
          className="text-2xl text-white transition-all ease-in-out duration-400 hover:transition-all hover:ease-in-out hover:duration-400 hover:text-primary hover:cursor-pointer flex items-baseline"
        >
          <span>Wrappers.</span>
          <span className="inline-block">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-[24px] h-[24px] relative top-[1px] right-[3px] text-primary"
            >
              <path d="M8.25 4.5a3.75 3.75 0 1 1 7.5 0v8.25a3.75 3.75 0 1 1-7.5 0V4.5Z" />
              <path d="M6 10.5a.75.75 0 0 1 .75.75v1.5a5.25 5.25 0 1 0 10.5 0v-1.5a.75.75 0 0 1 1.5 0v1.5a6.751 6.751 0 0 1-6 6.709v2.291h3a.75.75 0 0 1 0 1.5h-7.5a.75.75 0 0 1 0-1.5h3v-2.291a6.751 6.751 0 0 1-6-6.709v-1.5A.75.75 0 0 1 6 10.5Z" />
            </svg>
          </span>
          <span className="relative text-[32px] top-[1px] right-[6px] font-extralight text-primary">
            O
          </span>
        </Link>
        <div className="col-span-3 justify-self-end">
          <ul className="flex gap-12 text-lg">
            <Link
              to="/"
              className={
                location.pathname === "/"
                  ? "flex gap-1 text-primary relative after:bg-primary after:absolute after:h-1 after:bottom-0 after:top-[26px] after:left-1 after:rounded-lg after:w-full"
                  : "text-white transition-all ease-in-out relative duration-450 hover:text-primary flex gap-1 hover:transition-all hover:ease-in-out hover:duration-450 after:bg-primary after:absolute after:h-1 after:w-0 after:bottom-0 after:top-[26px] after:left-1 after:rounded-lg hover:after:w-full after:transition-all after:duration-500"
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
                <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
              </svg>
              <span>Home</span>
            </Link>
            {user && (
              <Link
                to="/product"
                className={
                  location.pathname === "/product"
                    ? "flex gap-1 text-primary relative after:bg-primary after:absolute after:h-1 after:bottom-0 after:top-[26px] after:left-1 after:rounded-lg after:w-full"
                    : "text-white transition-all ease-in-out relative duration-450 hover:text-primary flex gap-1 hover:transition-all hover:ease-in-out hover:duration-450 after:bg-primary after:absolute after:h-1 after:w-0 after:bottom-0 after:top-[26px] after:left-1 after:rounded-lg hover:after:w-full after:transition-all after:duration-500"
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path d="M8.25 4.5a3.75 3.75 0 1 1 7.5 0v8.25a3.75 3.75 0 1 1-7.5 0V4.5Z" />
                  <path d="M6 10.5a.75.75 0 0 1 .75.75v1.5a5.25 5.25 0 1 0 10.5 0v-1.5a.75.75 0 0 1 1.5 0v1.5a6.751 6.751 0 0 1-6 6.709v2.291h3a.75.75 0 0 1 0 1.5h-7.5a.75.75 0 0 1 0-1.5h3v-2.291a6.751 6.751 0 0 1-6-6.709v-1.5A.75.75 0 0 1 6 10.5Z" />
                </svg>
                <span>Product</span>
              </Link>
            )}
          </ul>
        </div>
        <div
          className="flex gap-4 justify-self-end"
          style={{ fontFamily: "Poppins" }}
        >
          {!user && (
            <>
              <Link to="/login">
                <button className="bg-white font-semibold text-darkThemeSecondary rounded-full py-2 px-6 outline-slate transition-all ease-in-out duration-500 hover:transition-all hover:ease-in-out hover:duration-500 hover:outline hover:outline-primary hover:bg-darkThemeSecondary hover:text-white">
                  Login
                </button>
              </Link>
              <Link to="/register">
                <button className="bg-white font-semibold text-darkThemeSecondary rounded-full py-2 px-6 transition-all ease-in-out duration-400 hover:transition-all hover:ease-in-out hover:duration-400 hover:outline hover:outline-primary hover:bg-darkThemeSecondary hover:text-white">
                  Register
                </button>
              </Link>
            </>
          )}
          {user && (
            <Link to="/profile">
              <button className="bg-white font-semibold text-darkThemeSecondary rounded-full py-2 px-6 transition-all ease-in-out duration-400 hover:transition-all hover:ease-in-out hover:duration-400 hover:outline hover:outline-primary hover:bg-darkThemeSecondary hover:text-white">
                {user.name}
              </button>
            </Link>
          )}
        </div>
      </div>
    </>
  );
}

export default Navbar;
