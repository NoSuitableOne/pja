import React from 'react';
import { Layout } from 'antd';
import styles from './Footer.css';

const { Footer } = Layout;

function FooterZone() {
  return (
    <Footer id={styles.footer}>
      <span>NoSuitableOne‘s product <a href="/#">NoSuitableOne@github.com</a></span>
    </Footer>
  );
}

export default FooterZone;
