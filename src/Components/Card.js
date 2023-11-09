import React, { useContext } from "react";
import { NewsContext } from "../Contexts/NewsContext";

export default function Card() {
  const { newsData } = useContext(NewsContext);
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
              src={
                news.image === null
                  ? "https://img.freepik.com/free-photo/top-view-old-french-newspaper-pieces_23-2149318857.jpg?w=1800&t=st=1697118921~exp=1697119521~hmac=a7cbfebd6578b839daf35fd4850eec18106aa1152927e8f33305175ef357cdaf"
                  : news.image
              }
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
