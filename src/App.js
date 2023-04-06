import "./App.css";
import NavBar from "./navbar";
import Home from "./views/Home";
import Works from "./views/Works";
import Contact from "./views/Contact";
import Footer from "./views/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <Works />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
