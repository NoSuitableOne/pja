import React from 'react';
import { Layout } from 'antd';
import styles from './MainLayout.css';
import HeaderZone from './Header/Header';
import FooterZone from './Footer/Footer';
import IconBar from '../IconBar/IconBar';
import UiBar from '../UiBar/UiBar';

const { Content } = Layout;

function MainLayout({ children }) {
  return (
    <div>
      <HeaderZone
        left={<IconBar />}
        right={<UiBar />}
      />
      <Content id={styles.contentBg}>
        <div className={styles.content}>
          {children}
        </div>
      </Content>
      <FooterZone />
    </div>
  );
}

export default MainLayout;
