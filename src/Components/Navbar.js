import React, { useEffect, useState } from "react";

export default function Navbar() {
  // State to check mobile view
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    window.innerWidth < 720 ? setIsMobile(true) : setIsMobile(false);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  });

  // Render Links
  const links = [
    "general",
    "business",
    "health",
    "science",
    "sports",
    "technology",
  ];

  const renderLinks = links.map((link) => (
    <li
      key={link}
      id={link}
      className={isMobile ? "nav-links" : " ul-padding nav-links"}
    >
      {link}
    </li>
  ));

  return (
    <div>
      <nav className="nav-bar">
        <div className="containerlg">
          <ul className="display-none-sm d-flex align-items-center justify-content-center">
            {renderLinks}
            <div className="ul-padding">
              <i id="search-query" className="fa-solid fa-magnifying-glass"></i>
            </div>
          </ul>
          <div className="nav-small d-md-none d-lg-none d-xl-none">
            <div className="hamburger-button dropdown">
              <i
                className="fa-solid fa-bars"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
              ></i>
              <ul
                className="dropdown-menu dropdown-menu-dark"
                aria-labelledby="dropdownMenuButton1"
              >
                {renderLinks}
              </ul>
            </div>
            <div className="ul-padding">
              <i
                id="search-query"
                className="fa-solid fa-magnifying-glass search-mobile"
              ></i>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
