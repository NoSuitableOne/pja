import React from 'react';
import { Card, Icon, Pagination, Row, Col } from 'antd';
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
        bodyStyle={{ padding: '12px 24px 8px' }}
        title={<a href={ele.href} title={ele.title}>{ele.title}</a>}
        loading={loading}
      >
        <div className={styles.cardCt}>
          <Row gutter={24}>
            <Col span={20} className={styles.cardInfo}>
              {ele.label && <p>标签： <span className={styles.label}>{ele.label}</span></p>}
              {ele.summary &&
              <div className={styles.summary}>
                <p title={ele.summary}>内容简介： {ele.summary}</p>
              </div>}
              {!!ele.support && <p>获得的赞： <span>{ele.support}</span></p>}
              {ele.author && <p><span>作者： {ele.author}</span></p>}
              {ele.time && <p>发布时间： <span className={styles.time}>{ele.time}</span></p>}
            </Col>
            <Col span={4} className={styles.cardSetting}>
              <div className={styles.cardSettingSwitch}>
                <spqn><Icon type="down" /></spqn>
                <div className={styles.cardBtns}>
                  <p><span className={styles.cardLike}><Icon type="heart-o" /></span></p>
                  <p><span className={styles.cardDelete}><Icon type="close-circle-o" /></span></p>
                </div>
              </div>
            </Col>
          </Row>
        </div>
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
          simple
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
