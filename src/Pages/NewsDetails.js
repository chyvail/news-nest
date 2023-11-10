import React, { useContext } from "react";
import { NewsContext } from "../Contexts/NewsContext";
import { useParams, Link, useNavigate } from "react-router-dom";

export default function NewsDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { newsData, defaultImage } = useContext(NewsContext);

  // Find the specific news item based on the id parameter
  const newsItem = newsData[parseInt(id, 10)];
  // Handle the case where the news item is not found
  if (!newsItem) {
    return <div>News not found</div>;
  }

  return (
    <>
      <div
        className="news-hero-section mb-3"
        style={{
          backgroundImage: `url(${
            newsItem.image === null ? defaultImage : newsItem.image
          })`,
        }}
      >
        <h5>{newsItem.title}</h5>
      </div>
      <div className="containerlg">
        <Link onClick={() => navigate(-1)}>Back</Link>
        <div className="mt-3 news-details">
          <p>{newsItem.description}</p>
          <div className="news-image mt-3">
            <img
              src={newsItem.image === null ? defaultImage : newsItem.image}
              alt={newsItem.author}
            />
          </div>
          <div className="icons mt-3">
            <div id="like" className="like">
              <i className="fa-regular fa-clock"></i>
              <p className="count">{newsItem.published_at.slice(0, 10)}</p>
            </div>
            <div className="bookmark">
              <i className="fa-regular fa-user"></i>
              <p className="count">~ {newsItem.author}</p>
            </div>
          </div>
          <div className="text-center">
            <a
              type="button"
              class="btn original-link"
              href={newsItem.url}
              target="_blank"
              rel="noreferrer"
            >
              Go to Original Link
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
