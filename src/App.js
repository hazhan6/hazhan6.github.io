import "./App.css";
import NavBar from "./navbar";
import Home from "./views/Home";
import Projects from "./views/Projects";
import Contact from "./views/Contact";
import Footer from "./views/Footer";
import About from "./views/About";
import ScrollToTop from "./components/scrollToTop";
import { useEffect, useState } from "react";
import Loader from "./views/loader";

function App() {
  const [isLoading, setIsLoading] = useState(false);

  const handleLoading = () => {
    setIsLoading(false);
  };

  useEffect(() => {
    window.addEventListener("load", handleLoading);
    return () => window.removeEventListener("load", handleLoading);
  }, []);

  return (
    <div className="App">
      {!isLoading ? (
        <div>
          <NavBar />
          <Home />
          <About />
          <Projects />
          <Contact />
          <Footer />
          <ScrollToTop />
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
}

export default App;
