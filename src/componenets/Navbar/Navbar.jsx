import React, { useState } from 'react';
import { assets } from "../../assets/assets";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menu, setMenu] = useState("home");

  return (
    <div className="py-5 px-0 flex justify-between items-center">
      <Link to="/">
        <img src={assets.logo} alt="Logo" className="w-[150px]" />
      </Link>
      <ul className="flex list-none gap-[20px] text-[#49557e] text-[18px] cursor-pointer box-content h-6">
        <li
          onClick={() => setMenu("home")}
          className={`${menu === "home" ? "pb-[2px] border-b-[2px] border-[#49557e]" : ""}`}
        >
          <Link to="/">home</Link>
        </li>
        <li
          onClick={() => setMenu("menu")}
          className={`${menu === "menu" ? "pb-[2px] border-b-[2px] border-[#49557e]" : ""}`}
        >
          <Link to="/menu">menu</Link>
        </li>
        <li
          onClick={() => setMenu("mobile-app")}
          className={`${menu === "mobile-app" ? "pb-[2px] border-b-[2px] border-[#49557e]" : ""}`}
        >
          <Link to="/mobile-app">mobile-app</Link>
        </li>
        <li
          onClick={() => setMenu("contact-us")}
          className={`${menu === "contact-us" ? "pb-[2px] border-b-[2px] border-[#49557e]" : ""}`}
        >
          <Link to="/contact-us">contact us</Link>
        </li>
      </ul>
      <div className="flex items-center gap-[40px]">
        <img src={assets.search_icon} alt="Search icon" />
        <div className="relative">
          <Link to="/cart">
            <img src={assets.basket_icon} alt="Basket icon" />
            <div className="absolute min-h-[10px] min-w-[10px] bg-orange-500 rounded-[5px] top-[-8px] right-[-8px]"></div>
          </Link>
        </div>
        <button className="bg-transparent text-[16px] text-[#49577e] border-solid border-[1px] border-orange-500 pt-[10px] pb-[10px] pl-[30px] pr-[30px] rounded-[50px] cursor-pointer hover:bg-[#fff2f2] transition-all duration-300">
          Sign In
        </button>
      </div>
    </div>
  );
};

export default Navbar;

