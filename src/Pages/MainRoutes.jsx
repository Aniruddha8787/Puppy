import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Search from "./Search";
import Puppy from "./Puppy";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search" element={<Search />} />
      <Route path="/puppy" element={<Puppy />} />
    </Routes>
  );
};

export default MainRoutes;
