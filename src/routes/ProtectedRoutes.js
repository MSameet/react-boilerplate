import React from "react";
import { Routes, Route } from "react-router-dom";
import { AboutUs } from "../components/AboutUs";
import { Features } from "../components/Features";
import { Home } from "../components/Home";

export const ProtectedRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/aboutus" element={<AboutUs />} />
      </Routes>
    </div>
  );
};
