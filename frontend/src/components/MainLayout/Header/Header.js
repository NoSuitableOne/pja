import React from 'react';
import { Col, Layout, Row } from 'antd';
import styles from './Header.css';

const { Header } = Layout;

function HeaderZone({ left, right }) {
  return (
    <Header id={styles.header}>
      <div className={styles.ct}>
        <Row type="flex" justify="space-between">
          <Col span={8}>
            {left}
          </Col>
          <Col span={6}>
            {right}
          </Col>
        </Row>
      </div>
    </Header>
  );
}

export default HeaderZone;
