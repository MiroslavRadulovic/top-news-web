import React from 'react';
import { categoryList } from './categoryList';

import Category from './Category/Category';

const Categories = () => {
  return (
    <>
      {categoryList.map((category) => (
        <React.Fragment key={category}>
          <Category categoryName={category} />
        </React.Fragment>
      ))}
    </>
  );
};

export default Categories;
