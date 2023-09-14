import React from "react";

import Features from "./components/features/Features";
import Navbar from "./components/Navbar";

import "./style/navbar.css";
import Banner from "./components/Banner/Banner";
import Project from "./components/Projects/Project";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <div className="w-full h-auto bg-bodyColor text-white">
      <div className="max-w-screen-2xl mx-auto px-16">
        <Navbar />
        <Banner />
        {/* <Features/> */}
        <Project />
        <Contact />
      </div>
    </div>
  );
}

export default App;
