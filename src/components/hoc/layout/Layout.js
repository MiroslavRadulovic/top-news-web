import React from "react";
import { Layout as AntLayout, Menu, Input } from "antd";
import "./Layout.scss";

const { Header, Content } = AntLayout;
const { Search } = Input;

const Layout = (props) => {
  const onSearch = (value) => console.log(value);
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
            Top News
          </Menu.Item>
          <Menu.Item className="layout__header-nav-categories" key="2">
            Categories
          </Menu.Item>
          <Menu.Item className="layout__header-nav-search" key="3">
            Search
          </Menu.Item>
        </Menu>
        <Search
          className="layout__header-nav-search-bar"
          placeholder="Search"
          allowClear
          enterButton="Search"
          size="large"
          onSearch={onSearch}
        />
        <Menu
          className="layout__header-country-select"
          defaultSelectedKeys={[]}
          theme="dark"
          mode="horizontal"
        >
          <Menu.Item className="layout__header-country-select-gb" key="4">
            GB
          </Menu.Item>
          <Menu.Item className="layout__header-country-select-us" key="5">
            US
          </Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: "0 50px" }}>
        <div className="site-layout-content">{props.children}</div>
      </Content>
    </AntLayout>
  );
};

export default Layout;
