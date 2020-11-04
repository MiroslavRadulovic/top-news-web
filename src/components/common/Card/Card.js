import React from "react";
import { Card as AntCard, Tooltip } from "antd";
import { Link } from "react-router-dom";
import Placeholder from "../../../assets/Images/news-placeholder.png";

const { Meta } = AntCard;

const Card = (props) => {
  return (
    <AntCard
      className={props.className}
      hoverable
      cover={
        <img height="150px" alt={props.title} src={props.img || Placeholder} />
      }
      loading={!(props.title && props.description)}
      actions={[
        <Link
          to={{
            pathname: `/${
              props.categoryName ? "categories" : "news"
            }/${encodeURI(props.title)}`,
            state: {
              title: props.title,
              img: props.img,
              content: props.content,
              disableCountries: true,
            },
          }}
        >
          More
        </Link>,
      ]}
    >
      <Tooltip title={props.title}>
        <Meta title={props.title} description={props.description} />
      </Tooltip>
    </AntCard>
  );
};

export default Card;
