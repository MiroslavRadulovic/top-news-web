import React from 'react';
import { Layout, Menu } from 'antd';
import { NavLink } from 'react-router-dom';
import classnames from 'classnames';

import './Sider.scss';

const AntSider = Layout.Sider;

const Sider = ({ collapsed, toggle }) => {
  return (
    <AntSider
      className={classnames({
        sider: true,
        'sider-not-collapsed': !collapsed,
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
        className="sider-nav"
        theme="dark"
        mode="inline"
        defaultSelectedKeys={['1']}
      >
        <Menu.Item
          className={classnames({
            'sider-nav-top-news': true,
            'sider-nav-top-news-fixed': !collapsed,
          })}
          key="1"
        >
          <NavLink activeClassName="active-link" to="/news" onClick={toggle}>
            Top News
          </NavLink>
        </Menu.Item>
        <Menu.Item
          className={classnames({
            'sider-nav-categories': true,
            'sider-nav-categories-fixed': !collapsed,
          })}
          key="2"
        >
          <NavLink
            activeClassName="active-link"
            to="/categories"
            onClick={toggle}
          >
            Categories
          </NavLink>
        </Menu.Item>
      </Menu>
    </AntSider>
  );
};

export default Sider;
