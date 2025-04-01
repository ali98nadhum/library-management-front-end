import React from "react";
import { IoBookOutline } from "react-icons/io5";
import { Link } from "react-router";
import { IoIosAddCircleOutline } from "react-icons/io";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { AiOutlineLogout } from "react-icons/ai";
import "./sideBar.css";



const SideBar = () => {
  return (
    <div className="h-screen w-56 p-5">
      {/* user avatar */}
      <div className="flex justify-center flex-col items-center">
        <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-orange-700 text-white text-3xl font-extrabold shadow-xl transition duration-300 hover:scale-110 border-2 border-white">
          A
        </div>
        <p className="mt-4 text-white">alinadhum_</p>
      </div>

      {/* sidebar lest */}
      <div className="mt-10  p-5 w-ful">
        <ul>
          <li>
            <Link to={"/"} className="links-sidbar">
              <IoBookOutline />
              <p>Books</p>
            </Link>
          </li>
          <li>
            <Link to={''} className="links-sidbar">
              <IoIosAddCircleOutline />
              <p>Add book</p>
            </Link>
          </li>
          <li>
            <Link to={''} className="links-sidbar">
              <MdOutlineShoppingCart />
              <p>Order</p>
            </Link>
          </li>
          <li>
            <Link to={''} className="links-sidbar">
              <IoIosAddCircleOutline />
              <p>Add order</p>
            </Link>
          </li>
          <li>
            <Link className="links-sidbar">
              <IoSettingsOutline />
              <p>Settings</p>
            </Link>
          </li>
        </ul>
        {/* Logout btn */}
        <Link to={''} className="flex items-center gap-8 text-white p-3 mt-32 bg-red-700 transition duration-300 rounded-lg hover:bg-red-400">
          <AiOutlineLogout />
          <p>Logout</p>
        </Link>
      </div>
    </div>
  );
};

export default SideBar;
