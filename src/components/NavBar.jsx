import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import logoDark from "../assets/logo-dark.png";
import logoLight from "../assets/logo-light.png";

const NavBar = () => {
  // Initialize `isDarkMode` state based on the user's current system theme preference
  const [isDarkMode, setIsDarkMode] = useState(
    window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
  );

  useEffect(() => {
    // Create a MediaQueryList object to track changes to the user's color scheme preference
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    // Event handler that updates the `isDarkMode` state when the system theme changes
    const handleChange = (e) => {
      setIsDarkMode(e.matches); // true if dark mode, false if light mode
    };

    // Attach the listener to respond to theme changes in real time
    mediaQuery.addEventListener("change", handleChange);

    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      // This prevents memory leaks and ensures the event handler
      // does not run after the component is no longer mounted.
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  const navigate = useNavigate();

  return (
    <div className="navbar">
      <img
        onClick={() => navigate("/")}
        src={isDarkMode ? logoLight : logoDark}
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
