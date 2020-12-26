import React from 'react';
import { Layout, Menu, Input, Row, Col } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import { NavLink } from 'react-router-dom';

import './Header.scss';

const AntHeader = Layout.Header;
const { Search } = Input;

const Header = ({ country, toggle, onSearch, changeCountryHandler }) => {
  return (
    <AntHeader className="header">
      <Row gutter={[16, 24]} align="middle" justify="space-between">
        <Col xxl={0} xl={0} lg={0} md={2} sm={2} xs={2}>
          {React.createElement(MenuOutlined, {
            className: 'trigger',
            onClick: toggle,
          })}
        </Col>
        <Col xxl={5} xl={5} lg={6} md={0} sm={0} xs={0}>
          <Menu
            className="header__nav"
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['1']}
          >
            <Menu.Item className="header__nav--top-news" key="1">
              <NavLink activeClassName="active-link" to="/news">
                Top News
              </NavLink>
            </Menu.Item>
            <Menu.Item className="header__nav--categories" key="2">
              <NavLink activeClassName="active-link" to="/categories">
                Categories
              </NavLink>
            </Menu.Item>
          </Menu>
        </Col>
        <Col
          className="header__nav--search-bar--container"
          xxl={12}
          xl={12}
          lg={12}
          md={10}
          sm={10}
          xs={10}
        >
          {window.location.pathname === '/news' && (
            <Search
              className="header__nav--search-bar"
              placeholder="Search"
              allowClear
              enterButton
              size="large"
              onSearch={onSearch}
            />
          )}
        </Col>
        {country && (
          <Col xxl={3} xl={4} lg={4} md={5} sm={6} xs={9}>
            <Menu
              className="header__country-select"
              defaultSelectedKeys={[country]}
              theme="dark"
              mode="horizontal"
            >
              <Menu.Item
                className="header__country--select-gb"
                key="gb"
                onClick={() => changeCountryHandler('gb')}
                disabled={
                  window.location.pathname !== '/news' &&
                  window.location.pathname !== '/categories'
                }
              >
                GB
              </Menu.Item>
              <Menu.Item
                className="header__country--select-us"
                key="us"
                onClick={() => changeCountryHandler('us')}
                disabled={
                  window.location.pathname !== '/news' &&
                  window.location.pathname !== '/categories'
                }
              >
                US
              </Menu.Item>
            </Menu>
          </Col>
        )}
      </Row>
    </AntHeader>
  );
};

export default Header;
