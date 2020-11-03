import React, { useState, useContext } from "react";
import { Layout as AntLayout, Menu, Input, Row, Col } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { NavLink } from "react-router-dom";
import { NewsContext } from "../../../context/NewsContext";
import classnames from "classnames";
import "./Layout.scss";

const { Header, Content, Sider } = AntLayout;
const { Search } = Input;

const Layout = (props) => {
  const [, country, setCountry, searchData] = useContext(NewsContext);
  const [showSearch, setShowSearch] = useState(false);
  const [collapsed, setCollapsed] = useState(true);

  const toggle = () => {
    setCollapsed(!collapsed);
  };

  const toggleShowSearch = () => setShowSearch(true);

  const onSearch = (value) => {
    searchData(value);
  };

  const setGB = () => setCountry("gb");

  const setUS = () => setCountry("us");

  return (
    <AntLayout className="layout">
      <Sider
        className={classnames({
          layout__sider: true,
          "sider-not-collapsed": !collapsed,
        })}
        trigger={null}
        collapsible
        defaultCollapsed={false}
        onBreakpoint={() => {}}
        collapsed={collapsed}
        collapsedWidth={0}
        breakpoint="md"
      >
        <Menu
          className="layout__sider-nav"
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
        >
          <Menu.Item
            className={classnames({
              "layout__sider-nav-top-news": true,
              "layout__sider-nav-top-news-fixed": !collapsed,
            })}
            key="1"
          >
            <NavLink activeClassName="active-link" to="/news">
              Top News
            </NavLink>
          </Menu.Item>
          <Menu.Item
            className={classnames({
              "layout__sider-nav-categories": true,
              "layout__sider-nav-categories-fixed": !collapsed,
            })}
            key="2"
          >
            <NavLink activeClassName="active-link" to="/categories">
              Categories
            </NavLink>
          </Menu.Item>
        </Menu>
      </Sider>
      <Header className="layout__header">
        <Row gutter={[16, 24]} align="middle" justify="space-between">
          <Col xxl={0} xl={0} lg={0} md={2} sm={2} xs={2}>
            {React.createElement(MenuOutlined, {
              className: "trigger",
              onClick: toggle,
            })}
          </Col>
          <Col xxl={5} xl={5} lg={6} md={0} sm={0} xs={0}>
            <Menu
              className="layout__header-nav"
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={["1"]}
            >
              <Menu.Item className="layout__header-nav-top-news" key="1">
                <NavLink activeClassName="active-link" to="/news">
                  Top News
                </NavLink>
              </Menu.Item>
              <Menu.Item className="layout__header-nav-categories" key="2">
                <NavLink activeClassName="active-link" to="/categories">
                  Categories
                </NavLink>
              </Menu.Item>
            </Menu>
          </Col>
          <Col xxl={12} xl={12} lg={12} md={10} sm={10} xs={10}>
            <div className="layout__header-nav-search-bar-container">
              <Search
                className="layout__header-nav-search-bar"
                placeholder="Search"
                allowClear
                enterButton
                size="large"
                onSearch={onSearch}
              />
            </div>
          </Col>
          <Col xxl={3} xl={4} lg={4} md={5} sm={6} xs={9}>
            <Menu
              className="layout__header-country-select"
              defaultSelectedKeys={[country]}
              theme="dark"
              mode="horizontal"
            >
              <Menu.Item
                className="layout__header-country-select-gb"
                key="gb"
                onClick={setGB}
              >
                GB
              </Menu.Item>
              <Menu.Item
                className="layout__header-country-select-us"
                key="us"
                onClick={setUS}
              >
                US
              </Menu.Item>
            </Menu>
          </Col>
        </Row>
      </Header>
      <Content
        className={classnames({
          "site-layout-content": true,
          "site-layout-content-hidden": !collapsed,
        })}
      >
        {props.children}
      </Content>
    </AntLayout>
  );
};

export default Layout;
