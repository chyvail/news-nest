import React, { useContext, useEffect, useState } from "react";
import { NewsContext } from "../Contexts/NewsContext";
import { useParams, Link, useNavigate } from "react-router-dom";

export default function NewsDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  // Context
  const { newsData, defaultImage } = useContext(NewsContext);

  // State
  const [comments, setComments] = useState([]);

  // Form State
  const [commentText, setCommentText] = useState("");

  // Find the specific news item based on the id parameter
  const newsItem = newsData[parseInt(id, 10)];

  const handleCommentSubmit = (event) => {
    event.preventDefault();
    fetch(`http://localhost:8000/comments/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ commentsList: [...comments, commentText] }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  const handleCommentDelete = (comment) => {
    const commentToSubmit = comment;
    const updatedCommentsList = [
      ...comments.filter((comment) => comment !== commentToSubmit),
    ];

    console.log(updatedCommentsList);
    fetch(`http://localhost:8000/comments/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ commentsList: updatedCommentsList }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  useEffect(() => {
    fetch(`http://localhost:8000/comments/${id}`)
      .then((res) => res.json())
      .then((data) => setComments(data.commentsList || []));
  });

  if(!newsItem){
    return null
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

          <div className="text-center mt-3">
            <a
              type="button"
              className="btn original-link"
              href={newsItem.url}
              target="_blank"
              rel="noreferrer"
            >
              Go to Original Link
            </a>
          </div>

          {/* Comments Section */}

          <div className="comments">
            <h5>Comments</h5>
          </div>
          <div className="mt-3">
            {comments.map((comment) => (
              <div  key={comment} className="">
                <p
                  className="individual-comments mt-1 d-flex justify-content-between"
                >
                  {comment}
                  <i
                    className="fa-solid fa-trash"
                    onClick={() => {
                      handleCommentDelete(comment);
                    }}
                  ></i>
                </p>
              </div>
            ))}
          </div>

          {/* Form Section */}
          <form className="mt-3" onSubmit={handleCommentSubmit}>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Make A Comment Here
              </label>
              <input
                type="text"
                className="form-control"
                id="commentText"
                aria-describedby="emailHelp"
                value={commentText}
                onChange={(event) => setCommentText(event.target.value)}
              />
              <div id="textHelp" className="form-text">
                What are you thinking about
              </div>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit Comment
            </button>
          </form>

          <div className="icons mt-3 news-icons">
            <div id="like" className="like">
              <i className="fa-regular fa-clock"></i>
              <p className="count">{newsItem.published_at.slice(0, 10)}</p>
            </div>
            <div className="bookmark">
              <i className="fa-regular fa-user"></i>
              <p className="count">~ {newsItem.author}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
