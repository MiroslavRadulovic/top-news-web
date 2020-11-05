import React, { useState, useEffect, useContext } from 'react';
import instance from '../../../../lib/axiosConfig';
import Carousel from 'react-elastic-carousel';
import { NewsContext } from '../../../../context/NewsContext';
import { Result, Button, Tooltip } from 'antd';
import { DownOutlined, UpOutlined } from '@ant-design/icons';
import classnames from 'classnames';

import Card from '../../../common/Card/Card';
import Loader from '../../../common/Loader/Loader';
import './Category.scss';

const Category = ({ categoryName }) => {
  const [catData, setCatData] = useState([]);

  /**
   * This is pseudo property that indicates an error, in this particular case the error wtih retrieving data from newsapi.org. If this is true, that means that error 429 was thrown and it will render
   *  the component that warns there is something wrong with fetching data from server.
   */
  const [error, setError] = useState(false);

  /**
   * These two properties are for expanding and collapsing full list of top news for category.
   */
  const [expandCategory, setExpandCategory] = useState(false);
  const [hideCarousel, setHideCarousel] = useState(false);

  const { country } = useContext(NewsContext);

  const apiKey = process.env.REACT_APP_NEWS_API_KEY;

  /**
   * Break points for carousel component. It indicates how many cards in this case will be shown on which resolution of the screen>
   */
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 410, itemsToShow: 2 },
    { width: 660, itemsToShow: 3 },
    { width: 910, itemsToShow: 4 },
    { width: 1030, itemsToShow: 5 },
  ];

  /**
   * For the sake of this public API and this particular case, this server call is separated from the news context and put here in local state of the component.
   * This is a very bad solution because on every component re-rendering, we have an API call for each category. The only benefit of this solution is that it should prevent a memory leak, caused by updating state of unmounted component,
   * by regulating its own local state. In real life scenario, I would suggest the change on the back end side, like adding one extra boolean parameter for categories in getAll request.
   */
  useEffect(() => {
    if (categoryName) {
      const _category = categoryName.toLowerCase();
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
  }, [apiKey, country, categoryName]);

  /**
   * Setting a full list to expanded or collapsed state.
   */
  const toggleExpandCategory = () => {
    setHideCarousel(!hideCarousel);
    setExpandCategory(!expandCategory);
  };

  return (
    <div className="category__card-container">
      <Tooltip
        title={expandCategory && hideCarousel ? 'Show less' : 'Show more'}
      >
        <h1 className="category__title" onClick={toggleExpandCategory}>
          {categoryName}
          {expandCategory && hideCarousel ? (
            <UpOutlined style={{ marginLeft: '5px', fontSize: '15px' }} />
          ) : (
            <DownOutlined style={{ marginLeft: '5px', fontSize: '15px' }} />
          )}
        </h1>
      </Tooltip>

      {error && (
        <div className="category__problems-container">
          <Result
            status="error"
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
      {!error && catData && catData.length === 0 && (
        <div data-testid="loading" className="category__loader-container">
          <Loader tip={`Loading ${categoryName} news...`} />
        </div>
      )}
      {!expandCategory &&
        !hideCarousel &&
        !error &&
        catData &&
        catData.length > 0 && (
          <Carousel data-testid="resolved" breakPoints={breakPoints}>
            {catData.map((item) => (
              <Card
                key={item.title}
                title={item.title}
                description={
                  item.description ||
                  'No description available for this article.'
                }
                img={item.urlToImage}
                content={item.content}
                categoryName={categoryName}
                className="category__card"
              />
            ))}
          </Carousel>
        )}
      {expandCategory && hideCarousel && (
        <div
          className={classnames({
            'category__card-container-all': true,
            'category__card-container-all-expand':
              expandCategory && hideCarousel,
            'category__card-container-all-collapse': !(
              expandCategory && hideCarousel
            ),
          })}
        >
          {catData &&
            catData.map((item) => (
              <Card
                key={item.title}
                title={item.title}
                description={
                  item.description ||
                  'No description available for this article.'
                }
                img={item.urlToImage}
                content={item.content}
                className="category__card"
              />
            ))}
        </div>
      )}
    </div>
  );
};

export default Category;
