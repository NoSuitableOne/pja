import React from 'react';
import { connect } from 'dva';
import { Col, Row } from 'antd';
import Cardpad from '../Cardpad/Cardpad';

const News = ({ news, dispatch }) => {
  const CardpadElement = (news.origin).map((ele, idx) => (
    <Col key={idx} span={8}>
      <Cardpad
        current={ele.state.current}
        loading={ele.state.loading}
        title={ele.key}
        total={ele.total}
        passage={ele.passage}
        onPageChange={
          (page) => {
            const origin = ele.key;
            const url = `/${ele.key}`;
            dispatch(
              {
                type: 'news/fetch',
                payload: { origin, page, url },
              },
            );
          }
        }
        onCardDelete={
          (key) => {
            const cardKey = ele.key;
            dispatch(
              {
                type: 'news/delete',
                payload: {
                  passageKey: key,
                  cardKey: cardKey,
                },
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
