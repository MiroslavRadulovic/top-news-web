import React, { useContext } from 'react';
import { NewsContext } from '../../../context/NewsContext';
import { Empty, Result, Button } from 'antd';

import Card from '../../common/Card/Card';
import Loader from '../../common/Loader/Loader';
import './TopNews.scss';

const TopNews = () => {
  /**
   * Properties extracted from news context.
   */
  const { data, country, empty } = useContext(NewsContext);

  return (
    <div className="top-news">
      <h1 className="top-news__title">
        Top News from {country === 'gb' ? 'Great Britain' : 'United States'}
      </h1>
      {!data && (
        <div className="top-news__problems-container">
          <Result
            status="error"
            title="There are some problems with fetching top news. Try to reload the page."
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
      {empty && (
        <div className="top-news__empty-container">
          <Empty description="There are no articles with that keyword." />
        </div>
      )}
      {data && data.length === 0 && !empty && (
        <div className="top-news__loader-container">
          <Loader tip="Loading top news..." />
        </div>
      )}
      <div className="top-news__card-container">
        {data &&
          data.map((item) => (
            <Card
              key={item.title}
              title={item.title}
              description={
                item.description || 'No description available for this article.'
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
