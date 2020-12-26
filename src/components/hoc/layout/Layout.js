import React, { useState, useContext, useEffect } from 'react';
import { Layout as AntLayout } from 'antd';
import { NewsContext } from '../../../context/NewsContext';

import Header from './Header/Header';
import Sider from './Sider/Sider';
import './Layout.scss';

const { Content } = AntLayout;

const Layout = (props) => {
  /**
   * Properties extracted from NewsContext.
   */
  const { country, searchData, loadCountry, chooseCountry } = useContext(
    NewsContext
  );

  /**
   * Initial state of side menu collapse
   */
  const [collapsed, setCollapsed] = useState(true);

  useEffect(() => {
    return () => {
      /**
       * Removes country item from local storage on component unmount.
       */
      localStorage.removeItem('country');
    };
  }, []);

  /**
   * This function toggles the collapse of side menu.
   */
  const toggle = () => setCollapsed(!collapsed);

  /**
   * This function accepts the value of search input. It calls searchData function from NewsContext that is responsible for
   * retrieving data from server by that argument.
   * @param {string} searchValue
   */
  const onSearch = (searchValue) => {
    searchData(searchValue);
  };

  /**
   * This function sets country to Great Britain or USA.
   */
  const changeCountryHandler = async (country) => {
    await chooseCountry(country);
    await loadCountry();
  };

  return (
    <AntLayout className="layout">
      <Sider collapsed={collapsed} toggle={toggle} />
      <Header
        country={country}
        toggle={toggle}
        onSeacrh={onSearch}
        changeCountryHandler={changeCountryHandler}
      />
      <Content className="site-layout-content">{props.children}</Content>
    </AntLayout>
  );
};

export default Layout;
