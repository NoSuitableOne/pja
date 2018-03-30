/* eslint-disable quote-props */
import React from 'react';
import { Alert, Card, Icon, Pagination, Row, Col, Tooltip } from 'antd';
import styles from './Cardpad.css';


const Cardpad =
  ({ current, title, loading, onPageChange, onCardDelete, onCardFavourite,
     passages, total, status }) => {
    const classname = {
      'csdn': styles.csdnHead,
      'jobbole': styles.jobboleHead,
      'segmentfault': styles.segmentfaultHead,
    };
    const cardElement = passages.map((ele, idx) => (
      <li key={idx}>
        <Card
          className={styles.card}
          bodyStyle={{ padding: '12px 24px 8px' }}
          title={
            <Tooltip title={ele.title}>
              <a className={styles.cardTitle} href={ele.href} target="_blank" rel="noopener noreferrer">
                {ele.title}
              </a>
            </Tooltip>
          }
          loading={loading}
        >
          <div className={styles.cardCt}>
            <Row gutter={24}>
              <Col span={20} className={styles.cardInfo}>
                {ele.label && <p>标签： <span className={styles.label}>{ele.label}</span></p>}
                {ele.summary &&
                <div className={styles.summary}>
                  <Tooltip title={ele.summary}>
                    <p>内容简介： {ele.summary}</p>
                  </Tooltip>
                </div>}
                {!!ele.support && <p>获得的赞： <span>{ele.support}</span></p>}
                {ele.author && <p><span>作者： {ele.author}</span></p>}
                {ele.time && <p>发布时间： <span className={styles.time}>{ele.time}</span></p>}
              </Col>
              <Col span={4} className={styles.cardSetting}>
                {ele.title &&
                <div className={styles.cardSettingSwitch}>
                  <spqn><Icon type="down" /></spqn>
                  <div className={styles.cardBtns}>
                    <p onClick={onCardFavourite.bind(this, ele.key)}>
                      {
                        ele.favourite ?
                        (<span className={styles.favourite}><Icon type="heart" /></span>) :
                        (<span className={styles.unfavourite}><Icon type="heart-o" /></span>)
                      }
                    </p>
                    <p onClick={onCardDelete.bind(this, ele.key)}>
                      <span className={styles.delete}><Icon type="close-circle-o" /></span>
                    </p>
                  </div>
                </div>
                }
              </Col>
            </Row>
          </div>
        </Card>
      </li>
    ));

    return (
      <div className={styles.cardpad}>
        <div className={classname[title]}>
          <p>
            {title}
          </p>
        </div>
        {
          status === 'ok' ?
          (
            <div>
              <div>
                <ul className="news-cards">
                  {cardElement}
                </ul>
              </div>
              <div>
                <Pagination
                  className={styles.pagination}
                  simple
                  size="small"
                  defaultCurrent={1}
                  current={current}
                  pageSize={3}
                  total={total}
                  onChange={onPageChange}
                />
              </div>
            </div>
          )
            :
          (
            <div className={styles.virtualCard}>
              <Alert message="发生了一个错误" description={status} type="error" />
            </div>
          )
        }
      </div>
    );
  };

Cardpad.propTypes = {
  current: React.PropTypes.number,
  loading: React.PropTypes.bool,
  onPageChange: React.PropTypes.func,
  onCardDelete: React.PropTypes.func,
  onCardFavourite: React.PropTypes.func,
  passages: React.PropTypes.array,
  status: React.PropTypes.string,
  title: React.PropTypes.string,
  total: React.PropTypes.number,
};

export default Cardpad;
