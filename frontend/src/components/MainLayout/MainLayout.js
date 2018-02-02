import React from 'react';
import { Layout } from 'antd';
import styles from './MainLayout.css';
import { HeaderZone } from './Header/Header';
import { FooterZone } from './Footer/Footer';
import IconBar from '../IconBar/IconBar';
import { SearchBar } from '../SearchBar/SearchBar';

const { Content } = Layout;

function MainLayout({ children }) {
  return (
    <div>
      <HeaderZone
        left={<IconBar />}
        right={<SearchBar />}
      />
      <Content id={styles.content}>
        {children}
      </Content>
      <FooterZone />
    </div>
  );
}

export default MainLayout;
