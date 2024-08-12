import "./Navbar.css";
import { FaCartShopping, FaFilter } from "react-icons/fa6";
import { IoPersonCircleSharp } from "react-icons/io5";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ onSearch, onFilter, cartItems }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    onSearch(e.target.value);
  };

  const handleItemClick = (link) => {
    const offcanvas = document.getElementById("offcanvasNavbar");
    const offcanvasInstance = bootstrap.Offcanvas.getInstance(offcanvas);
    offcanvasInstance.hide();
    console.log("Navigate to:", link);
  };

  return (
    <nav>
      <div className="logo">
        <h3>
          <Link to={"/"} className="routes">
            FlipZon
          </Link>
        </h3>
      </div>
      <div className="searchbar">
        <input
          type="search"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>
      <div className="nav-links d-none d-md-flex">
        <ul>
          <li>
            <FaFilter onClick={onFilter} />
          </li>
          <li>
            <Link to="/cart" className="routes">
              <div className="position-relative">
                <FaCartShopping size={24} />
                {cartItems.length > 0 && (
                  <span
                    className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                    style={{
                      fontSize: "0.75rem",
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    {cartItems.length}
                  </span>
                )}
              </div>
            </Link>
          </li>

          <li>
            <IoPersonCircleSharp />
          </li>
        </ul>
      </div>
      <button
        className="navbar-toggler d-block d-md-none"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasNavbar"
        aria-controls="offcanvasNavbar"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" style={{ fontSize: "3.2vh" }}>
          &#9776;
        </span>
      </button>

      <div
        className="offcanvas offcanvas-end"
        tabIndex="-1"
        id="offcanvasNavbar"
        aria-labelledby="offcanvasNavbarLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
            Menu
          </h5>
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body nav-links">
          <ul>
            <li onClick={() => handleItemClick("/filter")}>
              <FaFilter onClick={onFilter} size={24} />
            </li>
            <li onClick={() => handleItemClick("/cart")}>
              <Link to={"/cart"} className="routes text-dark">
                <div className="position-relative">
                  <FaCartShopping size={24} />
                  {cartItems.length > 0 && (
                    <span
                      className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                      style={{
                        fontSize: "0.75rem",
                        transform: "translate(-50%, -50%)",
                      }}
                    >
                      {cartItems.length}
                    </span>
                  )}
                </div>
              </Link>
            </li>
            <li onClick={() => handleItemClick("/profile")}>
              <IoPersonCircleSharp size={24} />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
