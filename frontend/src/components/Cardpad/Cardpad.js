import React from 'react';
import { Card, Icon, Pagination } from 'antd';
import styles from './Cardpad.css';

const Cardpad = ({ current, title, loading, onPageChange, onCardDelete, passage, total }) => {
  function extraElement(key) {
    return (
      <div className={styles.extra}>
        <span className={styles.close} onClick={onCardDelete.bind(this, key)}>
          <Icon type="close-circle" />
        </span>
      </div>
    );
  }

  const cardElement = passage.map((ele, idx) => (
    <li key={idx}>
      <Card
        className={styles.card}
        title={ele.title}
        loading={loading}
        extra={extraElement(ele.key)}
      >
        <p>{ele.author}</p>
        <p>{ele.label}</p>
        <p>{ele.support}</p>
      </Card>
    </li>
  ));

  return (
    <div className={styles.cardpad}>
      <div className={styles.cardpadHead}>
        {title} news
      </div>
      <div>
        <ul>
          {cardElement}
        </ul>
      </div>
      <div>
        <Pagination
          size="small"
          defaultCurrent={1}
          current={current}
          className={styles.pagination}
          pageSize={3}
          total={total}
          onChange={onPageChange}
        />
      </div>
    </div>
  );
};

Cardpad.propTypes = {
  current: React.PropTypes.number,
  loading: React.PropTypes.bool,
  onPageChange: React.PropTypes.func,
  passage: React.PropTypes.array,
  title: React.PropTypes.string,
  total: React.PropTypes.number,
};

export default Cardpad;
