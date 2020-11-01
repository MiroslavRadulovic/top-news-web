import React from "react";
import { categoryList } from "./categoryList";

import Category from "./Category/Category";
import "./Categories.scss";

const Categories = () => {
  return (
    <div>
      
      {categoryList.map((category) => (
        <React.Fragment key={category}>
          <h1>{category}</h1>
          <Category categoryName={category} />
        </React.Fragment>
      ))}
    </div>
  );
};

export default Categories;
