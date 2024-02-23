import React from "react";
function Navbar() {
  return (
    <>
      <div
        className="bg-pink px-4 py-4 flex justify-between items-center"
        style={{ fontFamily: "Inter" }}
      >
        <div className="text-xl text-slate">Wrappers.IO</div>
        <div className="flex gap-4">
          <button className="bg-white rounded-full py-2 px-5 outline-slate hover:outline hover:outline-slate">
            Login
          </button>
          <button className="bg-white rounded-full py-2 px-5 hover:outline hover:outline-slate">
            Register
          </button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
