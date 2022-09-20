import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/home/Home";
import Search from "./pages/search/Search";
import Genre from "./pages/genre/Genre";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path="search" element={<Search />} />
          <Route path="genres" element={<Genre />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);