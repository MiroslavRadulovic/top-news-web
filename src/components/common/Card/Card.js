import React from "react";
import { Card as AntCard, Tooltip } from "antd";
import Placeholder from "../../../assets/Images/news-placeholder.png";

const { Meta } = AntCard;

const Card = (props) => {
  return (
    <AntCard
      className={props.className}
      hoverable
      cover={
        <img height="200px" alt={props.title} src={props.img || Placeholder} />
      }
      loading={!(props.title && props.description)}
      actions={[<a href="#">More</a>]}
    >
      <Tooltip title={props.title}>
        <Meta title={props.title} description={props.description} />
      </Tooltip>
    </AntCard>
  );
};

export default Card;
