import React from 'react';
import { categoryList } from './categoryList';

import Layout from '../../hoc/layout/Layout';
import Category from './Category/Category';
import './Categories.scss';

const Categories = () => {
  return (
    <Layout>
      <div className="categories">
        {categoryList.map((category) => (
          <React.Fragment key={category}>
            <Category categoryName={category} />
          </React.Fragment>
        ))}
      </div>
    </Layout>
  );
};

export default Categories;
