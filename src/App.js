import "./App.css";
import NavBar from "./navbar";
import Home from "./views/Home";
import Works from "./views/Works";
import Contact from "./views/Contact";
import Footer from "./views/Footer";
import About from "./views/About";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <About />
      <Works />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
