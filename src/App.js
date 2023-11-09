import { useEffect, useState } from "react";
import "./App.css";
import Banner from "./Components/Banner";
import Carousel from "./Components/Carousel";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import NewsStories from "./Components/NewsStories";
import { NewsContext } from "./Contexts/NewsContext";

function App() {
  // Key and api endpoint
  const api = process.env.REACT_APP_API_URL;
  const clientKey = process.env.REACT_APP_API_KEY;

  // States
  const [newsData, setNewsData] = useState([]);

  // Fetch Data from Africa by default
  useEffect(() => {
    fetch(`${api}${clientKey}&keywords=Africa`)
      .then((res) => res.json())
      .then((data) => setNewsData(data.data));
  }, [api, clientKey]);

  return (
    <NewsContext.Provider value={{ newsData, setNewsData }}>
      <Navbar api={api} clientKey={clientKey} />
      <Carousel api={api} clientKey={clientKey} />
      <Banner />
      <NewsStories api={api} clientKey={clientKey} />
      <Footer />
    </NewsContext.Provider>
  );
}

export default App;
