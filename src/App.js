import React from "react";

import Logo from "./components/Logo";
import Navbar from "./components/Navbar";
import Content from "./components/Content";
import Footer from "./components/Footer";
import MainContent from "./components/MainContent";


import Social from "./components/Social";
import Contact from "./components/Contact";
import FooterLinks from "./components/FooterLinks";
import Slider from "./components/Slider";

function App() {

  return (
    <div className="min-h-screen  bg-gray-100">
      <Navbar />
      <div className="container mx-auto px-4 pt-16">
        <Logo />
        <MainContent />
        <Slider />
        <Content />
     
        <Social />
        <Contact />
        <FooterLinks />
      </div>
      <Footer />
    </div>
  );
}

export default App;
