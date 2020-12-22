import React from 'react';
import { Result, Button } from 'antd';
import { useHistory } from 'react-router-dom';

import Layout from '../../hoc/layout/Layout';
import './NotFound.scss';

const NotFound = () => {
  const history = useHistory();

  const backHomeHandler = () => history.push('/news');

  return (
    <Layout>
      <div className="not-found">
        <Result
          status="404"
          title="404"
          subTitle="Sorry, the page you visited does not exist."
          extra={
            <Button type="primary" onClick={backHomeHandler}>
              Back Home
            </Button>
          }
        />
      </div>
    </Layout>
  );
};

export default NotFound;
