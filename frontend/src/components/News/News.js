import React from 'react';
import { connect } from 'dva';
import { Col, Row } from 'antd';
import Cardpad from '../Cardpad/Cardpad';
import { setLocal } from '../../services/news';

const News = ({ news, dispatch }) => {
  const CardpadElement = (news.display).map((ele, idx) => (
    <Col key={idx} xs={24} lg={8}>
      <Cardpad
        current={ele.state.current}
        loading={ele.state.loading}
        title={ele.key}
        total={ele.total}
        passages={ele.passages}
        status={ele.status}
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
            const pageNum = ele.state.current;
            const kwd = ele.key;
            setLocal(key, 'delete');
            dispatch(
              {
                type: 'news/turnPage',
                payload: { key: kwd, page: pageNum },
              },
            );
          }
        }
        onCardFavourite={
          (key) => {
            const pageNum = ele.state.current;
            const kwd = ele.key;
            setLocal(key, 'favourite');
            dispatch(
              {
                type: 'news/turnPage',
                payload: { key: kwd, page: pageNum },
              },
            );
          }
        }
      />
    </Col>
  ));

  return (
    <Row gutter={32}>
      {CardpadElement}
    </Row>
  );
};

News.PropTypes = {};

function mapStateToProps(state) {
  return {
    news: state.news,
  };
}

export default connect(mapStateToProps)(News);
