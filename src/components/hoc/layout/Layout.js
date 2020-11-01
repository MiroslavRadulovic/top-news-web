import React, { useState, useContext } from "react";
import { Layout as AntLayout, Menu, Input } from "antd";
import { NavLink } from "react-router-dom";
import { NewsContext } from "../../../context/NewsContext";
import "./Layout.scss";

const { Header, Content } = AntLayout;
const { Search } = Input;

const Layout = (props) => {
  const [data, country, setCountry] = useContext(NewsContext);
  const [showSearch, setShowSearch] = useState(false);

  const toggleShowSearch = () => setShowSearch(!showSearch);

  const onSearch = (value) => {
    console.log(value);
    toggleShowSearch();
  };

  const setGB = () => setCountry("gb");

  const setUS = () => setCountry("us");

  return (
    <AntLayout className="layout">
      <Header className="layout__header">
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
      </Header>
      <Content style={{ padding: "0 5%", marginTop: "80px" }}>
        <div className="site-layout-content">{props.children}</div>
      </Content>
    </AntLayout>
  );
};

export default Layout;
