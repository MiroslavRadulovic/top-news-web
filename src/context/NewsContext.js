import React, { createContext, useEffect, useState } from "react";
import instance from "../lib/axiosConfig";

export const NewsContext = createContext();

export const NewsContextProvider = (props) => {
  const [data, setData] = useState([]);
  const [country, setCountry] = useState("gb");
  const [empty, setEmpty] = useState(false);

  const apiKey = process.env.REACT_APP_NEWS_API_KEY;

  useEffect(() => {
    const url = `top-headlines?country=${country}&apiKey=${apiKey}`;

    instance
      .get(url)
      .then((response) => {
        if (!response) {
          setData(null);
        }
        setData(response.data.articles);
      })
      .catch((error) => console.log(error));
  }, [apiKey, country]);

  /**
   * This function accepts search term as an argument and then it retrieves data from the server. It checks if there are articles including that search term and, if so,
   * it sets article(s) as value of property data. If search term does not match any article, it sets propert empty to true and shows component which tells user that there are no articles
   * that match the value of the search input.
   * @param {string} searchTerm
   */
  const searchData = async (searchTerm) => {
    const url = `top-headlines?country=${country}&q=${searchTerm}&apiKey=${apiKey}`;

    instance
      .get(url)
      .then((response) => {
        if (response.data.articles.length === 0) {
          setEmpty(true);
          setData([]);
        } else {
          if (empty) {
            setEmpty(false);
          }
          setData(response.data.articles);
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <NewsContext.Provider
      value={{ data, country, setCountry, searchData, empty }}
    >
      {props.children}
    </NewsContext.Provider>
  );
};
