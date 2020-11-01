import React, { useState, useEffect, useContext } from "react";
import instance from "../../../../lib/axiosConfig";
import { NewsContext } from "../../../../context/NewsContext";

import Card from "../../../common/Card/Card";
import "./Category.scss";

const Category = (props) => {
  const [catData, setCatData] = useState([]);
  const [, country] = useContext(NewsContext);

  const apiKey = process.env.REACT_APP_NEWS_API_KEY;

  useEffect(() => {
    if (props.categoryName) {
      const _category = props.categoryName.toLowerCase();
      const url = `top-headlines?country=${country}&category=${_category}&pageSize=5&apiKey=${apiKey}`;

      instance
        .get(url)
        .then((response) => setCatData(response.data.articles))
        .catch((error) => {
          if (error && error.data) {
            console.log(error.data);
          }
        });
    }

    return () => {
      setCatData([]);
    };
  }, [apiKey, country, props.categoryName]);

  return (
    <div className="category__card-container">
      {catData.map((category) => (
        <Card
          key={category.title}
          title={category.title}
          description={
            category.description || "No description available for this article."
          }
          img={category.urlToImage}
          className="category__card"
        />
      ))}
    </div>
  );
};

export default Category;
