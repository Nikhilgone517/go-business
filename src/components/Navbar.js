import React from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import "./navbar.css";
const Navbar = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    Cookies.remove("jwt_token");
    navigate("/login", { replace: true });
  };
  return (
    <nav className="navbar">
      <h1 className="go-heading">Go Business</h1>
      <div>
        <button className="try-btn">Try for free</button>
        <button className="logout" onClick={handleLogout}>
          Log out
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
