import React from 'react';
import { Col, Layout, Row } from 'antd';
import styles from './Header.css';

const { Header } = Layout;

function HeaderZone({ left, right }) {
  return (
    <Header id={styles.header}>
      <Row type="flex" justify="space-between">
        <Col span={8}>
          {left}
        </Col>
        <Col span={4}>
          {right}
        </Col>
      </Row>
    </Header>
  );
}

export default HeaderZone;
