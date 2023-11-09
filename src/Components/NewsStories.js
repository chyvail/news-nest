import React, { useContext } from "react";
import Card from "./Card";
import { NewsContext } from "../Contexts/NewsContext";

export default function NewsStories() {
  const { newsData } = useContext(NewsContext);
  return (
    <div className="mt-3 containerlg">
      <h5 id="stories-count">Latest Stories ({newsData.length})</h5>
      <div id="stories" className="row g-2">
        <Card />
      </div>
    </div>
  );
}
