import logo from "../assets/logo.png";

const NavBar = () => {
  return (
    <div>
      <img src={logo} alt="logo.png" />
      <ul>
        <li>Home</li>
        <li>Products</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <button>Get Started</button>
    </div>
  );
};

export default NavBar;
