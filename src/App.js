import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Carosello from "./components/Carosell";
import Search from "./components/search";
import ArticlePage from "./page/ArticlePage.jsx";
import HomePage from "./components/HomePage";
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <div className="container" style={{ paddingTop: "110px" }}>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <h1
                  style={{
                    color: "black",
                    fontFamily: "Playfair Display, serif",
                    fontSize: "30px",
                  }}
                >
                  The New York Times
                </h1>
                <hr />
                <div className="ros">
                  <Carosello />
                  <div>
                    <HomePage />
                  </div>
                </div>
                <div className="contr">
                  <Search />
                </div>
              </>
            }
          />
          <Route path="/article/:id" element={<ArticlePage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
