import React from "react";
import Home from "./Home";
import { Route, Routes, useLocation } from "react-router-dom";
import Cuisine from "./Cuisine";
import Searched from "./Searched";
import Recipe from "./Recipe";
import { AnimatePresence } from "framer-motion";
import About from "./About";
import Contact from "./Contact";
import FeedBack from "./FeedBack";

function Pages() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes Location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/cuisine/:type" element={<Cuisine />} />
        <Route path="/searched/:search" element={<Searched />} />
        <Route path="/recipe/:name" element={<Recipe />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/feedback" element={<FeedBack />} />
      </Routes>
    </AnimatePresence>
  );
}

export default Pages;
