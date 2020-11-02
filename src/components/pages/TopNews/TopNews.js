import React, { useContext } from "react";
import { NewsContext } from "../../../context/NewsContext";

import Card from "../../common/Card/Card";
import Loader from "../../common/Loader/Loader";
import "./TopNews.scss";

const TopNews = () => {
  const [data, country] = useContext(NewsContext);

  return (
    <div className="top-news">
      <h1>
        Top News from {country === "gb" ? "Great Britain" : "United States"}
      </h1>
      {data.length === 0 && (
        <div className="top-news__loader-container">
          <Loader />
        </div>
      )}
      <div className="top-news__card-container">
        {data.map((item) => (
          <Card
            key={item.title}
            title={item.title}
            description={
              item.description || "No description available for this article."
            }
            img={item.urlToImage}
            content={item.content}
            className="top-news__card"
          />
        ))}
      </div>
    </div>
  );
};

export default TopNews;
