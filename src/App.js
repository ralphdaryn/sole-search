import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";
import SneakerList from "./components/SneakerList/SneakerList";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import SearchBar from "./components/SearchBar/SearchBar";

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/sneakers"
            element={<SneakerList searchQuery={searchQuery} />}
          />
          <Route path="/sneakers/:sneakerId" element={<ProductDetails />} />
          <Route path="*" element={<h2>Sneaker not found</h2>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
