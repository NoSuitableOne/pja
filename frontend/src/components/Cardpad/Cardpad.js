import React from 'react';
import { Card, Pagination } from 'antd';
import styles from './Cardpad.css';

function Cardpad({ loading, passage, title, total, dispatch }) {
  const cardElement = passage.map((ele, idx) => (
    <li key={idx}>
      <Card
        className={styles.card}
        hoverable
        title={ele.title}
        loading={loading}
        extra={<a href={ele.link}>More</a>}
      >
        <p>{ele.author}</p>
        <p>{ele.label}</p>
        <p>{ele.support}</p>
      </Card>
    </li>
  ));

  function onPageChange(page) {  // eslint-disable-line
    dispatch({ type: 'news/pageTurn' });
  }

  return (
    <div className={styles.cardpad}>
      <div className={styles.cardpadHead}>
        {title}
      </div>
      <div>
        <ul>
          {cardElement}
        </ul>
      </div>
      <div>
        <Pagination
          size="small"
          className={styles.pagination}
          defaultCurrent={1}
          pageSize={3}
          total={total}
          onChange={onPageChange}
        />
      </div>
    </div>
  );
}

Cardpad.propTypes = {
  loading: React.PropTypes.bool,
  title: React.PropTypes.string,
  total: React.PropTypes.number,
};

export default Cardpad;
