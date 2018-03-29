import React from 'react';
import { Col, Layout, Row } from 'antd';
import styles from './Footer.css';

const { Footer } = Layout;

function FooterZone() {
  return (
    <Footer id={styles.footer}>
      <Row>
        <Col xs={24} sm={24} md={24}>
          <span>NoSuitableOne‘s product&nbsp;
            <a href="https://github.com/NoSuitableOne/pja" target="_blank" rel="noopener noreferrer">
              (NoSuitableOne@github.com)
            </a>
          </span>
        </Col>
      </Row>
    </Footer>
  );
}

export default FooterZone;
