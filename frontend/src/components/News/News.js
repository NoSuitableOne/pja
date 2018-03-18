import React from 'react';
import { connect } from 'dva';
import { Col, Row } from 'antd';
import Cardpad from '../Cardpad/Cardpad';
import { setLocal } from '../../services/news';

const News = ({ news, dispatch }) => {
  const CardpadElement = (news.display).map((ele, idx) => (
    <Col key={idx} span={8}>
      <Cardpad
        current={ele.state.current}
        loading={ele.state.loading}
        title={ele.key}
        total={ele.total}
        passages={ele.passages}
        onPageChange={
          (pageNum) => {
            const kwd = ele.key;
            dispatch(
              {
                type: 'news/turnPage',
                payload: { key: kwd, page: pageNum },
              },
            );
          }
        }
        onCardDelete={
          (key) => {
            const page = ele.state.current;
            const origin = ele.key;
            const url = `/${ele.key}`;
            setLocal(key, JSON.stringify({ "delete": true }));
            dispatch(
              {
                type: 'news/fetch',
                payload: { origin, page, url },
              },
            );
          }
        }
      />
    </Col>
  ));

  return (
    <div>
      <Row gutter={32}>
        {CardpadElement}
      </Row>
    </div>
  );
};

News.PropTypes = {};

function mapStateToProps(state) {
  return {
    news: state.news,
  };
}

export default connect(mapStateToProps)(News);
