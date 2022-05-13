import React from "react";
import Nav from "./components/Nav";
import HomePic from "./pages/HomePic";
import About from "./pages/About";
import Introduction from "./pages/Introduction";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Headroom from "react-headroom";
import MySkills from "./pages/MySkills";

const HomePage = () => {
  return (
    <div>
      <Headroom style={{ zIndex: 9 }}>
        <Nav />
      </Headroom>

      <HomePic />
      <Introduction />
      <MySkills />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default HomePage;
