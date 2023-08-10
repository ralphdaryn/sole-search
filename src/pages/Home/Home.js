import React, { useEffect, useState } from "react";
import axios from "axios";
import { API_URL, API_KEY } from "../../utils/api-utils";

const Home = () => {
  const [sneakerData, setSneakerData] = useState(null);

  useEffect(() => {
    axios
      .get(`${API_URL}`, {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
        },
      })
      .then((response) => {
        setSneakerData(response.data.results);
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (!sneakerData) return null;

  return (
    <div className="home">
      <h1 className="home__title">Find Your Sneakers</h1>
      {sneakerData && sneakerData.length > 0 ? (
        <ul>
          {sneakerData.map((sneaker, index) => (
            <li key={index}>
              <img src={sneaker.image.thumbnail} alt="sneaker" />
              {sneaker.name}
              {sneaker.retailPrice}
            </li>

          ))}
        </ul>
      ) : (
        <p>No sneakers found...</p>
      )}
    </div>
  );
};

export default Home;
