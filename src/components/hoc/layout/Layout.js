import React, { useState, useContext } from "react";
import { Layout as AntLayout, Menu, Input, Row, Col } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { NavLink } from "react-router-dom";
import { NewsContext } from "../../../context/NewsContext";
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
        className="layout__sider"
        trigger={null}
        collapsible
        collapsed={collapsed}
        collapsedWidth={0}
      >
        <Menu
          // className="layout__header-nav"
          theme="dark"
          mode="inline"
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
          {!showSearch && (
            <Menu.Item
              className="layout__header-nav-search"
              key="3"
              onClick={toggleShowSearch}
            >
              Search
            </Menu.Item>
          )}
        </Menu>
      </Sider>
      <Header className="layout__header">
        <Row align="middle" justify="space-between">
          <Col xxl={0} xl={0} lg={0} md={2} sm={2} xs={2}>
            {React.createElement(MenuOutlined, {
              className: "trigger",
              onClick: toggle,
            })}
          </Col>
          <Col xxl={6} xl={6} lg={8} md={0} sm={0} xs={0}>
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
              {!showSearch && (
                <Menu.Item
                  className="layout__header-nav-search"
                  key="3"
                  onClick={toggleShowSearch}
                >
                  Search
                </Menu.Item>
              )}
            </Menu>
          </Col>
          <Col xxl={12} xl={12} lg={12} md={12} sm={20} xs={16}>
            <div className="layout__header-nav-search-bar-container">
              {showSearch && (
                <Search
                  className="layout__header-nav-search-bar"
                  placeholder="Search"
                  allowClear
                  enterButton="Search"
                  size="large"
                  onSearch={onSearch}
                />
              )}
            </div>
          </Col>
          <Col xxl={4} xl={4} lg={4} md={4} sm={6} xs={8}>
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
      <Content style={{ padding: "0 70px", marginTop: "80px" }}>
        <div className="site-layout-content">{props.children}</div>
      </Content>
    </AntLayout>
  );
};

export default Layout;
