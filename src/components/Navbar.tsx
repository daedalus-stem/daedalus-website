import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  return (
    <div
      id="navbar"
      className="w3-bar w3-white w3-padding w3-border-bottom w3-large"
      style={{ fontFamily: "Raleway, sans-serif" }}
    >
      {/* Logo/Brand Name */}
      <Link
        to="/home"
        className="w3-bar-item w3-button w3-hover-none"
        style={{ fontWeight: "bold" }}
      >
        <img
          src="logo/Daedalus-logo-full2.svg"
          width="200"
          height="25"
          alt="Daedalus Logo"
        />
      </Link>

      {/* Nav Links */}
      {["Home", "Team", "Car", "Sponsors", "Blog", "Games", "Contact"].map((text) => {
        const path = `/${text.toLowerCase()}`;
        const isActive =
          location.pathname === path || // matches exact route
          (text === "Home" && location.pathname === "/"); // handle / as Home

        return (
          <Link
            key={text}
            to={path}
            className={`w3-bar-item w3-button w3-hide-small w3-hover-none ${
              isActive ? "w3-border-bottom w3-border-black" : ""
            }`}
            style={{
              fontWeight: isActive ? "bold" : "normal",
              borderBottomWidth: isActive ? "2px" : "0",
              borderBottomStyle: "solid",
              borderBottomColor: isActive ? "black" : "transparent",
            }}
          >
            {text}
          </Link>
        );
      })}
    </div>
  );
};

export default Navbar;
