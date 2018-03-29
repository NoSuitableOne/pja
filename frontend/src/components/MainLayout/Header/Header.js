import React from 'react';
import { Col, Layout, Row } from 'antd';
import styles from './Header.css';

const { Header } = Layout;

function HeaderZone({ left, right }) {
  return (
    <Header id={styles.header}>
      <div className={styles.ct}>
        <Row type="flex" justify="space-between">
          <Col xs={10} sm={8} md={10} lg={8}>
            {left}
          </Col>
          <Col xs={14} sm={16} md={12} lg={12}>
            {right}
          </Col>
        </Row>
      </div>
    </Header>
  );
}

export default HeaderZone;
