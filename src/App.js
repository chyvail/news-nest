import "./App.css";
import Carousel from "./Components/Carousel";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import NewsStories from "./Components/NewsStories";

function App() {
  return (
    <>
      <Navbar />
      <Carousel />
      <NewsStories />
      <Footer />
    </>
  );
}

export default App;
