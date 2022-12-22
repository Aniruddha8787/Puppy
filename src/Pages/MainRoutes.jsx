import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Search from "./Search";
import Puppy from "./Puppy";
import Admin from "./Admin";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search" element={<Search />} />
      <Route path="/puppy" element={<Puppy />} />
      <Route path="/admin" element={<Admin />} />
    </Routes>
  );
};

export default MainRoutes;
