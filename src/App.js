import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import "./App.css";

import Footer from "./components/Footer";
import Header from "./components/Header";
import { ProtectedRoutes } from "./routes/ProtectedRoutes";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { AboutUs } from "./components/AboutUs";
import { Features } from "./components/Features";
import { Home } from "./components/Home";
import { LogIn } from "./components/LogIn";

function App() {
  return (
    <>
      <Router>
        <Header />
        <div className="main">
          <Routes>
            {/* <Route render={<ProtectedRoutes path="/" element={<Home />} />} /> */}
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
        </div>
        <Footer />
      </Router>
    </>
  );
}

export default App;
