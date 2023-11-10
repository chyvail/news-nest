import React, { useContext } from "react";
import { NewsContext } from "../Contexts/NewsContext";
import { Link } from "react-router-dom";

export default function Card() {
  const { newsData, defaultImage } = useContext(NewsContext);
  return (
    <>
      {newsData.map((news, index) => (
        <div
          key={news.title}
          className="col-sm-3 d-flex flex-column custom-md-size"
        >
          <div className="card flex-fill">
            <img
              className="card-img-top"
              src={news.image === null ? defaultImage : news.image}
              alt={news.author}
            />
            <div className="card-body">
              <Link
                to={{ pathname: `/news/${index}`, state: { newsItem: news } }}
              >
                <h6>{news.title}</h6>
              </Link>
              <p className="card-text">{news.description}</p>
              <div className="card-author">
                <p className="card-text mt-2">
                  {news.published_at.slice(0, 10)}
                </p>
                <p className="card-text mt-2">~ {news.author}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
