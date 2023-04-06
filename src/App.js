import "./App.css";
import NavBar from "./navbar";
import Home from "./views/Home";
import Works from "./views/Works";
import Contact from "./views/Contact";
import Footer from "./views/Footer";

function App() {
  return (
    <div className="App">
      <div className="d-flex row">
        <div className="col-md-1 navbar-parent">
          <NavBar />
        </div>
        <div className="col-md-11">
          <Home />
          <Works />
          <Contact />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
