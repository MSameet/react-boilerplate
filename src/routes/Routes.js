import React from "react";
import { Route, Routes } from "react-router-dom";

import { AboutUs } from "../views/AboutUs";
import { Features } from "../components/Features";
import { Home } from "../components/Home";
import { LogIn } from "../components/LogIn";
import { ProtectedRoutes } from "./ProtectedRoutes";

export function AppRoutes() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <ProtectedRoutes>
            <Home />
          </ProtectedRoutes>
        }
      />
      <Route
        path="/aboutus"
        element={
          <ProtectedRoutes>
            <AboutUs />
          </ProtectedRoutes>
        }
      />
      <Route
        path="/features"
        element={
          <ProtectedRoutes>
            <Features />
          </ProtectedRoutes>
        }
      />
      <Route path="/login" element={<LogIn />} />
    </Routes>
  );
}
