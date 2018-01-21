import React, { Component } from 'react';
import { Card, Pagination } from 'antd';
import styles from './Cardpad.css';

class Cardpad extends Component {
  render() {
    return (
      <div className={styles.cardpad}>
        <div className={styles.cardpadHead}>
          pppp
        </div>
        <Card className={styles.card} hoverable title="Card title" extra={<a href="counter">More</a>}>
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
        </Card>
        <Card className={styles.card} hoverable title="Card title" extra={<a href="counter">More</a>}>
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
        </Card>
        <Card className={styles.card} hoverable title="Card title" extra={<a href="counter">More</a>}>
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
        </Card>
        <div>
          <Pagination className={styles.pagination} simple defaultCurrent={1} total={10} />
        </div>
      </div>
    );
  }
}

export default Cardpad;
