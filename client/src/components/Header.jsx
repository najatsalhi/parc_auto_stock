import React from "react";
import { BsArrowReturnLeft } from "react-icons/bs";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="flex justify-between items-center p-5">
      <div>
        <h1 className="text-m">Welcome !</h1>
        <p className="text-xl font-semibold"></p>
      </div>
      <div className="flex items-center space-x-5"></div>
      <div className="flex items-center space-x-5">
        <Link
          to="/dash"
          className={`link-with-icon flex items-center space-x-2 text-m font-medium py-2 px-4 rounded-full bg-blue-500 text-white hover:bg-blue-400  `}
        >
          <BsArrowReturnLeft/> <span>Return</span>{" "}
        </Link>
      </div>
    </div>
  );
};

export default Header;
