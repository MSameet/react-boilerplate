import React from "react";
import { Route, Routes } from "react-router-dom";

import { LogIn, Home, Features, AboutUs } from "../views";
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
