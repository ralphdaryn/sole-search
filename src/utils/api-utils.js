import { useEffect, useState } from "react";
import axios from "axios";

const API_KEY = "2370|IcLY7inpAW5oVLKau4uAlUPRHo7JmF8LfUZ6utzv";

export const FetchSneakersByQuery = async (query) => {
  const API_URL = `https://zylalabs.com/api/916/sneakers+database+api/731/search+sneaker?limit=12&page=1&query=${query}`;
  
  try {
    const response = await axios.get(API_URL, {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
    });
    return response.data.results;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export const useFetchSneakerById = (id) => {
  const API_URL = `https://zylalabs.com/api/916/sneakers+database+api/733/get+sneaker+by+id?sneaker_id=${id}`;
  const [sneakerData, setSneakerData] = useState(null);

  useEffect(() => {
    axios
      .get(API_URL, {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
        },
      })
      .then((response) => {
        setSneakerData(response.data.results[0]);
      })
      .catch((error) => {
        console.log('API Error:', error);
      });
  }, [id]);

  return { sneakerData };
};