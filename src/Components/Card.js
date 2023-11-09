import React, { useContext } from "react";
import { NewsContext } from "../Contexts/NewsContext";

export default function Card() {
  const { newsData } = useContext(NewsContext);
  return (
    <>
      {newsData.map((news) => (
        <div class="col-sm-3 d-flex flex-column custom-md-size">
          <div class="card flex-fill">
            <img
              class="card-img-top"
              src={
                news.image === null
                  ? "https://img.freepik.com/free-photo/top-view-old-french-newspaper-pieces_23-2149318857.jpg?w=1800&t=st=1697118921~exp=1697119521~hmac=a7cbfebd6578b839daf35fd4850eec18106aa1152927e8f33305175ef357cdaf"
                  : news.image
              }
              alt={news.author}
            />
            <div class="card-body">
              <h6>{news.title}</h6>
              <p class="card-text">{news.description}</p>
              <div class="card-author">
                <p class="card-text mt-2">{news.published_at.slice(0, 10)}</p>
                <p class="card-text mt-2">~ {news.author}</p>
              </div>
            </div>
            <hr />
            <div class="icons">
              <div id="like" class="like">
                <i id="like-icon" class="fa-regular fa-thumbs-up"></i>
                <p class="count">0</p>
              </div>
              <div class="bookmark">
                <i id="like-icon" class="fa-regular fa-bookmark"></i>
                <p class="count">0</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
