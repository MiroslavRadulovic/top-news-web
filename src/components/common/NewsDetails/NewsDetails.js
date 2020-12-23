import React, { useEffect, useState } from 'react';
import { Image, Row, Col, Result, Button } from 'antd';
import Placeholder from '../../../assets/Images/news-placeholder.png';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router-dom';

import Layout from '../../hoc/layout/Layout';
import './NewsDetails.scss';

const NewsDetails = (props) => {
  const [title, setTitle] = useState(null);
  const [content, setContent] = useState(null);
  const [img, setImg] = useState(null);

  const history = useHistory();

  useEffect(() => {
    /**
     * Properties sent through the react router link state.
     */
    if (props.location.state) {
      setTitle(props.location.state.title);
      setImg(props.location.state.img);
      setContent(props.location.state.content);
    }
  }, [props.location.state]);

  /**
   * This function does not accept any arguments and it gets us back to the previous page.
   */
  const backClickHandler = () => {
    window.history.back();
  };

  const backHomeHandler = () => history.push('/news');

  return (
    <>
      {props.location.state && (
        <Layout>
          <div className="news-details__container">
            <>
              <Row
                align="middle"
                className="news-details__back"
                gutter={[16, 24]}
                onClick={backClickHandler}
              >
                <ArrowLeftOutlined style={{ fontSize: '17px' }} />
                <span>Back</span>
              </Row>

              <Row
                className="news-details__article-container"
                gutter={[16, 24]}
              >
                <Col xxl={8} xl={8} lg={8} md={12} sm={24} xs={24}>
                  <Image
                    className="news-details__img"
                    src={img || Placeholder}
                  />
                </Col>
                <Col xxl={14} xl={14} lg={14} md={10} sm={24} xs={24}>
                  <Row>
                    <Col span={24}>
                      <h1>{title || 'No title available.'}</h1>
                    </Col>
                    <Col span={24}>
                      <p>
                        {content
                          ? content.split('[')[0]
                          : 'No content available.'}
                      </p>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </>
          </div>
        </Layout>
      )}

      {!props.location.state && (
        <div className="news-details__error-container">
          <Result
            status="403"
            title="Link Share"
            subTitle="Link share feature coming soon :)."
            extra={
              <Button type="primary" onClick={backHomeHandler}>
                Go to Top News?
              </Button>
            }
          />
        </div>
      )}
    </>
  );
};

export default NewsDetails;
