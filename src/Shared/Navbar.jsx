import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between py-5">
      <div>
        <h1 className="text-[#16F2B3] text-3xl font-bold">SHARIF</h1>
      </div>
      <div>
        <ul className="uppercase text-white flex gap-5 mt-2">
          <li className="cursor-pointer">about</li>
          <li className="cursor-pointer">Skills</li>
          <li className="cursor-pointer">Education</li>
          <li className="cursor-pointer">Project</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
