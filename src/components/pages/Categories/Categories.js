import React from "react";
import { categoryList } from "./categoryList";

import Category from "./Category/Category";
import "./Categories.scss";

const Categories = () => {
  return (
    <div>
      {categoryList.map((category) => (
        <Category key={category} categoryName={category} />
      ))}
    </div>
  );
};

export default Categories;
