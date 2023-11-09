import React, { useContext, useEffect, useState } from "react";
import { NewsContext } from "../Contexts/NewsContext";

export default function Navbar() {
  // State to check mobile view
  const [isMobile, setIsMobile] = useState(false);

  // Context
  const { api, clientKey } = useContext(NewsContext);

  const handleResize = () => {
    window.innerWidth < 720 ? setIsMobile(true) : setIsMobile(false);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  });

  const handleFetchNews = (category) => {
    fetch(`${api}${clientKey}&categories=${category}`)
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

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
      onClick={() => {
        handleFetchNews(link);
      }}
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
