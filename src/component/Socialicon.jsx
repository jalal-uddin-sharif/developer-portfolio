import React from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaFacebook, FaGithub } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";

const Socialicon = () => {
  return (
    <div>
      <div className="flex gap-3 mt-6">
        <a href="">
          <BsGithub className="text-[#ff00c3] hover:text-[#16ff92] hover:duration-700 "  />
        </a>
        <a href="">
          <BsLinkedin className="text-[#ff00c3] hover:text-[#16ff92] hover:duration-700 " />
        </a>
        <a href="">
          <GrInstagram className="text-[#ff00c3] hover:text-[#16ff92] hover:duration-700 " />
        </a>
        <a href="">
          <FaFacebook className="text-[#ff00c3] hover:text-[#16ff92] hover:duration-700 " />
        </a>
      </div>
    </div>
  );
};

export default Socialicon;
