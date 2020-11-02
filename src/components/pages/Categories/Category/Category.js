import React, { useState, useEffect, useContext } from "react";
import instance from "../../../../lib/axiosConfig";
import Carousel from "react-elastic-carousel";
import { NewsContext } from "../../../../context/NewsContext";
import { Result, Button } from "antd";

import Card from "../../../common/Card/Card";
import "./Category.scss";

const Category = (props) => {
  const [catData, setCatData] = useState([]);
  const [error, setError] = useState(false);
  const [, country] = useContext(NewsContext);

  const apiKey = process.env.REACT_APP_NEWS_API_KEY;

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 410, itemsToShow: 2 },
    { width: 660, itemsToShow: 3 },
    { width: 910, itemsToShow: 4 },
    { width: 1030, itemsToShow: 5 },
  ];

  useEffect(() => {
    if (props.categoryName) {
      const _category = props.categoryName.toLowerCase();
      const url = `top-headlines?country=${country}&category=${_category}&apiKey=${apiKey}`;

      instance
        .get(url)
        .then((response) => setCatData(response.data.articles))
        .catch((error) => {
          setError(true);
        });
    }

    return () => {
      setCatData([]);
    };
  }, [apiKey, country, props.categoryName]);

  return (
    <div className="category__card-container">
      {error && (
        <div className="category__problems-container">
          <Result
            status="warning"
            title="There are some problems with fetching news in this category. Try to reload the page."
            extra={
              <Button
                type="primary"
                key="console"
                onClick={() => window.location.reload()}
              >
                Reload
              </Button>
            }
          />
        </div>
      )}
      {!error && (
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
      )}
    </div>
  );
};

export default Category;
