import { BrowserRouter } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Services from "./Components/Services";
import About from "./Components/About";
import Footer from "./Components/Footer";
import Contact from "./Components/Contact";
import Courses from "./Components/Courses";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-custom1 to-white h-screen overflow-auto">
      <BrowserRouter>
        <div className="">
          <Navbar />
          <div id="home">
            <Hero />
          </div>
          <div id="about">
            <About />
          </div>
          <div id="services">
            <Services />
          </div>
          <div id="courses">
            <Courses />
          </div>
          <div id="contact">
            <Contact />
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
