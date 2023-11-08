import "./App.css";
import Carousel from "./Components/Carousel";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import NewsStories from "./Components/NewsStories";

function App() {
  const mediaStackApi = process.env.REACT_APP_API_URL;
  const clientKey = process.env.REACT_APP_API_KEY;
  return (
    <>
      <Navbar api={mediaStackApi} clientKey={clientKey} />
      <Carousel />
      <NewsStories />
      <Footer />
    </>
  );
}

export default App;
