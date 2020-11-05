import React from 'react';
import { Card as AntCard, Tooltip } from 'antd';
import { Link } from 'react-router-dom';
import Placeholder from '../../../assets/Images/news-placeholder.png';
import PropTypes from 'prop-types';

const { Meta } = AntCard;

const Card = ({
  categoryName,
  className,
  title,
  img,
  content,
  description,
}) => {
  return (
    <AntCard
      className={className}
      hoverable
      cover={<img height="150px" alt={title} src={img || Placeholder} />}
      loading={!(title && description)}
      actions={[
        <Link
          to={{
            pathname: `/${categoryName ? 'categories' : 'news'}/${encodeURI(
              title
            )}`,
            state: {
              title: title,
              img: img,
              content: content,
            },
          }}
        >
          More
        </Link>,
      ]}
    >
      <Tooltip title={title}>
        <Meta title={title} description={description} />
      </Tooltip>
    </AntCard>
  );
};

Card.propTypes = {
  categoryName: PropTypes.string,
  className: PropTypes.string,
  title: PropTypes.string,
  img: PropTypes.string,
  content: PropTypes.string,
  description: PropTypes.string,
};

export default Card;
