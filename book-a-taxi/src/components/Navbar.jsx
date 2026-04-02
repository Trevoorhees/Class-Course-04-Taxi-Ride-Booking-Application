import { NavLink } from "react-router";

function Navbar() {
  const getNavClass = ({ isActive }) =>
    isActive ? "nav-link active" : "nav-link";

  return (
    <header className="navbar">
      <div className="brand-block">
        <h1 className="brand-title">Book_A_Taxi</h1>
        <p className="brand-subtitle">City rides made simple</p>
      </div>

      <nav className="nav-links">
        <NavLink to="/" end className={getNavClass}>
          Home
        </NavLink>

        <NavLink to="/about" className={getNavClass}>
          About
        </NavLink>

        <NavLink to="/services" className={getNavClass}>
          Services
        </NavLink>

        <NavLink to="/contact" className={getNavClass}>
          Contact
        </NavLink>

        <NavLink to="/booking" className={getNavClass}>
          Book a Ride
        </NavLink>
      </nav>
    </header>
  );
}

export default Navbar;
