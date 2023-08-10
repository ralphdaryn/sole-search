import React, { useEffect, useState } from "react";
import axios from "axios";

const GetSneakers = () => {
  const [sneakerData, setSneakerData] = useState(null);
  const query = "jordan+1+shattered";
  const API_URL = `https://zylalabs.com/api/916/sneakers+database+api/731/search+sneaker?limit=10&page=1&query=${query}`;
  const API_KEY = "1847|EUqPT20zrF7LC5W6qK3jMI0sLRbJjb4KoCuUOog2";

  useEffect(() => {
    axios
      .get(API_URL, {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
        },
      })
      .then((response) => {
        setSneakerData(response.data.results);
        console.log(response)
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1>Most Popular Sneakers</h1>
      {sneakerData && sneakerData.length > 0 ? (
        <ul>
          {sneakerData.map((sneaker, index) => (
            <li key={index}>
              <img src={sneaker.image.original} alt="sneaker"/>
              {sneaker.name}
            </li>
          ))}
        </ul>
      ) : (
        <p>No sneakers found.</p>
      )}
    </div>
  );
};

export default GetSneakers;
