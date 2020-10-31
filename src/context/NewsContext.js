import React, { createContext, useEffect, useState } from "react";
import instance from "../lib/axiosConfig";

export const NewsContext = createContext();

export const NewsContextProvider = (props) => {
  const [data, setData] = useState([]);
  const [country, setCountry] = useState("gb");
  const apiKey = process.env.REACT_APP_NEWS_API_KEY;
  

  useEffect(() => {
    instance
      .get(`top-headlines?country=${country}&apiKey=${apiKey}`)
      .then((response) => setData(response.data.articles))
      .catch((error) => console.log(error));
  }, [apiKey, country]);

  return (
    <NewsContext.Provider value={[data, country, setCountry]}>
      {props.children}
    </NewsContext.Provider>
  );
};
