import React from "react";
import Banner from "../Components/Banner";
import Carousel from "../Components/Carousel";
import NewsStories from "../Components/NewsStories";
import SearchModal from "../Components/SearchModal";

export default function Home() {
  return (
    <>
      <Carousel />
      <Banner />
      <NewsStories />
      <SearchModal />
    </>
  );
}
