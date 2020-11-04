import React from "react";
import { Image, Row, Col } from "antd";
import Placeholder from "../../../assets/Images/news-placeholder.png";
import { ArrowLeftOutlined } from "@ant-design/icons";

import "./NewsDetails.scss";

const NewsDetails = (props) => {
  /**
   * Properties sent through the react router link state.
   */
  const { title, content, img } = props.location.state;

  /**
   * This function does not accept any arguments and it gets us back to the previous page.
   */
  const backClickHandler = () => {
    window.history.back();
  };

  return (
    <div className="news-details__container">
      <Row
        align="middle"
        className="news-details__back"
        gutter={[16, 24]}
        onClick={backClickHandler}
      >
        <ArrowLeftOutlined style={{ fontSize: "17px" }} />
        <span>Back</span>
      </Row>
      <Row className="news-details__article-container" gutter={[16, 24]}>
        <Col xxl={8} xl={8} lg={8} md={12} sm={24} xs={24}>
          <Image className="news-details__img" src={img || Placeholder} />
        </Col>
        <Col xxl={14} xl={14} lg={14} md={10} sm={24} xs={24}>
          <Row>
            <Col span={24}>
              <h1>{title}</h1>
            </Col>
            <Col span={24}>
              <p>{content ? content.split("[")[0] : "No content available."}</p>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default NewsDetails;
