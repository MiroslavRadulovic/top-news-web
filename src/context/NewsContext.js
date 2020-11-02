import React, { createContext, useEffect, useState } from "react";
import instance from "../lib/axiosConfig";

export const NewsContext = createContext();

export const NewsContextProvider = (props) => {
  const [data, setData] = useState([]);
  const [country, setCountry] = useState("gb");
  const [category, setCategory] = useState(null);
  const [topFives, setTopFives] = useState([]);

  const apiKey = process.env.REACT_APP_NEWS_API_KEY;

  useEffect(() => {
    const url = `top-headlines?country=${country}&apiKey=${apiKey}`;
    const catUrl = `top-headlines?country=${country}&category=${category}&apiKey=${apiKey}`;

    instance
      .get(category ? catUrl : url)
      .then((response) => setData(response.data.articles))
      .catch((error) => console.log(error));
  }, [apiKey, country, category]);

  const getTopFiveByCategory = async (_category) => {
    const url = `top-headlines?country=${country}&category=${_category}&pageSize=5&apiKey=${apiKey}`;

    instance
      .get(url)
      .then((response) => setTopFives([...topFives, response.data.articles]))
      .catch((error) => {
        if (error.response) {
          console.log(error.response.data.message);
        }
      });
  };

  return (
    <NewsContext.Provider
      value={[data, country, setCountry, topFives, getTopFiveByCategory]}
    >
      {props.children}
    </NewsContext.Provider>
  );
};
