import React, { useContext } from "react";
import { NewsContext } from "../Contexts/NewsContext";

export default function Navbar() {
  // Context
  const { api, clientKey, setNewsData } = useContext(NewsContext);

  const handleFetchNews = (category) => {
    fetch(`${api}${clientKey}&categories=${category}`)
      .then((res) => res.json())
      .then((data) => setNewsData(data.data));
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
      className="ul-padding nav-links"
      onClick={() => {
        handleFetchNews(link);
      }}
    >
      {link}
    </li>
  ));

  const renderSearch = (
    <div className="ul-padding">
      <i
        id="search-query"
        className="fa-solid fa-magnifying-glass search-mobile"
        data-bs-toggle="modal"
        data-bs-target="#myModal"
      ></i>
    </div>
  );

  return (
    <div>
      <nav className="nav-bar">
        <div className="containerlg">
          <ul className="display-none-sm d-flex align-items-center justify-content-center">
            {renderLinks}
            {renderSearch}
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
            {renderSearch}
          </div>
        </div>
      </nav>
    </div>
  );
}
