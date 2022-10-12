import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Footer from "./components/Footer";
import Header from "./components/Header";
import { ProtectedRoutes } from "./routes/ProtectedRoutes";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Header />
        <div className="main">
          <ProtectedRoutes />
        </div>
        <Footer />
      </Router>
    </>
  );
}

export default App;
