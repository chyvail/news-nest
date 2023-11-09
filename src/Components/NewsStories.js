import React, { useEffect } from "react";
import Card from "./Card";

export default function NewsStories({ api, clientKey }) {
  return (
    <div className="mt-3 containerlg">
      <h5 id="stories-count"></h5>
      <div id="stories" className="row g-2">
        <Card />
      </div>
    </div>
  );
}
