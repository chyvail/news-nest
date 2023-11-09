import React, { useContext } from "react";
import { NewsContext } from "../Contexts/NewsContext";

export default function Card() {
  const { newsData, defaultImage, api } = useContext(NewsContext);

  console.log("this is the api, ",  api)
  return (
    <>
      {newsData.map((news) => (
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
              <h6>{news.title}</h6>
              <p className="card-text">{news.description}</p>
              <div className="card-author">
                <p className="card-text mt-2">
                  {news.published_at.slice(0, 10)}
                </p>
                <p className="card-text mt-2">~ {news.author}</p>
              </div>
            </div>
            <hr />
            <div className="icons">
              <div id="like" className="like">
                <i id="like-icon" className="fa-regular fa-thumbs-up"></i>
                <p className="count">0</p>
              </div>
              <div className="bookmark">
                <i id="like-icon" className="fa-regular fa-bookmark"></i>
                <p className="count">0</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
