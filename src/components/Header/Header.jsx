import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/Logo.svg";
import "./Header";

const Header = () => {
  return (
    <nav className="bg-slate-900 h-20 flex justify-between items-center px-36 sticky">
      <img src={logo} alt="" />
      <div className="text-white space-x-5">
        <Link to="/">Shop</Link>
        <Link to="/orders">Orders </Link>
        <Link to="/inventory">Inventory</Link>
        <Link to="/login">Login</Link>
      </div>
    </nav>
  );
};

export default Header;
