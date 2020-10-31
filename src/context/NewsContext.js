import React, { createContext, useEffect, useState } from "react";
import instance from "../lib/axiosConfig";

export const NewsContext = createContext();

export const NewsContextProvider = (props) => {
  const [data, setData] = useState([]);
  const [country, setCountry] = useState("gb");
  const [category, setCategory] = useState(null);

  const apiKey = process.env.REACT_APP_NEWS_API_KEY;

  useEffect(() => {
    const url = `top-headlines?country=${country}&apiKey=${apiKey}`;
    const catUrl = `top-headlines?country=${country}&category=${category}&apiKey=${apiKey}`;

    instance
      .get(category ? catUrl : url)
      .then((response) => setData(response.data.articles))
      .catch((error) => console.log(error));
  }, [apiKey, country, category]);

  return (
    <NewsContext.Provider value={[data, country, setCountry]}>
      {props.children}
    </NewsContext.Provider>
  );
};
