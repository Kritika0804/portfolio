import React from "react";

import Features from "./components/features/Features";
import Navbar from "./components/Navbar";

import "./style/navbar.css";
import Banner from "./components/Banner/Banner";
import Project from "./components/Projects/Project";
import Contact from "./components/Contact/Contact";
import Experience from "./Experience/Experience";
import Skills from "./components/Skills/Skills";

function App() {
  return (
    <div className="w-full h-auto bg-bodyColor text-white">
      <div className="max-w-screen-2xl mx-auto px-16">
        <Navbar />
        <Banner />
        <Skills />
        <Features />
        {/* <Experience /> */}
        <Project />
        <Contact />
      </div>
    </div>
  );
}

export default App;
