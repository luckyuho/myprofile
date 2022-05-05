import React from "react";
import Nav from "./components/Nav";
import HomePic from "./pages/HomePic";
import About from "./pages/About";
import Introduction from "./pages/Introduction";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

const HomePage = () => {
  return (
    <div>
      <Nav />
      <HomePic />
      <Introduction />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default HomePage;
