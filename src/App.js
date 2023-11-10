import { useEffect, useState } from "react";
import "./App.css";
import { NewsContext } from "./Contexts/NewsContext";
import Home from "./Pages/Home";
import { Route, Routes } from "react-router-dom";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import NewsStories from "./Components/NewsStories";
import NewsDetails from "./Pages/NewsDetails";

function App() {
  // Key and api endpoint
  const api = process.env.REACT_APP_API_URL;
  const clientKey = process.env.REACT_APP_API_KEY;

  // Default Image

  const defaultImage =
    "https://img.freepik.com/free-photo/top-view-old-french-newspaper-pieces_23-2149318857.jpg?w=1800&t=st=1697118921~exp=1697119521~hmac=a7cbfebd6578b839daf35fd4850eec18106aa1152927e8f33305175ef357cdaf";

  // States
  const [newsData, setNewsData] = useState([]);

  // Fetch Data from Africa by default
  useEffect(() => {
    fetch(`${api}${clientKey}&keywords=Africa`)
      .then((res) => res.json())
      .then((data) => setNewsData(data.data));
  }, [api, clientKey]);

  return (
    <NewsContext.Provider
      value={{ newsData, setNewsData, defaultImage, api, clientKey }}
    >
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/news" element={<NewsStories />} />
        <Route path="/news/:slug" element={<NewsDetails />} />
      </Routes>
      <Footer />
    </NewsContext.Provider>
  );
}

export default App;
