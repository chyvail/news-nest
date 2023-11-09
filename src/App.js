import { useState } from "react";
import "./App.css";
import Banner from "./Components/Banner";
import Carousel from "./Components/Carousel";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import NewsStories from "./Components/NewsStories";
import { NewsContext } from "./Contexts/NewsContext";

function App() {
  // Key and api endpoint
  const mediaStackApi = process.env.REACT_APP_API_URL;
  const clientKey = process.env.REACT_APP_API_KEY;

  // States
  const [newsData, setNewsData] = useState([]);

  return (
    <NewsContext.Provider value={{ newsData, setNewsData }}>
      <Navbar api={mediaStackApi} clientKey={clientKey} />
      <Carousel api={mediaStackApi} clientKey={clientKey} />
      <Banner />
      <NewsStories api={mediaStackApi} clientKey={clientKey} />
      <Footer />
    </NewsContext.Provider>
  );
}

export default App;
