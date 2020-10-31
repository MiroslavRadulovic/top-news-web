import React, { useContext } from "react";
import { NewsContext } from "../../../context/NewsContext";

import Loader from "../../common/Loader/Loader";
import "./TopNews.scss";

const TopNews = () => {
  const [data, country] = useContext(NewsContext);

  return (
    <div>
      <h1>Top News from {country === "gb" ? "Great Britain" : "USA"}</h1>
      {data.length === 0 && <Loader />}
      {data.map((item) => (
        <h3 key={item.title}>{item.title}</h3>
      ))}
    </div>
  );
};

export default TopNews;
