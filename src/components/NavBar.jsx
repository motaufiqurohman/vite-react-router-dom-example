import { NavLink, useNavigate } from "react-router-dom";

import useDarkMode from "../hooks/useDarkMode";

import logoBlack from "../assets/react-router-logo-black.png";
import logoWhite from "../assets/react-router-logo-white.png";

const LOGO_THEME_MAP = {
  light: logoBlack,
  dark: logoWhite,
};

const NavBar = () => {
  const isDarkMode = useDarkMode();

  const navigate = useNavigate();

  return (
    <div className="navbar">
      <img
        onClick={() => navigate("/")}
        src={isDarkMode ? LOGO_THEME_MAP.dark : LOGO_THEME_MAP.light}
        alt="react-router.png"
      />
      <ul>
        <NavLink to="/">
          <li>Home</li>
        </NavLink>
        <NavLink to="/products">
          <li>Products</li>
        </NavLink>
        <NavLink to="/about">
          <li>About</li>
        </NavLink>
        <NavLink to="/contact">
          <li>Contact</li>
        </NavLink>
        <NavLink to="/jobs">
          <li>Jobs</li>
        </NavLink>
      </ul>
      <button onClick={() => navigate("/contact", { replace: true })}>
        Get Started
      </button>
    </div>
  );
};

export default NavBar;
