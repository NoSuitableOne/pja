import React from 'react';
import { Col, Layout, Row } from 'antd';
import styles from './Header.css';

const { Header } = Layout;

function HeaderZone({ left, right }) {
  return (
    <Header>
      <Row id={styles.header} type="flex" justify="space-between" style={{ backgroundColor: 'yellow' }}>
        <Col id={styles.iconBar} span={8} style={{ backgroundColor: 'green' }}>
          {left}
        </Col>
        <Col id={styles.searchBar} span={6} style={{ backgroundColor: 'pink' }}>
          {right}
        </Col>
      </Row>
    </Header>
  );
}

export { HeaderZone };
