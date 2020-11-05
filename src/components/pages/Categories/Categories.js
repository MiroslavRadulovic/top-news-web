import React from 'react';
import { categoryList } from './categoryList';

import Category from './Category/Category';
import './Categories.scss';

const Categories = () => {
  return (
    <div className="categories">
      {categoryList.map((category) => (
        <React.Fragment key={category}>
          <Category categoryName={category} />
        </React.Fragment>
      ))}
    </div>
  );
};

export default Categories;
