import "./App.scss";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import Home from "./pages/Home/Home";
import "./utils/api-utils";

function App() {
  const [sneakers, setSneakers] = useState(null);

  useEffect(() => {
    axios
      .get("https://the-sneaker-database.p.rapidapi.com", {
        headers: {
          "X-RapidAPI-Key":
            "9204031a01msh80976ddaee94c44p1d4e54jsn46dbc16662c4",
        },
      })
      .then((response) => {
        setSneakers(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home sneakers={sneakers} />} />
        <Route path="/product/:id" element={ProductDetails} />
        <Route path="*" element={<h1>Page Not Available</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
