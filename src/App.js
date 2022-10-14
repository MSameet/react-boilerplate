import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import "./App.css";

import Footer from "./components/Footer";
import Header from "./components/Base/Header";
import { BrowserRouter as Router } from "react-router-dom";

import { AppRoutes } from "./routes/Routes";

function App() {
  return (
    <>
      <Router>
        <Header />
        <div className="main">
          <AppRoutes />
        </div>
        <Footer />
      </Router>
    </>
  );
}

export default App;
