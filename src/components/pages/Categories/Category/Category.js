import React, { useState, useEffect, useContext } from "react";
import instance from "../../../../lib/axiosConfig";
import Carousel from "react-elastic-carousel";
import { NewsContext } from "../../../../context/NewsContext";

import Card from "../../../common/Card/Card";
import "./Category.scss";

const Category = (props) => {
  const [catData, setCatData] = useState([]);
  const [, country] = useContext(NewsContext);

  const apiKey = process.env.REACT_APP_NEWS_API_KEY;

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 270, itemsToShow: 2 },
    { width: 520, itemsToShow: 3 },
    { width: 770, itemsToShow: 4 },
    { width: 1020, itemsToShow: 5 },
  ];

  useEffect(() => {
    if (props.categoryName) {
      const _category = props.categoryName.toLowerCase();
      const url = `top-headlines?country=${country}&category=${_category}&pageSize=5&apiKey=${apiKey}`;

      instance
        .get(url)
        .then((response) => setCatData(response.data.articles))
        .catch((error) => console.log(error));
    }

    return () => {
      setCatData([]);
    };
  }, [apiKey, country, props.categoryName]);

  return (
    <div className="category__card-container">
      <Carousel breakPoints={breakPoints}>
        {catData.map((item) => (
          <Card
            key={item.title}
            title={item.title}
            description={
              item.description || "No description available for this article."
            }
            img={item.urlToImage}
            content={item.content}
            categoryName={props.categoryName}
            className="category__card"
          />
        ))}
      </Carousel>
    </div>
  );
};

export default Category;
