import React from 'react';
import { Card, Pagination } from 'antd';
import styles from './Cardpad.css';

function Cardpad({ loading, total, onChange }) {
  return (
    <div className={styles.cardpad}>
      <div className={styles.cardpadHead}>
        pppp
      </div>
      <Card className={styles.card} hoverable title="Card title" loading={loading} extra={<a href="counter">More</a>}>
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
      </Card>
      <Card className={styles.card} hoverable title="Card title" loading={loading} extra={<a href="counter">More</a>}>
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
      </Card>
      <Card className={styles.card} hoverable title="Card title" loading={loading} extra={<a href="counter">More</a>}>
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
      </Card>
      <div>
        <Pagination
          size="small"
          className={styles.pagination}
          defaultCurrent={1}
          pageSize={3}
          total={total}
          onChange={onChange}
        />
      </div>
    </div>
  );
}

Cardpad.propTypes = {
  loading: React.PropTypes.bool,
  total: React.PropTypes.number,
  onChange: React.PropTypes.func,
};

export default Cardpad;
