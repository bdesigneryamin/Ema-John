import React from "react";
import logo from "../../assets/Logo.svg";
import "./Header";

const Header = () => {
  return (
    <nav className="bg-slate-900 h-20 flex justify-between items-center px-24 ">
      <img src={logo} alt="" />
      <div className="text-white gap-3">
        <a href="/Order">Order</a>
        <a href="/Order Review">Order Review</a>
        <a href="/Manage Inventory">Manage Inventory</a>
        <a href="/Login">Login</a>
      </div>
    </nav>
  );
};

export default Header;
